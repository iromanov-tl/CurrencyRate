$visualStudioVersion = "14.0";
$msBuild = "C:\Program Files\MSBuild\14.0\Bin\MSBuild.exe"
$vsTest = "C:\Program Files\Microsoft Visual Studio $visualStudioVersion\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe";
if ($ENV:Processor_architecture -eq "x86"){
    $msBuild = "C:\Program Files (x86)\MSBuild\$visualStudioVersion\Bin\MSBuild.exe"
    $vsTest = "C:\Program Files (x86)\Microsoft Visual Studio $visualStudioVersion\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe";
}
if ($ENV:Processor_architecture -eq "AMD64"){
    $msBuild = "C:\Program Files (x86)\MSBuild\$visualStudioVersion\Bin\MSBuild.exe"
    $vsTest = "C:\Program Files (x86)\Microsoft Visual Studio $visualStudioVersion\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe";
}
