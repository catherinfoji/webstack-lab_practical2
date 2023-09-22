<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
 <body>
  <h1 align="center">Jokes</h1>
   <table border="3" align="center" >
   <tr>
    <th>category</th>
    <th>joke</th>
   </tr>
    <xsl:for-each select="jokes/joke">
   <tr>
    <td><xsl:value-of select="jo"/></td>
    <td><xsl:value-of select="jok"/></td>
   </tr>
    </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>