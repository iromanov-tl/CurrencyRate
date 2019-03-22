# switch_website_dir.ps1 - Script to switch website directories to the new ones (to the new version)
#
# SYNOPSIS
#    switch_website_dir.ps1 <parameters>
#
# PARAMETERS
#    -SwitchWebsiteDirs - switches website dirs.
#    -Cleanup - cleans up releases.
#
#    -siteName - name of website to process.
#
#    -releasesPath - releases path (directory where releases are deployed to).
#
#    -siteRootPathRelativeToReleaseDirectory - site root directory path relative to the release directory (optional).
#       Default: <Empty string>

param (
    # Actions
    [Switch]$SwitchWebsiteDirs,
    [Switch]$Cleanup,
    # Parameters
    [string]$siteName,
    [string]$releasesPath,
    [string]$siteRootPathRelativeToReleaseDirectory = ""
)

# Process command line options and config file. Options specified on the command line
# override the options specified in the config file. Reasonable defaults are used.
function Init
{
    $Script:scriptFilename = split-path $MyInvocation.PSCommandPath -Leaf

    InitOption SwitchWebsiteDirs $false
    InitOption Cleanup $false

    if (-not ($SwitchWebsiteDirs -or $Cleanup)) {
        WriteError "You must specify an action: -SwitchWebsiteDirs, -Cleanup."
    }

    if ([string]::IsNullOrEmpty($siteName) -or [string]::IsNullOrEmpty($releasesPath))
    {
		WriteError "Wrong parameters",
			"----------------------------------------",
			"Usage: $scriptFilename <actions> -siteName <site name> -releasesPath <releases path> -siteRootPathRelativeToReleaseDirectory <site root directory path relative to the release directory>"
    }

    Set-Variable switchWebsiteMaxAttemptCount -scope script -option Constant -value 5

	[Void][Reflection.Assembly]::LoadWithPartialName("Microsoft.Web.Administration")
	$site = GetSite -siteName $siteName
	if ($site -eq $null)
    {
		WriteError "Website '$siteName' not found"
	}

	[string]$newVersionFile = "$releasesPath\new"
	if (-not (Test-Path $newVersionFile))
    {
		WriteError "Unknown version"
	}

	[string[]]$newVersionLines = Get-Content $newVersionFile
	if ($newVersionLines -eq $null -or [string]::IsNullOrEmpty($newVersionLines[0]))
    {
		WriteError "Unknown version"
	}

	[string]$Script:newReleasePath = "$releasesPath\$($newVersionLines[0])"
	if (-not (Test-Path $newReleasePath))
    {
		WriteError "Invalid version"
	}

    [string]$Script:oldReleasePath = GetOldReleasePath -site $site -siteRootPathRelativeToReleaseDirectory $siteRootPathRelativeToReleaseDirectory
}

# Main function
function Run
{
    if ($SwitchWebsiteDirs)
    {
        SwitchWebsiteDirs
    }

    if ($Cleanup)
    {
        # cleanup releases (old release path and new release path must not be deleted)
        CleanupReleases -releasesPath $releasesPath -pathsToSkip @($oldReleasePath, $newReleasePath)
    }

	ExitScript -exitCode 0
}

function SwitchWebsiteDirs
{
	Write-Host "Switching website directories. Please wait..."

	#[System.Collections.ArrayList]$switchedVirtualDirs = @()
	#[System.Collections.ArrayList]$rolledBackVirtualDirs = @()

	Try
	{
        $switchResult = $null
		$rollbackResult = $null
		# in case of failure to switch website directories up to $switchWebsiteMaxAttemptCount attempts will be made
		for($i=0; $i -lt $switchWebsiteMaxAttemptCount; $i++)
		{
			Try
			{
                $switchResult = DoSwitchWebsiteDirs -oldReleasePath $oldReleasePath -newReleasePath $newReleasePath
			}
			Catch
			{
                $switchResult = NewSwitchResult -isSuccess $false

				if ($i -ge $switchWebsiteMaxAttemptCount - 1)
				{
					Write-Host -ForegroundColor Red 'SWITCH FAILED'
					[string]$switchExceptionMessage = "$($_.Exception.Message) `($($_.ScriptStackTrace)`)";
					Write-Host "$switchExceptionMessage";

					# rollback
                    $rollbackResult = RollbackSwitchWebsiteDirs -oldReleasePath $newReleasePath -newReleasePath $oldReleasePath
				}
			}

			if ($switchResult.IsSuccess)
			{
				break
			}

			#Start-Sleep -milliseconds 300
		}

        if ($switchResult -eq $null)
        {
            # nothing has been done => exit
            ExitScript -exitCode 0
        }

		if (-not $switchResult.IsSuccess -and $rollbackResult -eq $null)
		{
            # switch failed but rollback has not been done yet
			Write-Host -ForegroundColor Red 'SWITCH FAILED'

			# rollback
            $rollbackResult = RollbackSwitchWebsiteDirs -oldReleasePath $newReleasePath -newReleasePath $oldReleasePath
		}

		# display results (current appilcations/virtual dirs state)
		ShowWebsiteDirsState -switchResult $switchResult -rollbackResult $rollbackResult

		if (-not $switchResult.IsSuccess)
		{
			WriteError ''
		}	

		Write-Host -ForegroundColor Green "DONE"
	}
	Catch	# Catch any errors in this script 
	{
		[string]$exceptionMessage = "$($_.Exception.Message) `($($_.ScriptStackTrace)`)";
		WriteError "$exceptionMessage";
	}
}

