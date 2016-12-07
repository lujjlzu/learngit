<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <title>***管理信息系统</title>
    <%@ include file="./common/include/common_head_main.jsp" %>
    <%@ include file="./common/include/chkLogin.jsp" %>

    <script type="text/javascript">
            var webapp="<%=webapp%>";

var _menus = {};
$(document).ready( function() {
	 		_menus = {"menus":[
						{"menuid":"1","icon":"icon-sys","menuname":"客户管理",
							"menus":[{"menuname":"客户信息管理","icon":"icon-nav","url":webapp+"/customer.jsp"},						
									{"menuname":"客户缴费统计","icon":"icon-nav","url":webapp+"/balanceAcctStatic.jsp"}
								]
						},{"menuid":"41","icon":"icon-sys","menuname":"系统管理",
							"menus":[{"menuname":"操作员管理","icon":"icon-nav","url":webapp+"/operator.jsp"}
								]
						}
				]};

	InitMenu();
});
	
				
//设置修改密码窗口
function openChgPwd() {
    $('#winChgPwd').window({
        title: '修改密码',
        width: 300,
        modal: true,
        shadow: true,
        closed: true,
        height: 180,
        resizable:false
    });
}
//关闭修改密码窗口
function closeChgPwd() {
    $('#winChgPwd').window('close');
}
      

$(function() {
     openChgPwd();
     $('#chgPwd').click(function() {
         $('#winChgPwd').window('open');
     });

     $('#btnChgPwd').click(function() {
         serverLogin();
     })
     $('#loginOut').click(function() {
         $.messager.confirm('系统提示', '您确定要退出本次登录吗?', function(r) {
             if (r) {
                 var param={};
			    param.KEY_JSCALL_SERVICE="operatorService";
			    param.SERVICE_METHOD="loginout"; 
			
			    JSBaseCall.execute(param,function(data){
			    location.href = webapp+'/manager/index.jsp';
			  }); 
             }
         });
     })
});
      
//修改密码
function serverLogin() {
    var $oldpass=$('#txtOldPass');
    var $newpass = $('#txtNewPass');
    var $rePass = $('#txtRePass');
    if ($oldpass.val()==''){
        msgShow('系统提示','请输入原密码！','warning');
        return  false;
    } 

    if ($newpass.val() == '') {
        msgShow('系统提示', '请输入密码！', 'warning');
        return false;
    }
    if ($rePass.val() == '') {
        msgShow('系统提示', '请在一次输入确认密码！', 'warning');
        return false;
    }

    if ($newpass.val() != $rePass.val()) {
        msgShow('系统提示', '两次密码不一至！请重新输入', 'warning');
        return false;
    }
    
    //
    var param={};
	param.KEY_JSCALL_SERVICE="operatorService";
	param.SERVICE_METHOD="chgPass"; 
	param.newpass=$newpass.val();
	param.oldpass=$oldpass.val();
	JSBaseCall.execute(param,showChgPwdResult);

}
function showChgPwdResult(data){
	var strJson=data["defaultJsonString"];
	var result=eval('(' + strJson + ')');
	if(result.KEY_SERVICE_RES  && result.KEY_JSCALL_RESULT  ){
	    msgShow('系统提示', '恭喜，密码修改成功！', 'info');
           //var $oldpass=$('#txtOldPass');
              //var $newpass = $('#txtNewPass');
              //var $rePass = $('#txtRePass');
           //$oldpass.val('');
           //$newpass.val('');
           //$rePass.val('');
           closeChgPwd();
	}else{
		msgShow('系统提示',"密码修改失败,errorMsg= "+result.KEY_SERVICE_RES_INFO,'warning');
	} 
			
}
</script>
				
</head>
<body class="easyui-layout" style="overflow-y: hidden"  scroll="no">
<noscript>
<div style=" position:absolute; z-index:100000; height:2046px;top:0px;left:0px; width:100%; background:white; text-align:center;">
    <img src="<%=webapp%>/images/noscript.gif" alt='抱歉，请开启脚本支持！' />
</div>
</noscript>
    
    <div region="north" split="true" border="false" style="overflow: hidden; height: 30px;background: url(<%=webapp%>/images/layout-browser-hd-bg.gif) #7f99be repeat-x center 50%; line-height: 20px;color: #fff; font-family: Verdana, 微软雅黑,黑体">
        <span style="float:right; padding-right:20px;" class="head"><a href="#" id="chgPwd">修改密码</a> <a href="#" id="loginOut">安全退出</a></span>
        <span style="padding-left:10px; font-size: 16px; "><img src="<%=webapp%>/images/blocks.gif" width="20" height="20" align="absmiddle" />***管理信息系统</span>
        <ul id="css3menu">
			<li ><a class="active" name="menus" href="javascript:;"></a></li>	
		</ul>
    </div>
    <div region="south" split="true" style="height: 30px; background: #D2E0F2; ">
        <div class="footer">***   By JW-Office</div>
    </div>
    <div region="west" split="true" title="导航菜单" style="width:200px;" id="west">
		<div id="wnav" class="easyui-accordion" fit="true" border="false">
		<!--  导航内容 -->
				
		</div>

    </div>
    <div id="mainPanle" region="center" style="background: #eee; overflow-y:hidden">
        <div id="tabs" class="easyui-tabs"  fit="true" border="false" >
			<div title="我的工作台" style="padding:20px;overflow:hidden;" id="home">
				
				<h1>欢迎使用****管理系统!</h1>

			</div>
		</div>
    </div>
    <!--修改密码窗口-->
    <div id="winChgPwd" class="easyui-window" title="修改密码" collapsible="false" minimizable="false"
        maximizable="false" icon="icon-save"  style="width: 300px; height: 150px; padding: 5px;
        background: #fafafa;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
                <table cellpadding=3>
                    <tr>
                        <td>原密码：</td>
                        <td><input id="txtOldPass" type="password" class="txt01" /></td>
                    </tr>
                    <tr>
                        <td>新密码：</td>
                        <td><input id="txtNewPass" type="password" class="txt01" /></td>
                    </tr>
                    <tr>
                        <td>确认密码：</td>
                        <td><input id="txtRePass" type="password" class="txt01" /></td>
                    </tr>
                </table>
            </div>
            <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
                <a id="btnChgPwd" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(0)" >
                    确定</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                        onclick="closeChgPwd()">取消</a>
            </div>
        </div>
    </div>

	<div id="mm" class="easyui-menu" style="width:150px;">
		<div id="mm-tabclose">关闭</div>
		<div id="mm-tabcloseall">全部关闭</div>
		<div id="mm-tabcloseother">除此之外全部关闭</div>
		<div class="menu-sep"></div>
		<div id="mm-tabcloseright">当前页右侧全部关闭</div>
		<div id="mm-tabcloseleft">当前页左侧全部关闭</div>
		<div class="menu-sep"></div>
		<div id="mm-exit">退出</div>
	</div>


</body>
</html>