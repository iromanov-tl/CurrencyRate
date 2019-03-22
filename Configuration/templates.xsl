<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >


    <xsl:template match="/config/*">
      <xsl:param name="env" />
      <xsl:call-template name="copy-env-config">
        <xsl:with-param name="node" select="name()" />
        <xsl:with-param name="env" select="$env" />
      </xsl:call-template>
    </xsl:template>

    <xsl:template match="/config/system.serviceModel/client/*">
      <xsl:param name="env" />
      <xsl:call-template name="copy-env-config">
        <xsl:with-param name="node" select="name()" />
        <xsl:with-param name="env" select="$env" />
      </xsl:call-template>
    </xsl:template>

    <xsl:template match="/config/system.serviceModel/bindings/basicHttpBinding/*">
      <xsl:param name="env" />
      <xsl:call-template name="copy-env-config">
        <xsl:with-param name="node" select="name()" />
        <xsl:with-param name="env" select="$env" />
      </xsl:call-template>
    </xsl:template>

    <xsl:template match="/config/appSettings1|/config/appSettings2">
      <xsl:param name="env" />
      <xsl:choose>
        <xsl:when test="count(*[name()=$env])>0">
          <xsl:apply-templates select="*[name()=$env]/@*"/>
          <xsl:apply-templates select="*[name()=$env]/*"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:apply-templates select="*[1]/@*"/>
          <xsl:apply-templates select="*[1]/*"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:template>

    <!-- look up and copy env node -->
    <xsl:template name="copy-env-config">
        <xsl:param name="node" />
        <xsl:param name="env" />
        <xsl:element name="{$node}" >
          <xsl:choose>
            <xsl:when test="count(*[name()=$env])>0">
              <xsl:apply-templates select="*[name()=$env]/@*"/>
              <xsl:apply-templates select="*[name()=$env]/*"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:apply-templates select="*[1]/@*"/>
              <xsl:apply-templates select="*[1]/*"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:element>
    </xsl:template>

    <!-- copy node -->
    <xsl:template  match="node()">
        <xsl:if test="local-name()!=''">
          <xsl:element name="{local-name()}" >
            <xsl:apply-templates select="./@*"/>
            <xsl:apply-templates select="node()" />
          </xsl:element>
        </xsl:if>
    </xsl:template>

    <xsl:template  match="@*">
        <xsl:copy />
    </xsl:template>
    
    <xsl:template match="*[not(comment() | processing-instruction() | *)][normalize-space(text()) = '']">
        <xsl:element name="{name()}" namespace="{namespace-uri()}">
            <xsl:for-each select="@* | namespace::*">
                <xsl:copy/>
            </xsl:for-each>
        </xsl:element>
    </xsl:template>

</xsl:stylesheet>