function ExitScript([int]$exitCode)
{
    $host.SetShouldExit($exitcode)
    exit
}

function WriteInfo
{
    foreach ($arg in $Args) {
        Write-Output $arg
    }
}

function WriteError
{
	Write-Output "ERROR"
    foreach ($arg in $Args) {
        Write-Output $arg
    }
    ExitScript -exitCode 1
}

function WriteDebug([string]$title, $obj)
{
	Write-Host ''
	Write-Host "------ $title"
	Write-Host ($obj | Format-List | Out-String)
	Write-Host "$title END------"
    Write-Host ''
}

# Init option from config file or default, if not specified on the command line.
function InitOption($_name_, $_default_ = $null)
{
    $_v_ = Get-Variable -scope script -name $_name_ -value
    if (-not $_v_)
    {
        $_v_ = Get-Variable -scope local -name $_name_ -value -ea SilentlyContinue
        if (-not $_v_)
        {
            $_v_ = $_default_
        }
        Set-Variable -scope script -name $_name_ -value $_v_
    }
}

function GetServerManager
{
	$computer = gc env:computername
	return [Microsoft.Web.Administration.ServerManager]::OpenRemote($computer.ToLower())
}

function GetSite([string]$siteName)
{
	$serverManager = GetServerManager
	return $serverManager.Sites | Where { $_.Name -eq $siteName }
}

