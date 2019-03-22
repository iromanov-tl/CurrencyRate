#====== Global parameters
#$Version: String. Example

#====== Common functions
$basePath = "$scriptDir\.."
$projFile = "$basePath\deployment\CurrencyRate.proj"
$dbMigrationPath = "$basePath\db-migrations"
$platform = '"Any CPU"'

function GetVersion {
    $versionFile = "$basePath\build\version"
    $v = Get-Content $versionFile -ErrorVariable err -ErrorAction Stop
    if ( $err ) {
        throw $err
    }
    return $v
}

function WriteEnvironmentFile ( $envValue ) {
    $envFile = "$basePath\env"
    New-Item $envFile -type file  -force -value $envValue -ErrorVariable err -ErrorAction Stop
    if ( $err ) {
        throw $err
    }
    return $v
}

function GetDeploymentVersion(){
    $environment = GetEnvironment;
    $deploymentDir = GetDeploymentDir $environment;
    $deploymentVersionFile = $deploymentDir + "\new";
    $deploymentVersion = Get-Content $deploymentVersionFile -ErrorVariable err -ErrorAction Stop;
        if ( $err ) {
            throw $err
        }
    return $deploymentVersion;
}

function GetEnvironment {
    $envFile = "$basePath\env"
    $envValue = Get-Content $envFile -ErrorVariable err -ErrorAction Stop
    if ( $err ) {
        throw $err
    }
    return $envValue
}

function GetDeploymentDir($environment) {
    $configPath = "$scriptDir\..\Configuration\config.xml";

    $xpath      = "/config/deploymentSettings/$environment/deploymentDir/@path";
    $deploymentDirPath    = (Select-Xml -Path $configPath -XPath $xpath).Node.Value;

    if( [string]::IsNullOrWhiteSpace($deploymentDirPath) ) {
        throw [System.ArgumentException] "No deployment path found for $env";
    }

    return $deploymentDirPath;
}
