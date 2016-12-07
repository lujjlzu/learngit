// JavaScript Document
//绘制订单明细主界面
$(function(){
   	$('#ttDtl').datagrid({
	    width:920,
	    height:400,
	    url:'',
		frozenColumns:[[
               {field:'ck',checkbox:true}
		]],
	    columns:[orderDtlColumnField],
	    toolbar:[{
          	text:'新增',iconCls:'icon-add',handler:function(){ 
	    	       var rowOrder = $('#tt').datagrid('getSelected');
	    	       if (rowOrder){
	            		  if (rowOrder.orderSts=="完成结算" || rowOrder.orderSts=="完成财务缴费" || rowOrder.orderSts=="提交订单"){
	            			  msgShow('系统提示','订单编号['+rowOrder.orderId+']已提交，不能新增明细!','info');	
							  return;
	            		  }else{
				               onclick=$('#winDtladd').window('open');
				               $(".tab01-edit input").val("");
							   $(".tab01-edit .textarea").val(""); 
	            		  }
	    	       }		  
               }  
              },
              {
          	text:'编辑',iconCls:'icon-edit',handler:function(){ 
            	  var rowOrder = $('#tt').datagrid('getSelected');
            	  if (rowOrder){
            		  if (rowOrder.orderSts=="完成结算" || rowOrder.orderSts=="完成财务缴费" || rowOrder.orderSts=="提交订单"){
            			  msgShow('系统提示','订单编号['+rowOrder.orderId+']已提交，不能编辑明细!','info');	
						  return;
            		  }else{
            			  onclick=$('#winDtledit').window('open');
	       	               $(".tab01-edit input").val("");
	       				   $(".tab01-edit .textarea").val("");
	       	               var row = $('#ttDtl').datagrid('getSelected');
	       	               if (row){
	       	            	   //alert(row.standType);
	       	            	   if (row.standType=='国际国外标准'){
	       	            		   $("#standType_edit").val(1);
	       	            	   }else if (row.standType=='国家标准'){
	       	            		   $("#standType_edit").val(2);
	       	            	   }else if (row.standType=='行业标准'){
	       	            		   $("#standType_edit").val(3);
	       	            	   }else if (row.standType=='地方标准'){
	       	            		   $("#standType_edit").val(4);
	       	            	   }
	       	            	   
	       	            	   
	       					   $("#standCode_edit").val(row.standCode);
	       					   $("#standSeq_edit").val(row.standSeq);
	       					   $("#standPages_edit").val(row.standPages);
	       					   $("#shareNum_edit").val(row.shareNum);
	       					   $("#serviceFee_edit").val(row.serviceFee);
	       					   $("#searchFee_edit").val(row.searchFee);
	       					   $("#sumFee_edit").val(row.sumFee);
	       					   $("#dataName_edit").val(row.dataName);
	       					   $("#pages_edit").val(row.standPages/16);	
	       					   $("#price_edit").val(row.price);
	       	               }else{
	       	            	   msgShow('系统提示','请选择一行记录后再编辑!','info');
	       	               }
            		  }
            	  }
	               
               }  
              },   
	        {text:'撤销',iconCls:'icon-remove',handler:function(){  
            	  var rowOrder = $('#tt').datagrid('getSelected');
            	  if (rowOrder){
            		  if (rowOrder.orderSts=="完成结算" || rowOrder.orderSts=="完成财务缴费" || rowOrder.orderSts=="提交订单"){
            			  msgShow('系统提示','订单编号['+rowOrder.orderId+']已完成结算或财务缴费，不能删除明细!','info');	
						  return;
            		  }else{
            			  var rows = $('#ttDtl').datagrid('getSelections');
      		          	  if (rows.length>0){
      			              var orderDtlId='';
	      					   for(var i=0; i<rows.length; i++){
	      							if(i==0){
	      								orderDtlId=rows[i].orderDtlId;
	      							}else{
	      								orderDtlId=orderDtlId+","+rows[i].orderDtlId;
	      							}
	      						}
	      					 $.messager.confirm('系统提示', '订单撤销后，将不能回复，您确定要撤销吗？',function(b){
	 							if (b){
	 								delOrderDtl(orderDtlId);
	 							} 	
	 						})
	      					   
	      		          }else{
	      		          	    msgShow('系统提示','请选择记录后再删除!','info');
	      		          };
      	  	          }
            	  }
               }	  
            }
       	]
	})
	var d = { 
		  "total":0,
		  "rows": []
		};
	$('#ttDtl').datagrid('loadData',d);
});

