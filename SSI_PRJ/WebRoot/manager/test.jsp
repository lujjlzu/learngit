<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>���Խ���</title>
<%@ include file="/common/include/common_head.jsp" %>
<script type="text/javascript">
//����������
$(function(){
   	$('#tt').datagrid({
   		title:'�ͻ���Ϣ����',
	    width:1040,
	    height:450,
	    url:'',
		frozenColumns:[[
               {field:'ck',checkbox:true}
		]],
	    columns:[[
	        {field:'custId',title:'�ͻ����',width:80,align:'center'},
	        {field:'custName',title:'�ͻ�����',width:100,align:'center'},
	        {field:'custType',title:'�ͻ�����',width:100,align:'center'},
	        {field:'linkMan',title:'��ϵ��',width:100,align:'center'},
			{field:'linkPhone',title:'��ϵ�绰',width:100,align:'center'},
			{field:'linkEmail',title:'��ϵ����',width:150,align:'center'},
			{field:'linkAddr',title:'��ϵ��ַ',width:180,align:'center'}
	    ]],
	    toolbar:[{
          	text:'����',iconCls:'icon-add',handler:function(){  
	               onclick=$('#win').window('open');
	               $(".tab01-edit input").val("");
				   $(".tab01-edit .textarea").val("");  
               }  
              },  
              {text:'�༭',iconCls:'icon-edit',handler:function(){ 
                    $(".tab01-edit input").val("");
					$(".tab01-edit .textarea").val(""); 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						$("#custType_edit").val(row.custType);
						$("#custName_edit").val(row.custName);
						$("#linkMan_edit").val(row.linkMan);
						$("#linkPhone_edit").val(row.linkPhone);
						$("#linkEmail_edit").val(row.linkEmail);
						$("#linkAddr_edit").val(row.linkAddr);
						
						onclick=$('#win2').window('open');
						
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼���ٱ༭!','info');
					};
                  }  
               }, 
	        {text:'ɾ��',iconCls:'icon-remove',handler:function(){  
		          	var rows = $('#tt').datagrid('getSelections');
		          	if (rows.length>0){
			          	var custId='';
						for(var i=0; i<rows.length; i++){
							if(i==0){
								custId=rows[i].custId;
							}else{
								custId=custId+","+rows[i].custId;
							}
						}
						del(custId);
		          	}else{
		          	    msgShow('ϵͳ��ʾ','��ѡ���¼����ɾ��!','info');
		          	};
	  	        }
	  	
            }, 
            {text:'����',iconCls:'icon-search',handler:function(){  
               		$("#custType_sel").val("");
                    $("#custName_sel").val("");
               		onclick=$('#win3').window('open');
               	}  
            }  
       	]
	})
	var d = { 
		  "total":0,
		  "rows": []
		};
	$('#tt').datagrid('loadData',d);
});


//�����Ӧ�ĺ��Service����
var key_service="customerService";

//��ʼ�����ѯ����
var custType_sel="1";
var custName_sel="";

function clearSearchParam(){
	custType_sel="1";
	custName_sel="";
}

//ҳ�����ʱ��Ĭ�ϼ�������
loadData();
function loadData(){
    var param={};
    param.KEY_JSCALL_SERVICE=key_service;
    param.SERVICE_METHOD="getCustomer";
	param.start=startRec;
	param.end=pageNum;
	if (custType_sel!="" && custType_sel!=null){
	    param.cust_type=custType_sel;
	}
	if (custName_sel!="" && custName_sel!=null){
	    param.cust_name=custName_sel;
	}
    JSBaseCall.execute(param,showResult);
}


//�����ͻ���Ϣ
function add(){
    actType=1;
    clearSearchParam();
	if($("#custName_add").val()=='' || $("#custName_add").val().length<2){
		msgShow('ϵͳ��ʾ','�ͻ����Ʋ���Ϊ�ջ��߿ͻ�������д����!','warning');
		return false;
	}
	if($("#linkMan_add").val()=='' || $("#linkMan_add").val().length<2){
		msgShow('ϵͳ��ʾ','��ϵ�˲���Ϊ�ջ�����ϵ����д����!','warning');
		return false;
	}
	if($("#linkPhone_add").val()=='' || $("#linkPhone_add").val().length<2){
		msgShow('ϵͳ��ʾ','��ϵ�绰����Ϊ�ջ�����ϵ�绰��д����!','warning');
		return false;
	}
    var param={};
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="addCustomer"; 
	param.custType=$("#custType_add").val();
	param.custName=$("#custName_add").val();
	param.linkMan=$("#linkMan_add").val();
	param.linkPhone=$("#linkPhone_add").val();
	param.linkEmail=$("#linkEmail_add").val();
	param.linkAddr=$("#linkAddr_add").val();
	JSBaseCall.execute(param,showDoResult);
	
}
//���ҿͻ���Ϣ
function search(){
    actType=0;
    custType_sel=$("#custType_sel").val();
    custName_sel=$("#custName_sel").val();
	loadData();
    
}
//�޸Ŀͻ���Ϣ
function modify(){
    actType=2;
    //clearSearchParam();
	var row = $('#tt').datagrid('getSelected');
	
	var param={};
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="updateCustomer";
	param.custType=$("#custType_edit").val();
	param.custName=$("#custName_edit").val();
	param.linkMan=$("#linkMan_edit").val();
	param.linkPhone=$("#linkPhone_edit").val();
	param.linkEmail=$("#linkEmail_edit").val();
	param.linkAddr=$("#linkAddr_edit").val();
	param.custId=row.custId;
	JSBaseCall.execute(param,showDoResult);
	
}
//ɾ���ͻ���Ϣ
function del(dataIndex){
    actType=3;
    var param={};
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="delCustomer"; 
	param.custIds=dataIndex;	
	JSBaseCall.execute(param,showDoResult);
}


    	
		
