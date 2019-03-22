#====== Script destination
# switching application to new version

$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
."$scriptDir\_common.inc.ps1"
."$scriptDir\_config.inc.ps1"

$environment = GetEnvironment
$deploymentDir = GetDeploymentDir $environment;
$deploymentVersion = GetDeploymentVersion;

$gMSA = "TRAVELLINE\gmsaCurrencyRatePool`$"
$serviceNotInstalledResult = "serviceNotInstalledResult";

function SwitchWebsite {
    Write-Host "Start switching website..."
       
    $deploymentVersion = GetDeploymentVersion
    $config = "$scriptDir\..\Configuration\config.xml"
    
    $xpath      = "/config/deploymentSettings/$environment/domain/@name";
    $hostName    = (Select-Xml -Path $config -XPath $xpath).Node.Value;
   
    Write-Host "SCRIPT COMMAND: $scriptDir\_switch_website.bat $hostName $deploymentDir\$deploymentVersion"
    
    $switchWebsite = "$scriptDir\_switch_website.bat $hostName $deploymentDir\$deploymentVersion"
    $switchWebsite += " || exit 1"
    cmd.exe /c "$switchWebsite"
    if ($LASTEXITCODE -ne "0") {
        throw $LASTEXITCODE
    }

    Write-Host -ForegroundColor Green "Website switched."
}

function SwitchService($serviceName, $serviceDescription, $servicePath) {
    $serviceStopResult = StopService $serviceName;
    if ($serviceStopResult -eq $serviceNotInstalledResult) {
        InstallService $serviceName $serviceDescription $servicePath;
    }
    else {
        ChangeServicePath $serviceName $servicePath;
    }
    StartService $serviceName;
}

function StopService($serviceName) {
    Write-Host "Stopping $serviceName ..."
    $service = Get-WmiObject -Class Win32_Service -Filter "Name='$serviceName'"
    if ($service) {
        Stop-Service $serviceName -ErrorVariable err -ErrorAction Stop
        if ( $err ) {
            Write-Host -ForegroundColor Red "Error: Can't stop $serviceName!"
            throw $err
        }
        Write-Host -ForegroundColor Green "$serviceName stopped."
    } else {
        Write-Host -ForegroundColor Yellow "Service $serviceName doesn't exist"
        return $serviceNotInstalledResult;
    }
}

function InstallService($serviceName, $serviceDescription, $servicePath) {
    Write-Host "Installing $serviceName ..."

    if ($environment -ne "dev")
    {
        sc.exe create $serviceName obj= "$gMSA" binPath= "$servicePath" start= auto
        sc.exe description $serviceName $serviceDescription
        sc.exe failure $serviceName reset= 300 actions= restart/20000/restart/20000/restart/20000
    } else
    {
        $login = "TRAVELLINE\TLApplicationPool"
        $password = ConvertTo-SecureString "gfhjkm`$56" -AsPlainText -Force
        
        $creds = New-Object System.Management.Automation.PSCredential($login, $password)
        New-Service -Name $serviceName -Description $serviceDescription -BinaryPathName $servicePath -StartupType Automatic -credential $creds -ErrorVariable err -ErrorAction Stop
        if ($err) {
            throw $err
        }
        sc.exe failure $serviceName reset= 300 actions= restart/20000/restart/20000/restart/20000
    }    

    Write-Host -ForegroundColor Green "Service installed."
}

function ChangeServicePath($serviceName, $servicePath) {
    Write-Host "Changing $serviceName path..."
    Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\$serviceName" -Name ImagePath -Value "$servicePath" -ErrorVariable err -ErrorAction Stop
    if ($err) {
        Write-Host -ForegroundColor Red "Error: can't change $serviceName path!"
        throw $err;
    }
    Write-Host -ForegroundColor Green "$serviceName path changed."
}

function StartService($serviceName) {
    Write-Host "Starting $serviceName ..."

    Start-Service $serviceName -ErrorVariable err -ErrorAction Stop
    if ($err) {
        throw $err
    }

    Write-Host -ForegroundColor Green "$serviceName started."
}


#start here
try {
    SwitchWebsite
    SwitchService "TL.CurrencyRate.IntegrationSvc" "Travelline CurrencyRate integration" "$deploymentDir\$deploymentVersion\services\CurrencyRateSvc\CurrencyRateSvc.exe"
    # Other application services
} catch {
    throw $Error[0]
}
