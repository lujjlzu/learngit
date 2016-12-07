<%@ page language="java" contentType="text/html; charset=GBK" 	pageEncoding="GBK"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>测试界面</title>
<%@ include file="/common/include/common_head.jsp" %>
<script type="text/javascript">
//绘制主界面
$(function(){
   	$('#tt').datagrid({
   		title:'客户信息管理',
	    width:1040,
	    height:450,
	    url:'',
		frozenColumns:[[
               {field:'ck',checkbox:true}
		]],
	    columns:[[
	        {field:'custId',title:'客户编号',width:80,align:'center'},
	        {field:'custName',title:'客户名称',width:100,align:'center'},
	        {field:'custType',title:'客户类型',width:100,align:'center'},
	        {field:'linkMan',title:'联系人',width:100,align:'center'},
			{field:'linkPhone',title:'联系电话',width:100,align:'center'},
			{field:'linkEmail',title:'联系邮箱',width:150,align:'center'},
			{field:'linkAddr',title:'联系地址',width:180,align:'center'}
	    ]],
	    toolbar:[{
          	text:'新增',iconCls:'icon-add',handler:function(){  
	               onclick=$('#win').window('open');
	               $(".tab01-edit input").val("");
				   $(".tab01-edit .textarea").val("");  
               }  
              },  
              {text:'编辑',iconCls:'icon-edit',handler:function(){ 
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
					    msgShow('系统提示','请选择一行记录后再编辑!','info');
					};
                  }  
               }, 
	        {text:'删除',iconCls:'icon-remove',handler:function(){  
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
		          	    msgShow('系统提示','请选择记录后再删除!','info');
		          	};
	  	        }
	  	
            }, 
            {text:'查找',iconCls:'icon-search',handler:function(){  
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


//定义对应的后端Service名称
var key_service="customerService";

//开始定义查询条件
var custType_sel="1";
var custName_sel="";

function clearSearchParam(){
	custType_sel="1";
	custName_sel="";
}

//页面加载时，默认加载数据
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


//新增客户信息
function add(){
    actType=1;
    clearSearchParam();
	if($("#custName_add").val()=='' || $("#custName_add").val().length<2){
		msgShow('系统提示','客户名称不能为空或者客户名称填写错误!','warning');
		return false;
	}
	if($("#linkMan_add").val()=='' || $("#linkMan_add").val().length<2){
		msgShow('系统提示','联系人不能为空或者联系人填写错误!','warning');
		return false;
	}
	if($("#linkPhone_add").val()=='' || $("#linkPhone_add").val().length<2){
		msgShow('系统提示','联系电话不能为空或者联系电话填写错误!','warning');
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
//查找客户信息
function search(){
    actType=0;
    custType_sel=$("#custType_sel").val();
    custName_sel=$("#custName_sel").val();
	loadData();
    
}
//修改客户信息
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
//删除客户信息
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
		<b class="btotal">共有记录：<span id="totalRec">11</span></b>
		<div class="pagination-btn-separator"></div>
		<div class="first"><span onclick="loadDt()">首页</span></div>
		<div class="pre"><span onclick="loadDtup()">上一页</span></div>
		<div class="pagination-btn-separator"></div>
		<div class="count"><em>页次</em><input id="pageTxt" type="text" class="text" name="pageTxt"/><em>/<span id="pageCounts">11</span></em></div>
		<div class="pagination-btn-separator"></div>
		<div class="next"><span onclick="loadDtdown()">下一页</span></div>
		<div class="last"><span onclick="loadDtend()">最后一页</span></div>
	</div>

	<!--新增数据窗口-->
  <div id="win" class="easyui-window" title="新增" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-save" closed="true"  style="width:700px; height:320px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding:10px; background: #fff; border: 1px solid #ccc;">
              <table class="tab01-edit">
                   <tr>
					  <td>客户类型</td>
                      <td><select id="custType_add">
                             <option value="1">定向客户</option>
                             <option value="2">书店</option>
                             <option value="3">签单单位</option>
                             <option value="4">非定向客户</option>
                             <option value="5">院内科室</option>
                             <option value="6">网络客户</option>
                             <option value="7">入库单位</option>
                           </select></td>
					  <td>客户名称</td>
                      <td><input id="custName_add" type="text" class="txt01" /></td>
                   </tr>
                   <tr> 
					  <td>联系人</td>
                      <td><input id="linkMan_add" type="text" class="txt01" /></td>
					  <td>联系电话</td>
                      <td><input id="linkPhone_add" type="text" class="txt01" /></td>
                  </tr>
				  <tr>
					  <td>联系邮箱</td>
                      <td><input id="linkEmail_add" type="text" class="txt01" /></td>
                      <td>联系地址</td>
                     　                                 <td><input id="linkAddr_add" type="text" class="txt01" /></td>
                  </tr>
              </table>
          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
              <a id="btnEp" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(add())" >
                  确定</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                      onclick="closeWin('win')">取消</a>
          </div>
      </div>
  </div>
  <div id="win2" class="easyui-window" title="编辑" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-save" closed="true"  style="width:700px; height:320px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
              <table class="tab01-edit">
                  <tr>
					  <td>客户类型</td>
                      <td><select id="custType_edit">
                             <option value="1">定向客户</option>
                             <option value="2">书店</option>
                             <option value="3">签单单位</option>
                             <option value="4">非定向客户</option>
                             <option value="5">院内科室</option>
                             <option value="6">网络客户</option>
                             <option value="7">入库单位</option>
                           </select></td>
					  <td>客户名称</td>
                      <td><input id="custName_edit" type="text" class="txt01" /></td>
                   </tr>
                   <tr> 
					  <td>联系人</td>
                      <td><input id="linkMan_edit" type="text" class="txt01" /></td>
					  <td>联系电话</td>
                      <td><input id="linkPhone_edit" type="text" class="txt01" /></td>
                  </tr>
				  <tr>
					  <td>联系邮箱</td>
                      <td><input id="linkEmail_edit" type="text" class="txt01" /></td>
                      <td>联系地址</td>
                     　                                 <td><input id="linkAddr_edit" type="text" class="txt01" /></td>
                  </tr>
              </table>
          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
              <a id="btnEp" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(modify())" >
                  确定</a> <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                      onclick="closeWin('win2')">取消</a>
          </div>
      </div>
  </div>
  <!-- 查询界面 -->
  <div id="win3" class="easyui-window" title="查找" collapsible="false" minimizable="false"
      maximizable="false" icon="icon-search" closed="true"  style="width:500px; min-height:220px; padding: 5px;
      background: #fafafa;">
      <div class="easyui-layout" style="display:block;" fit="true">
          <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
			<table class="tab01-edit">
             <tr>
				<td>
				   <b class="bsea">客户类型：</b>
			    </td>
			    <td>
			        <select id="custType_sel">
                             <option value="1">定向客户</option>
                             <option value="2">书店</option>
                             <option value="3">签单单位</option>
                             <option value="4">非定向客户</option>
                             <option value="5">院内科室</option>
                             <option value="6">网络客户</option>
                             <option value="7">入库单位</option>
                   </select>
			    </td>
			 </tr>
			 <tr>
				<td>
				   <b class="bsea">客户名称：</b>
			    </td>
			    <td>
			        <input id="custName_sel" type="text" class="text">
			    </td>
			 </tr>
			 <tr>
				<td>
			    </td>
			    <td>
			       <a href="javascript:search()" class="seabtn" onclick="closeWin('win3')">搜索</a>
			    </td>
			 </tr>
            </table>

          </div>
          <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
               <a class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)"
                  	onclick="closeWin('win3')">取消</a>
          </div>
      </div>
  </div>

</body>
</html>