//根据订单Id加载订单明细数据
function loadDtlData(){
	var row = $('#tt').datagrid('getSelected');
	if (row){
		var param={};
	    param.KEY_JSCALL_SERVICE=key_service;
	    param.SERVICE_METHOD="getOrderDtlInfo";
		param.orderId=row.orderId;
	    JSBaseCall.execute(param,showOrderDtlResult);
		
	}
    
}
//显示订单明细记录集
function showOrderDtlResult(data){
	var strJson=data["defaultJsonString"];
	var result=eval('(' + strJson + ')');
	
	if (result.KEY_JSCALL_RESULT ){
		if (result.KEY_SERVICE_RES){//成功
	
			totalRec=result.KEY_TOTAL_REC;
			if (result.defaultAList!=null){
			    pageShowRec=result.defaultAList.length;
			}
			var d={"total":pageShowRec,
				"rows":result.defaultAList
			};	
			 
			$('#ttDtl').datagrid('loadData',d);
		}else{
		    msgShow('系统提示','订单明细数据加载失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
		}
	}else{
	    msgShow('系统提示','订单明细数据加载失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
	}		
}


//删除订单明细
function delOrderDtl(dataIndex){
    actType=7;
    
	var row = $('#tt').datagrid('getSelected');
	if (row  ){
	    var param={};
		param.KEY_JSCALL_SERVICE=key_service;
		param.SERVICE_METHOD="delstandOrderDtlInfo"; 
		param.orderId=row.orderId;
		param.orderDtlIds=dataIndex;
		JSBaseCall.execute(param,showDoOrderDtlResult);
	}else{
		msgShow('系统提示','请您选择要删除明细的订单!','warning');
		return false;
	}
}

//订单明细操作回调函数
function showDoOrderDtlResult(data){
	 var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//成功
	    	   loadDtlData();
	    	   //loadData();
	    	   clearOrderInfo();//清空表单数据
	    	   if (actType==6){//新增
	    		   $.messager.confirm('系统提示', '您需要继续添加订单明细吗?', function(r) {
	                   if (!r) {
	                	   closeWin('winDtladd');   
	                   }else{
	                	   changeStandType_add(document.getElementById("standType_add"));
	                   }
	               });
	    	   }else if (actType==7){//编辑	    		  
            	   closeWin('winDtledit');  	                   
	    	   }
	    	   
	       }else{
	    	   msgShow('系统提示','操作失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('系统提示','操作失败，调用JSCall失败信息:'+obj.KEY_JSCALL_MSG,'error');
	   } 
}

//清空订单明细表单数据
function clearOrderInfo(){
	$("#standCode_add").val('');
	$("#standSeq_add").val('');
	$("#standPages_add").val('');
	$("#shareNum_add").val('');
	$("#serviceFee_add").val('');
	$("#searchFee_add").val('');
	$("#sumFee_add").val('');
	$("#dataName_add").val('');	
	$("#pages_add").val('');	
	$("#price_add").val('');	
	
	$("#standCode_edit").val('');
	$("#standSeq_edit").val('');
	$("#standPages_edit").val('');
	$("#shareNum_edit").val('');
	$("#serviceFee_edit").val('');
	$("#searchFee_edit").val('');
	$("#sumFee_edit").val('');
	$("#dataName_edit").val('');
	$("#pages_edit").val('');	
	$("#price_edit").val('');
}
//关闭订单明细维护窗口
function closeOrderDtl(){
	loadData();
	closeWin('win5');
}