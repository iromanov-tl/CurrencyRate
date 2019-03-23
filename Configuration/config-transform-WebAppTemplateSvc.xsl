<?xml version="1.0" encoding="UTF-8"?>
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
                <section name="mailDispatchPoints" requirePermission="false" type="TravelLine.WebAppTemplate.Core.Configuration.MailDispatchPoint.MailDispatchPointsSection, TravelLine.WebAppTemplate.Core" />
                <section name="logSystem" requirePermission="false" type="TravelLine.WebAppTemplate.Core.Configuration.LogSystemConfiguration, TravelLine.WebAppTemplate.Core" /> 
                <section name="tlTransit" requirePermission="false" type="TravelLine.TLTransit.Common.Configuration.TLTransitConfig, TravelLine.TLTransit.Common" />
                <section name="webAppTemplate" requirePermission="false" type="TravelLine.WebAppTemplate.Core.Configuration.WebAppTemplateConfiguration,TravelLine.WebAppTemplate.Core" />
                <section name="database" requirePermission="false" type="TravelLine.WebAppTemplate.Core.Configuration.DatabaseConfiguration,TravelLine.WebAppTemplate.Core" />
                <section name="travellineService" requirePermission="false" type="TravelLine.WebAppTemplate.Core.Configuration.TravellineServiceConfig,TravelLine.WebAppTemplate.Core" />
                <section name="appHealthConfiguration" requirePermission="false" type="TravelLine.AppHealth.Config.AppHealthConfiguration, TravelLine.AppHealth" />
            </configSections>
            <appSettings>
                <xsl:apply-templates select="appSettings1">
                    <xsl:with-param name="env" select="$env" />
                </xsl:apply-templates>
                <xsl:apply-templates select="appSettings2">
                    <xsl:with-param name="env" select="$env" />
                </xsl:apply-templates>
            </appSettings>
            <xsl:apply-templates select="webAppTemplate">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="database">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <common>
                <logging>
                    <factoryAdapter type="Common.Logging.Log4Net.Log4NetLoggerFactoryAdapter, Common.Logging.Log4Net1213">
                        <arg key="configType" value="INLINE" />
                    </factoryAdapter>
                </logging>
            </common>  
            <xsl:apply-templates select="log4netTLIntegrationService">
                <xsl:with-param name="env" select="$env" /> 
            </xsl:apply-templates>
            <xsl:apply-templates select="mailDispatchPoints">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="tlTransit">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <xsl:apply-templates select="travellineService">
                <xsl:with-param name="env" select="$env" />
            </xsl:apply-templates>
            <appHealthConfiguration httpServerPort="1235" />             
            <xsl:apply-templates select="logSystem">
                <xsl:with-param name="env" select="$env" /> 
            </xsl:apply-templates>
            <system.web>
                <compilation debug="true" targetFramework="4.5.2" />
                <httpRuntime targetFramework="4.5.2" />
            </system.web>
            <runtime>
                <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
                    <dependentAssembly>
                        <assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-7.0.0.0" newVersion="7.0.0.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="System.Web.Http" publicKeyToken="31bf3856ad364e35" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-5.2.3.0" newVersion="5.2.3.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="System.Web.Http.WebHost" publicKeyToken="31bf3856ad364e35" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-5.2.3.0" newVersion="5.2.3.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="Ninject" publicKeyToken="c7192dc5380945e7" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-3.2.0.0" newVersion="3.2.0.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="Common.Logging.Core" publicKeyToken="af08829b84f0328e" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-3.3.1.0" newVersion="3.3.1.0" />
                    </dependentAssembly>
                    <dependentAssembly>
                        <assemblyIdentity name="Common.Logging" publicKeyToken="af08829b84f0328e" culture="neutral" />
                        <bindingRedirect oldVersion="0.0.0.0-3.3.1.0" newVersion="3.3.1.0" />
                    </dependentAssembly>                    
                </assemblyBinding>
            </runtime>
        </configuration>
    </xsl:template>
    <xsl:template match="log4netTLIntegrationService" priority="100">
        <xsl:param name="env">dev</xsl:param> 
        <xsl:call-template name="copy-env-config">
            <xsl:with-param name="node">log4net</xsl:with-param> 
            <xsl:with-param name="env" select="$env" /> 
        </xsl:call-template>
    </xsl:template>
    <xsl:include href="templates.xsl" />
</xsl:stylesheet>