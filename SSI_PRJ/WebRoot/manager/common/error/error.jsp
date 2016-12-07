<%@ page contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<title>应用错误</title>
</head>
<body> 
显示应用级错误信息 
<s:property value="exception.message"/>
</body>
</html>