</script>
</head>
<body>
	<table id="tt"></table>
	<div class="page">
		<b class="btotal">���м�¼��<span id="totalRec">11</span></b>
		<div class="pagination-btn-separator"></div>
		<div class="first"><span onclick="loadDt()">��ҳ</span></div>
		<div class="pre"><span onclick="loadDtup()">��һҳ</span></div>
		<div class="pagination-btn-separator"></div>
		<div class="count"><em>ҳ��</em><input id="pageTxt" type="text" class="text" name="pageTxt"/><em>/<span id="pageCounts">11</span></em></div>
		<div class="pagination-btn-separator"></div>
		<div class="next"><span onclick="loadDtdown()">��һҳ</span></div>
		<div class="last"><span onclick="loadDtend()">���һҳ</span></div>
	</div>

	<!--�������ݴ���-->
  <div id="win" class="easyui-window" title="����" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-save" closed="true"  style="width:700px; height:320px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding:10px; background: #fff; border: 1px solid #ccc;">
              <table class="tab01-edit">
                   <tr>
					  <td>�ͻ�����</td>
                      <td><select id="custType_add">
                             <option value="1">����ͻ�</option>
                             <option value="2">���</option>
                             <option value="3">ǩ����λ</option>
                             <option value="4">�Ƕ���ͻ�</option>
                             <option value="5">Ժ�ڿ���</option>
                             <option value="6">����ͻ�</option>
                             <option value="7">��ⵥλ</option>
                           </select></td>
					  <td>�ͻ�����</td>
                      <td><input id="custName_add" type="text" class="txt01" /></td>
                   </tr>
                   <tr> 
					  <td>��ϵ��</td>
                      <td><input id="linkMan_add" type="text" class="txt01" /></td>
					  <td>��ϵ�绰</td>
                      <td><input id="linkPhone_add" type="text" class="txt01" /></td>
                  </tr>
				  <tr>
					  <td>��ϵ����</td>
                      <td><input id="linkEmail_add" type="text" class="txt01" /></td>
                      <td>��ϵ��ַ</td>
                     ��                                 <td><input id="linkAddr_add" type="text" class="txt01" /></td>
                  </tr>
              </table>
          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
              <a id="btnEp" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(add())" >
                  ȷ��</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                      onclick="closeWin('win')">ȡ��</a>
          </div>
      </div>
  </div>
  <div id="win2" class="easyui-window" title="�༭" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-save" closed="true"  style="width:700px; height:320px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
              <table class="tab01-edit">
                  <tr>
					  <td>�ͻ�����</td>
                      <td><select id="custType_edit">
                             <option value="1">����ͻ�</option>
                             <option value="2">���</option>
                             <option value="3">ǩ����λ</option>
                             <option value="4">�Ƕ���ͻ�</option>
                             <option value="5">Ժ�ڿ���</option>
                             <option value="6">����ͻ�</option>
                             <option value="7">��ⵥλ</option>
                           </select></td>
					  <td>�ͻ�����</td>
                      <td><input id="custName_edit" type="text" class="txt01" /></td>
                   </tr>
                   <tr> 
					  <td>��ϵ��</td>
                      <td><input id="linkMan_edit" type="text" class="txt01" /></td>
					  <td>��ϵ�绰</td>
                      <td><input id="linkPhone_edit" type="text" class="txt01" /></td>
                  </tr>
				  <tr>
					  <td>��ϵ����</td>
                      <td><input id="linkEmail_edit" type="text" class="txt01" /></td>
                      <td>��ϵ��ַ</td>
                     ��                                 <td><input id="linkAddr_edit" type="text" class="txt01" /></td>
                  </tr>
              </table>
          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
              <a id="btnEp" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(modify())" >
                  ȷ��</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                      onclick="closeWin('win2')">ȡ��</a>
          </div>
      </div>
  </div>
  <!-- ��ѯ���� -->
  <div id="win3" class="easyui-window" title="����" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-search" closed="true"  style="width:500px; min-height:220px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
			<table class="tab01-edit">
             <tr>
				<td>
				   <b class="bsea">�ͻ����ͣ�</b>
			    </td>
			    <td>
			        <select id="custType_sel">
                             <option value="1">����ͻ�</option>
                             <option value="2">���</option>
                             <option value="3">ǩ����λ</option>
                             <option value="4">�Ƕ���ͻ�</option>
                             <option value="5">Ժ�ڿ���</option>
                             <option value="6">����ͻ�</option>
                             <option value="7">��ⵥλ</option>
                   </select>
			    </td>
			 </tr>
			 <tr>
				<td>
				   <b class="bsea">�ͻ����ƣ�</b>
			    </td>
			    <td>
			        <input id="custName_sel" type="text" class="text">
			    </td>
			 </tr>
			 <tr>
				<td>
			    </td>
			    <td>
			       <a href="javascript:search()" class="seabtn" onclick="closeWin('win3')">����</a>
			    </td>
			 </tr>
            </table>

          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
               <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                  	onclick="closeWin('win3')">ȡ��</a>
          </div>
      </div>
  </div>

</body>
</html>