function GetOldReleasePath(
    [Microsoft.Web.Administration.Site]$site,
    [string]$siteRootPathRelativeToReleaseDirectory
)
{
	$siteRootApp = $site.Applications | Where { $_.Path -eq "/" }
	$siteRootVirtualDir = $siteRootApp.VirtualDirectories | where { $_.Path -eq "/" }
	
	[string]$oldReleasePath = $siteRootVirtualDir.PhysicalPath
	[int]$relPathLength = "\$siteRootPathRelativeToReleaseDirectory".Length

	if (-not [string]::IsNullOrEmpty($siteRootPathRelativeToReleaseDirectory) `
		-and ($siteRootPathRelativeToReleaseDirectory -ne "\"))
	{
		if ($oldReleasePath.Substring($oldReleasePath.Length - $relPathLength) -eq "\$siteRootPathRelativeToReleaseDirectory") {
			# remove site root directory from current site root path to get release path for the current (old) version
			$oldReleasePath = $oldReleasePath.Substring(0, $oldReleasePath.Length - $relPathLength)
		}
	}
    
    return $oldReleasePath
}

function GetVirtualDirFullPath(
	[string]$siteName,
	[string]$appPath,
	[string]$virtualDirPath
)
{
	[string]$vdirFullPath = "$siteName$($app.Path)"
	if ($virtualDir.Path -ne "/")
	{
		$vdirFullPath += $virtualDir.Path
	}
	return $vdirFullPath
}

function VerifyDirectorySwitching(
	[System.Collections.ArrayList]$virtualDirsToVerify,
	[string]$newReleasePath
)
{
    if ($virtualDirsToVerify -eq $null -or $virtualDirsToVerify.Count -le 0)
    {
        return $true
    }

	$site = GetSite -siteName $siteName
	$apps = $site.Applications
	foreach($app in $apps)
	{
		$virtualDirs = $app.VirtualDirectories
		foreach($virtualDir in $virtualDirs)
		{
			[string]$vdirFullPath = GetVirtualDirFullPath -siteName $siteName -appPath $app.Path -virtualDirPath $virtualDir.Path
			if ($virtualDirsToVerify.Contains($vdirFullPath) -and -not ($virtualDir.PhysicalPath.StartsWith($newReleasePath)))
			{
				return $false
			}
		}
	}

	return $true
}

function NewSwitchResult()
{
    return New-Object psobject -Property @{ IsSuccess = $false; AffectedVirtualDirs = @() }
}

function NewSwitchResult([bool]$isSuccess, [System.Collections.ArrayList]$affectedVirtualDirs = @())
{
    return New-Object psobject -Property @{ IsSuccess = $isSuccess; AffectedVirtualDirs = $affectedVirtualDirs }
}

function DoSwitchWebsiteDirs([string]$oldReleasePath, [string]$newReleasePath)
{
    if (-not (Test-Path $oldReleasePath) -or -not (Test-Path $newReleasePath))
    {
	    return NewSwitchResult -isSuccess $false
    }

	# use new instance of $site (in the original state)
    $serverManager = GetServerManager
	$site = $serverManager.Sites | Where { $_.Name -eq $siteName }
	$apps = $site.Applications

    # case insensitive
    $reOldReleasePath = [regex]("(?i)^" + $oldReleasePath.Replace('\', '\\') + "(\\.+|$)")

    [System.Collections.ArrayList]$affectedVirtualDirs = @()
	foreach($app in $apps)
	{
		$virtualDirs = $app.VirtualDirectories
		foreach($virtualDir in $virtualDirs)
		{
			if (-not $reOldReleasePath.IsMatch($virtualDir.PhysicalPath))
			{
                # skip foreign applications
				continue;
			}

			[void]$affectedVirtualDirs.Add((GetVirtualDirFullPath -siteName $siteName -appPath $app.Path -virtualDirPath $virtualDir.Path))
    		$virtualDir.PhysicalPath = $virtualDir.PhysicalPath.Replace($oldReleasePath, $newReleasePath)
		}
	}

	# recycle app pools
	$appPools = $site.ApplicationPools
	foreach($appPool in $appPools)
	{
		$appPool.Recycle();
	}

	$serverManager.CommitChanges()

	# verify switching
    [bool]$isSuccess = VerifyDirectorySwitching -virtualDirsToVerify $affectedVirtualDirs -newReleasePath $newReleasePath
	return NewSwitchResult -isSuccess $isSuccess -affectedVirtualDirs $affectedVirtualDirs
}

function ShowWebsiteDirsState($switchResult, $rollbackResult)
{
    if ($switchResult -eq $null -or $switchResult.AffectedVirtualDirs -eq $null -or $switchResult.AffectedVirtualDirs.Count -le 0)
    {
        return
    }

    $switchedVirtualDirs = $switchResult.AffectedVirtualDirs

    $rolledBackVirtualDirs = @()
    if ($rollbackResult -ne $null -and $rollbackResult.AffectedVirtualDirs -ne $null)
    {
        $rolledBackVirtualDirs = $rollbackResult.AffectedVirtualDirs
    }

	$site = GetSite -siteName $siteName
	$apps = $site.Applications
	foreach($app in $apps)
	{
		$virtualDirs = $app.VirtualDirectories
		foreach($virtualDir in $virtualDirs)
		{
			[string]$vdirFullPath = GetVirtualDirFullPath -siteName $siteName -appPath $app.Path -virtualDirPath $virtualDir.Path
			if ($switchedVirtualDirs.Contains($vdirFullPath))
			{
				WriteInfo "Changed VDIR '$vdirFullPath': $($virtualDir.PhysicalPath)"
			}
			elseif ($rolledBackVirtualDirs.Contains($vdirFullPath))
			{
				WriteInfo "Rolled back VDIR '$vdirFullPath': $($virtualDir.PhysicalPath)"
			}
			else
			{
				WriteInfo "Skipped VDIR '$vdirFullPath': $($virtualDir.PhysicalPath)"
			}
		}
	}
}

function RollbackSwitchWebsiteDirs([string]$oldReleasePath, [string]$newReleasePath)
{
    Write-Host "Rolling back. Please wait..."

    $rollbackResult = $null
	for($i=0; $i -lt $switchWebsiteMaxAttemptCount; $i++)
	{
		Try
		{
            $rollbackResult = DoSwitchWebsiteDirs -oldReleasePath $oldReleasePath -newReleasePath $newReleasePath
		}
		Catch
		{
            $rollbackResult = NewSwitchResult -isSuccess $false

			if ($i -ge $switchWebsiteMaxAttemptCount - 1)
			{
				Write-Host 'ROLLBACK FAILED'
				[string]$exceptionMessage = "$($_.Exception.Message) `($($_.ScriptStackTrace)`)";
				Write-Host "$exceptionMessage";
			}
		}

		if ($rollbackResult.IsSuccess)
		{
			break
		}

		#Start-Sleep -milliseconds 300
	}

    if ($rollbackResult -eq $null -or $rollbackResult.IsSuccess)
	{
        Write-Host -ForegroundColor Green "DONE"
    }

	return $rollbackResult
}

function CleanupReleases([string]$releasesPath, [string[]]$pathsToSkip)
{
    if ([string]::IsNullOrEmpty($releasesPath))
    {
        return
    }

    Write-Host "Cleaning up releases. Please wait..."

    Set-Variable keepReleases -option Constant -value 5
    
    if ($pathsToSkip -eq $null)
    {
        $pathsToSkip = @()
    }

    [string]$dirNamePattern = '^\d{14}$'
    $releaseDirs = Get-ChildItem "$releasesPath" -Force -ErrorAction SilentlyContinue `
        | Where-Object { $_.PSIsContainer -and $_.Name -Match $dirNamePattern } `
        | Sort CreationTime

    [int]$releaseDirCount = $releaseDirs.Count
    if ($releaseDirCount -gt $keepReleases)
    {
        $dirsToDelete = $releaseDirs | Where-Object { -not $pathsToSkip.Contains($_.FullName) } `
            | Select-Object -First ($releaseDirCount - $keepReleases)

        WriteInfo ''
        foreach($dirToDelete in $dirsToDelete)
        {
            Write-Host "Deleting $($dirToDelete.FullName)"
            Remove-Item -LiteralPath $dirToDelete.FullName -Force -Recurse -ErrorAction SilentlyContinue
        }
    }

    Write-Host -ForegroundColor Green "DONE"
}

Init
Run