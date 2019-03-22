<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="xml" indent="yes" encoding="UTF-8" />
    <xsl:include href="environments.xsl" />
    <xsl:template match="/config">
        <xsl:param name="env">local</xsl:param>
        <configuration>
            <configSections>
                <sectionGroup name="common">
                    <section name="logging" type="Common.Logging.ConfigurationSectionHandler, Common.Logging" />
                </sectionGroup>
                <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net" />            
                <section name="mailDispatchPoints" requirePermission="false" type="TravelLine.CurrencyRate.Core.Configuration.MailDispatchPoint.MailDispatchPointsSection, TravelLine.CurrencyRate.Core" />
                <section name="database" requirePermission="false" type="TravelLine.CurrencyRate.Core.Configuration.DatabaseConfiguration,TravelLine.CurrencyRate.Core" />
                <section name="accountsApi" requirePermission="false" type="TravelLine.CurrencyRate.Core.Configuration.AccountsApiConfiguration,TravelLine.CurrencyRate.Core" />
                <section name="tlAccountsLib" requirePermission="false" type="TravelLine.AccountsLib.Configuration.AccountsLibConfig" />
            </configSections>
            <appSettings>
                <xsl:apply-templates select="appSettings2">
                    <xsl:with-param name="env" select="$env" />
                </xsl:apply-templates>
            </appSettings>
            <xsl:apply-templates select="database">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="accountsApi">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="mailDispatchPoints">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="tlAccountsLib">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <common>
                <logging>
                  <factoryAdapter type="Common.Logging.Log4Net.Log4NetLoggerFactoryAdapter, Common.Logging.Log4Net1213">
                    <arg key="configType" value="INLINE" />
                  </factoryAdapter>
                </logging>
            </common>
            <xsl:apply-templates select="log4net">
                <xsl:with-param name="env" select="$env" /> 
            </xsl:apply-templates>

            <location path="service">
                <system.web>
                    <httpRuntime requestValidationMode="2.0" />
                    <authorization>
                        <allow users="*" />
                    </authorization>
                    <customErrors mode="Off" />
                </system.web>
            </location>

            <runtime>
                <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
                    <dependentAssembly>
                        <assemblyIdentity name="Newtonsoft.Json" culture="neutral" publicKeyToken="30ad4fe6b2a6aeed" />
                        <bindingRedirect oldVersion="0.0.0.0-7.0.0.0" newVersion="7.0.0.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="TravelLine.AccountsLib" publicKeyToken="56acb0f4b05c4ab4" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-1.1.10.0" newVersion="1.1.10.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="TravelLine.ServiceBoost" publicKeyToken="a9fee5da56069ebb" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-1.0.5.0" newVersion="1.0.5.0" />
                    </dependentAssembly>
                </assemblyBinding>
            </runtime>            
        </configuration>
    </xsl:template>
    <xsl:include href="templates.xsl" />
</xsl:stylesheet>
