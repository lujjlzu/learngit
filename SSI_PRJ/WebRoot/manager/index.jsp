<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
<title>***管理信息系统</title>
<%@ include file="./common/include/common_head.jsp" %>
<link href="<%=webapp%>/manager/css/default.css" rel="stylesheet" type="text/css" />
<body class="bodylog">
	<div class="mainlog">
		<div class="logbg">		
		<s:form action="" method="post" name="loginForm">
		<table class="tab01-log">
		  <tr>
			<td class="t1">用户名：</td>
			<td class="t2"><input type="text" class="text" id="loginName" name ="loginName"/></td>
		  </tr>
		  <tr>
			<td class="t1">密&nbsp;&nbsp;码：</td>
			<td class="t2"><input type="password" class="text" id="pass" name="pass"/></td>
		  </tr>
		  <tr>
		    <td colspan="2">
		        <s:if test="hasActionMessages()">
					<span class="errorMessage"> <b>Errors:</b>  <s:iterator
							value="ActionMessages">
							<li>
								<s:property/>
							</li>
						</s:iterator> </span>
				</s:if>
				<s:if test="hasFieldErrors()">
					<span class="errorMessage"> <b>Errors:</b>  <s:iterator
							value="fieldErrors">
							<li>
								<s:property/>
							</li>
						</s:iterator> </span>
				</s:if>
		    
		    </td>
		  
		  </tr>
		  <tr>
			<td class="t1"></td>
			<td class="t2"><a href="javascript:void(0)" class="btn logbtn" onclick="login()">登录</a><a href="javascript:void(0)" class="btn logbtn" onclick="reset()">清除</a></td>
		  </tr>
		</table>
		</s:form>
		</div>
	</div>
</body>
<script language="javascript">
function login(){
    if (document.getElementById("loginName").value==""){
        alert("请输入用户名！");
        return false;
    }
    if (document.getElementById("pass").value==""){
        alert("请输入密码！");
        return false;
    }
    document.all.loginForm.action="<%=webapp%>/demo/loginAction.action?";
    document.all.loginForm.submit();
}

function reset(){
    document.getElementById("loginName").value="";
    document.getElementById("pass").value="";
}

</script>
</html>