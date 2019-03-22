#====== Script destination
# deploy from deployment package 

param( 
        [Parameter(Mandatory=$True)]
        [String]
        $Environment
     )

$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
."$scriptDir\_common.inc.ps1"
."$scriptDir\_config.inc.ps1"

$packageVersion     = GetVersion  
$deploymentVersion  = Get-Date -Format yyyyMMddHHmmss
$deploymentRootPath = GetDeploymentDir $Environment
$deploymentNewVersionFilePath = $deploymentRootPath + "\new"
$deploymentPath     = $deploymentRootPath + "\" + $deploymentVersion
$packageRootPath    = $scriptDir + "\.."
$packageBuildPath   = $packageRootPath + "\build"
$msxslTool          = $packageRootPath + "\utils\msxsl.exe"
$configurationDir   = $packageRootPath + "\Configuration"
$configFile         = $configurationDir + "\config.xml"

function GenerateAppConfig([string]$configTransformFile, [string]$outputConfigFile) {
    $updateCommand = "$configFile $configTransformFile -o $outputConfigFile -m $Environment"
    cmd /c "$msxslTool $updateCommand || exit 1"
    if ($LASTEXITCODE -ne "0") {
        Write-Error "Config file  does not generated"
        throw $LASTEXITCODE
    }
    echo "done"
}


function DeployFromPackage {   
    Copy-Item -Path $packageBuildPath -Filter *.* -Destination $deploymentPath -Recurse -Verbose

    GenerateAppConfig "$configurationDir\config-transform-CurrencyRateSvc.xsl" "$deploymentPath\services\CurrencyRateSvc\CurrencyRateSvc.exe.config"
    GenerateAppConfig "$configurationDir\config-transform-ExtranetApi.xsl" "$deploymentPath\api\extranet\web.config"
    GenerateAppConfig "$configurationDir\config-transform-AccountsApi.xsl" "$deploymentPath\api\accounts\web.config"
    
    CreateIndexFiles

    WriteNewDeploymentVersionFile $deploymentNewVersionFilePath $deploymentVersion
}

function CreateIndexFiles() {
	if (Test-Path "$deploymentPath\web\extranet\index.html.$Environment") {
        Copy-Item -Path "$deploymentPath\web\extranet\index.html.$Environment" -Destination "$deploymentPath\web\extranet\index.html" -Verbose
    }
    else {
        Copy-Item -Path "$deploymentPath\web\extranet\index.html.dev" -Destination "$deploymentPath\web\extranet\index.html" -Verbose
    }
}

function WriteNewDeploymentVersionFile ( $filePath, $newVersionValue ) {
    New-Item $filePath -type file -force -value $newVersionValue -ErrorVariable err -ErrorAction Stop
    if ( $err ) {
        throw $err
    }
    return $v
}

#start here
DeployFromPackage
WriteEnvironmentFile $Environment
