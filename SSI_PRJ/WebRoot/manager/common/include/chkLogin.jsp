<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>
<%@ page import="com.asj.zj.bo.sys.*" %>
<%@ page import="com.asj.zj.common.*" %>
<%
    if (request.getSession()!=null){
        HttpSession sessions=request.getSession();
        OperatorBo operatorBo=(OperatorBo) session.getAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO);
        if (operatorBo==null){
%>
<script type="text/javascript">
    top.window.location.href="<%=request.getContextPath()%>/manager/index.jsp";
</script>
        	
<% }
    }else{
    %>
<script type="text/javascript">
    top.window.location.href="<%=request.getContextPath()%>/manager/index.jsp";
</script>
<%    }
 %>
