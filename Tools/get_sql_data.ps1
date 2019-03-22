# get_sql_data.ps1 - Executes sql query and prints out result
#
# SYNOPSIS
#    get_sql_data.ps1 <parameters>
#
# PARAMETERS
#    -connectionString - sql server connection string.
#    -query - sql query

param (
    [string]$connectionString,
    [string]$query
)

if ([string]::IsNullOrEmpty($connectionString) -or [string]::IsNullOrEmpty($query))
{
    	WriteError "Wrong parameters",
    		"----------------------------------------",
    		"Usage: get_sql_data.ps1 -connectionString <connection string> -query <query>"
}

$connection = New-Object -TypeName System.Data.SqlClient.SqlConnection
$connection.ConnectionString = $connectionString
$connection.Open()
$command = $connection.CreateCommand()
$command.CommandText = $query
$reader = $command.ExecuteReader()

while ($reader.Read())
{
  Write-Output $reader[0]
}

$connection.Close()
