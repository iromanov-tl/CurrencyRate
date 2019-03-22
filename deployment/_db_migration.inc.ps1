$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
$basePath = "$scriptDir\.."
$migrationTool = "$basePath\Utils\DBMigration\DBMigration.exe"
$config = "$basePath\Configuration\config.xml"

function DbUpdate($env, $prePost) {
    $xpath      = "/config/database/$env/@connectionString";
    $connStr    = (Select-Xml -Path $config -XPath $xpath).Node.Value;

    if( [string]::IsNullOrEmpty($connStr) ) {
        throw [System.ArgumentException] "No connection string found for $env";
    }

    echo "ConnectionString: $connStr"
    
    $updateCommand = "$migrationTool update --$prePost --conn=""$connStr"" --dir=$basePath\db-migrations || exit 1";

    cmd.exe /c $updateCommand
    if ($LASTEXITCODE -ne "0") {
        throw $LASTEXITCODE
    }
}