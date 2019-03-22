#====== Script destination
# creating deployment package with msbuild package task and copying
# db-migration scripts to package directory $packageDstDir
[CmdletBinding()]
param(  
        [Parameter(Mandatory=$true)]
        [String]
        $packageDstDir,
        
        [Parameter(Mandatory=$true)]
        [String]
        $Version,

        [Parameter(Mandatory=$false)]
        [String]
        $WithTests
     );



$scriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
."$scriptDir\_common.inc.ps1"
."$scriptDir\_config.inc.ps1"


function DeploymentPackage {
    $build = """$msBuild"" $projFile /p:VisualStudioVersion=$visualStudioVersion /t:Package /p:PackageDestinationDirectory=$packageDstDir /p:PackageVersion=$Version /p:UseWPP_CopyWebApplication=True /p:PipelineDependsOnBuild=False"
    echo $build
	if ($WithTests){
		$build += " /p:WithTests=$WithTests";
	}
    $build += " || exit 1";
    cmd.exe /c $build;
    if ($LASTEXITCODE -ne "0") {
        throw $LASTEXITCODE
    }
}

#start here
DeploymentPackage

