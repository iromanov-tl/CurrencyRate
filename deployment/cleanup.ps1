$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
."$scriptDir\_common.inc.ps1"
."$scriptDir\_config.inc.ps1"

$environment = GetEnvironment
[string]$deploymentDir = GetDeploymentDir $environment;
[int]$keepReleases = 8;
[string]$deploymentVersion = GetDeploymentVersion;

function CleanUp {
    Write-Host "Starting cleanup..."

    [string]$dirNamePattern = '^\d{14}$';
    $releaseDirs = Get-ChildItem "$deploymentDir" -Force -ErrorAction SilentlyContinue `
        | Where-Object { $_.PSIsContainer -and $_.Name -Match $dirNamePattern } `
        | Sort Name;

    [int]$currentReleaseIndex = GetIndex $releasedirs $deploymentVersion
    if ($currentReleaseIndex -eq -1 ) {
        Write-Host -ForegroundColor Yellow "Current release folder not found!";
        return;
    }

    [int]$releaseDirCount = $releaseDirs.Count
    [int]$maxDeleteIndex = $currentReleaseIndex - $keepReleases;
    if ($maxDeleteIndex -lt 0) {
        Write-Host -ForegroundColor Yellow "Nothing to delete!";
        return;
    }

    for ($i = 0; $i -le $maxDeleteIndex; $i++) {
         Write-Host "Deleting $($releaseDirs[$i].FullName)"
            Remove-Item -LiteralPath $releaseDirs[$i].FullName -Force -Recurse -ErrorAction SilentlyContinue
    }

    Write-Host -ForegroundColor Green "Cleanup done."
}

function GetIndex($array, $value) {
    for ($i = 0; $i -lt $array.Count; $i++) {
        if ($array[$i].Name -eq $value) {
            return $i;
        }
    }

    return -1;
}

#start here
try {
    CleanUp
} catch {
    throw $Error[0]
}


