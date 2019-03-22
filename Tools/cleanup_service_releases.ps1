# cleanup_service_releases.ps1 - cleans up old releases in specified folder
#
# SYNOPSIS
#    cleanup_service_releases.ps1 <parameters>
#
# PARAMETERS
#    -releasesPath - releases path (directory where releases are deployed to).

param (
    # Parameters
    [string]$releasesPath
)

# Process command line options and config file. Options specified on the command line
# override the options specified in the config file. Reasonable defaults are used.
function Init
{
    $Script:scriptFilename = split-path $MyInvocation.PSCommandPath -Leaf

    if ([string]::IsNullOrEmpty($releasesPath))
    {
        WriteError "Wrong parameters",
            "----------------------------------------",
            "Usage: $scriptFilename -releasesPath <releases path>"
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
}

# Main function
function Run
{
    CleanupReleases -releasesPath $releasesPath -pathsToSkip @($newReleasePath)

    ExitScript -exitCode 0
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