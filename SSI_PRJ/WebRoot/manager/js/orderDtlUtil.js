// JavaScript Document
//���ƶ�����ϸ������
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
          	text:'����',iconCls:'icon-add',handler:function(){ 
	    	       var rowOrder = $('#tt').datagrid('getSelected');
	    	       if (rowOrder){
	            		  if (rowOrder.orderSts=="��ɽ���" || rowOrder.orderSts=="��ɲ���ɷ�" || rowOrder.orderSts=="�ύ����"){
	            			  msgShow('ϵͳ��ʾ','�������['+rowOrder.orderId+']���ύ������������ϸ!','info');	
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
          	text:'�༭',iconCls:'icon-edit',handler:function(){ 
            	  var rowOrder = $('#tt').datagrid('getSelected');
            	  if (rowOrder){
            		  if (rowOrder.orderSts=="��ɽ���" || rowOrder.orderSts=="��ɲ���ɷ�" || rowOrder.orderSts=="�ύ����"){
            			  msgShow('ϵͳ��ʾ','�������['+rowOrder.orderId+']���ύ�����ܱ༭��ϸ!','info');	
						  return;
            		  }else{
            			  onclick=$('#winDtledit').window('open');
	       	               $(".tab01-edit input").val("");
	       				   $(".tab01-edit .textarea").val("");
	       	               var row = $('#ttDtl').datagrid('getSelected');
	       	               if (row){
	       	            	   //alert(row.standType);
	       	            	   if (row.standType=='���ʹ����׼'){
	       	            		   $("#standType_edit").val(1);
	       	            	   }else if (row.standType=='���ұ�׼'){
	       	            		   $("#standType_edit").val(2);
	       	            	   }else if (row.standType=='��ҵ��׼'){
	       	            		   $("#standType_edit").val(3);
	       	            	   }else if (row.standType=='�ط���׼'){
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
	       	            	   msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼���ٱ༭!','info');
	       	               }
            		  }
            	  }
	               
               }  
              },   
	        {text:'����',iconCls:'icon-remove',handler:function(){  
            	  var rowOrder = $('#tt').datagrid('getSelected');
            	  if (rowOrder){
            		  if (rowOrder.orderSts=="��ɽ���" || rowOrder.orderSts=="��ɲ���ɷ�" || rowOrder.orderSts=="�ύ����"){
            			  msgShow('ϵͳ��ʾ','�������['+rowOrder.orderId+']����ɽ�������ɷѣ�����ɾ����ϸ!','info');	
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
	      					 $.messager.confirm('ϵͳ��ʾ', '���������󣬽����ܻظ�����ȷ��Ҫ������',function(b){
	 							if (b){
	 								delOrderDtl(orderDtlId);
	 							} 	
	 						})
	      					   
	      		          }else{
	      		          	    msgShow('ϵͳ��ʾ','��ѡ���¼����ɾ��!','info');
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

//���ݶ���Id���ض�����ϸ����
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
//��ʾ������ϸ��¼��
function showOrderDtlResult(data){
	var strJson=data["defaultJsonString"];
	var result=eval('(' + strJson + ')');
	
	if (result.KEY_JSCALL_RESULT ){
		if (result.KEY_SERVICE_RES){//�ɹ�
	
			totalRec=result.KEY_TOTAL_REC;
			if (result.defaultAList!=null){
			    pageShowRec=result.defaultAList.length;
			}
			var d={"total":pageShowRec,
				"rows":result.defaultAList
			};	
			 
			$('#ttDtl').datagrid('loadData',d);
		}else{
		    msgShow('ϵͳ��ʾ','������ϸ���ݼ���ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
		}
	}else{
	    msgShow('ϵͳ��ʾ','������ϸ���ݼ���ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
	}		
}


//ɾ��������ϸ
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
		msgShow('ϵͳ��ʾ','����ѡ��Ҫɾ����ϸ�Ķ���!','warning');
		return false;
	}
}

//������ϸ�����ص�����
function showDoOrderDtlResult(data){
	 var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//�ɹ�
	    	   loadDtlData();
	    	   //loadData();
	    	   clearOrderInfo();//��ձ�����
	    	   if (actType==6){//����
	    		   $.messager.confirm('ϵͳ��ʾ', '����Ҫ������Ӷ�����ϸ��?', function(r) {
	                   if (!r) {
	                	   closeWin('winDtladd');   
	                   }else{
	                	   changeStandType_add(document.getElementById("standType_add"));
	                   }
	               });
	    	   }else if (actType==7){//�༭	    		  
            	   closeWin('winDtledit');  	                   
	    	   }
	    	   
	       }else{
	    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
	   } 
}

//��ն�����ϸ������
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
//�رն�����ϸά������
function closeOrderDtl(){
	loadData();
	closeWin('win5');
}