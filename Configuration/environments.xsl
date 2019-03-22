<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      xml:space="preserve">

  <xsl:template match="/" mode="dev">
    <xsl:apply-templates select="/config">
      <xsl:with-param name="env">dev</xsl:with-param>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="/" mode="ilya.romanov">
    <xsl:apply-templates select="/config">
      <xsl:with-param name="env">ilya.romanov</xsl:with-param>
    </xsl:apply-templates>
  </xsl:template>
  
  <xsl:template match="/" mode="qa">
    <xsl:apply-templates select="/config">
      <xsl:with-param name="env">qa</xsl:with-param>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="/" mode="qa2">
    <xsl:apply-templates select="/config">
      <xsl:with-param name="env">qa2</xsl:with-param>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="/" mode="prod">
    <xsl:apply-templates select="/config">
      <xsl:with-param name="env">prod</xsl:with-param>
    </xsl:apply-templates>
  </xsl:template>

</xsl:stylesheet>
