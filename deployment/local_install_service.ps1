#====== Script destination
# switching application to new version

$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
."$scriptDir\_common.inc.ps1"
."$scriptDir\_config.inc.ps1"

$serviceName = 'Travelline CurrencyRate'
$serviceDescription = 'Executes jobs: ***********************.'
$servicePath = "d:\sources\CurrencyRate\WinServices\CurrencyRateSvc\bin\Debug\CurrencyRateSvc.exe";
$serviceNotInstalledResult = "serviceNotInstalledResult";

function SwitchService {
    $serviceStopResult = StopService;
    if ($serviceStopResult -eq $serviceNotInstalledResult) {
        InstallService;
    }
    else {
        ChangeServicePath;
    }
    StartService;
}

function StopService {
    Write-Host "Stopping service..."
    $service = Get-WmiObject -Class Win32_Service -Filter "Name='$serviceName'"
    if ($service) {
        Stop-Service $serviceName -ErrorVariable err -ErrorAction Stop
        if ( $err ) {
            Write-Host -ForegroundColor Red "Error: an't stopped service!"
            throw $err
        }
        Write-Host -ForegroundColor Green "Service stopped."
    } else {
        Write-Host -ForegroundColor Yellow "service doesn't exist"
        return $serviceNotInstalledResult;
    }
}

function InstallService {
    Write-Host "Installing service..."

    $login = "TRAVELLINE\TLApplicationPool"
    $password = ConvertTo-SecureString "gfhjkm`$56" -AsPlainText -Force
    
    $creds = New-Object System.Management.Automation.PSCredential($login, $password)
    New-Service -Name $serviceName -Description $serviceDescription -BinaryPathName $servicePath -StartupType Automatic -credential $creds -ErrorVariable err -ErrorAction Stop

    if ($err) {
        throw $err
    }
    sc.exe failure $serviceName reset= 300 actions= restart/20000/restart/20000/restart/20000

    Write-Host -ForegroundColor Green "Service installed."
}

function ChangeServicePath {
    Write-Host "Changing service path..."
    Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\$serviceName" -Name ImagePath -Value "$servicePath" -ErrorVariable err -ErrorAction Stop
    if ($err) {
        Write-Host -ForegroundColor Red "Error: can't changed service path!"
        throw $err;
    }
    Write-Host -ForegroundColor Green "Service path changed."
}

function StartService {
    Write-Host "Starting service..."

    Start-Service $serviceName -ErrorVariable err -ErrorAction Stop
    if ($err) {
        throw $err
    }

    Write-Host -ForegroundColor Green "Service started."
}


#start here
try {
    SwitchService
} catch {
    throw $Error[0]
}
