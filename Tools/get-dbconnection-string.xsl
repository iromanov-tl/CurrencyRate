<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output method="text" indent="no" encoding="UTF-8" />
  <xsl:strip-space elements="*" />
  <xsl:param name="env" select="env" />

  <xsl:template match="/config/database">
    <xsl:choose>
      <xsl:when test="count(*[name()=$env])=1">
        <xsl:value-of disable-output-escaping="yes" select="*[name()=$env]/@connectionString" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="*[position()=1]/@connectionString" />
      </xsl:otherwise>
   </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
