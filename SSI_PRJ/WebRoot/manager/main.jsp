<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <title>***������Ϣϵͳ</title>
    <%@ include file="./common/include/common_head_main.jsp" %>
    <%@ include file="./common/include/chkLogin.jsp" %>

    <script type="text/javascript">
            var webapp="<%=webapp%>";

var _menus = {};
$(document).ready( function() {
	 		_menus = {"menus":[
						{"menuid":"1","icon":"icon-sys","menuname":"�ͻ�����",
							"menus":[{"menuname":"�ͻ���Ϣ����","icon":"icon-nav","url":webapp+"/customer.jsp"},						
									{"menuname":"�ͻ��ɷ�ͳ��","icon":"icon-nav","url":webapp+"/balanceAcctStatic.jsp"}
								]
						},{"menuid":"41","icon":"icon-sys","menuname":"ϵͳ����",
							"menus":[{"menuname":"����Ա����","icon":"icon-nav","url":webapp+"/operator.jsp"}
								]
						}
				]};

	InitMenu();
});
	
				
//�����޸����봰��
function openChgPwd() {
    $('#winChgPwd').window({
        title: '�޸�����',
        width: 300,
        modal: true,
        shadow: true,
        closed: true,
        height: 180,
        resizable:false
    });
}
//�ر��޸����봰��
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
         $.messager.confirm('ϵͳ��ʾ', '��ȷ��Ҫ�˳����ε�¼��?', function(r) {
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
      
//�޸�����
function serverLogin() {
    var $oldpass=$('#txtOldPass');
    var $newpass = $('#txtNewPass');
    var $rePass = $('#txtRePass');
    if ($oldpass.val()==''){
        msgShow('ϵͳ��ʾ','������ԭ���룡','warning');
        return  false;
    } 

    if ($newpass.val() == '') {
        msgShow('ϵͳ��ʾ', '���������룡', 'warning');
        return false;
    }
    if ($rePass.val() == '') {
        msgShow('ϵͳ��ʾ', '����һ������ȷ�����룡', 'warning');
        return false;
    }

    if ($newpass.val() != $rePass.val()) {
        msgShow('ϵͳ��ʾ', '�������벻һ��������������', 'warning');
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
	    msgShow('ϵͳ��ʾ', '��ϲ�������޸ĳɹ���', 'info');
           //var $oldpass=$('#txtOldPass');
              //var $newpass = $('#txtNewPass');
              //var $rePass = $('#txtRePass');
           //$oldpass.val('');
           //$newpass.val('');
           //$rePass.val('');
           closeChgPwd();
	}else{
		msgShow('ϵͳ��ʾ',"�����޸�ʧ��,errorMsg= "+result.KEY_SERVICE_RES_INFO,'warning');
	} 
			
}
</script>
				
</head>
<body class="easyui-layout" style="overflow-y: hidden"  scroll="no">
<noscript>
<div style=" position:absolute; z-index:100000; height:2046px;top:0px;left:0px; width:100%; background:white; text-align:center;">
    <img src="<%=webapp%>/images/noscript.gif" alt='��Ǹ���뿪���ű�֧�֣�' />
</div>
</noscript>
    
    <div region="north" split="true" border="false" style="overflow: hidden; height: 30px;background: url(<%=webapp%>/images/layout-browser-hd-bg.gif) #7f99be repeat-x center 50%; line-height: 20px;color: #fff; font-family: Verdana, ΢���ź�,����">
        <span style="float:right; padding-right:20px;" class="head"><a href="#" id="chgPwd">�޸�����</a> <a href="#" id="loginOut">��ȫ�˳�</a></span>
        <span style="padding-left:10px; font-size: 16px; "><img src="<%=webapp%>/images/blocks.gif" width="20" height="20" align="absmiddle" />***������Ϣϵͳ</span>
        <ul id="css3menu">
			<li ><a class="active" name="menus" href="javascript:;"></a></li>	
		</ul>
    </div>
    <div region="south" split="true" style="height: 30px; background: #D2E0F2; ">
        <div class="footer">***   By JW-Office</div>
    </div>
    <div region="west" split="true" title="�����˵�" style="width:200px;" id="west">
		<div id="wnav" class="easyui-accordion" fit="true" border="false">
		<!--  �������� -->
				
		</div>

    </div>
    <div id="mainPanle" region="center" style="background: #eee; overflow-y:hidden">
        <div id="tabs" class="easyui-tabs"  fit="true" border="false" >
			<div title="�ҵĹ���̨" style="padding:20px;overflow:hidden;" id="home">
				
				<h1>��ӭʹ��****����ϵͳ!</h1>

			</div>
		</div>
    </div>
    <!--�޸����봰��-->
    <div id="winChgPwd" class="easyui-window" title="�޸�����" collapsible="false" minimizable="false"
        maximizable="false" icon="icon-save"  style="width: 300px; height: 150px; padding: 5px;
        background: #fafafa;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
                <table cellpadding=3>
                    <tr>
                        <td>ԭ���룺</td>
                        <td><input id="txtOldPass" type="password" class="txt01" /></td>
                    </tr>
                    <tr>
                        <td>�����룺</td>
                        <td><input id="txtNewPass" type="password" class="txt01" /></td>
                    </tr>
                    <tr>
                        <td>ȷ�����룺</td>
                        <td><input id="txtRePass" type="password" class="txt01" /></td>
                    </tr>
                </table>
            </div>
            <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
                <a id="btnChgPwd" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(0)" >
                    ȷ��</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                        onclick="closeChgPwd()">ȡ��</a>
            </div>
        </div>
    </div>

	<div id="mm" class="easyui-menu" style="width:150px;">
		<div id="mm-tabclose">�ر�</div>
		<div id="mm-tabcloseall">ȫ���ر�</div>
		<div id="mm-tabcloseother">����֮��ȫ���ر�</div>
		<div class="menu-sep"></div>
		<div id="mm-tabcloseright">��ǰҳ�Ҳ�ȫ���ر�</div>
		<div id="mm-tabcloseleft">��ǰҳ���ȫ���ر�</div>
		<div class="menu-sep"></div>
		<div id="mm-exit">�˳�</div>
	</div>


</body>
</html>