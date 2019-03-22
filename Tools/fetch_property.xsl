<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" version="1.0" encoding="iso-8859-1" indent="no"/>
  <xsl:param name="name" />
  
  <xsl:template match="/">
     <xsl:value-of select="//*[local-name()=$name]" />
  </xsl:template>

</xsl:stylesheet>