// JavaScript Document
//���峣��
//���ƶ���������
$(function(){
   	$('#tt').datagrid({
   		title:'������Ϣ',
	    width:1040,
	    height:450,
	    url:'',
		frozenColumns:[[
               {field:'ck',checkbox:true}
		]],
	    columns:[orderColumnField],
	    toolbar:[{
          	text:'��������',iconCls:'icon-add',handler:function(){  
	               onclick=$('#win').window('open');
	               $(".tab01-edit input").val("");
				   $(".tab01-edit .textarea").val("");
				   $('#orderDate_add').datebox('setValue',getDate());
				   $('#postFee_add').val("0");
				   $('#otherSearchFee_add').val("0");
				   $('#otherFee_add').val("0");
				   $('#discount_add').val("1");
               }  
              },
          	{text:'�༭������Ϣ',iconCls:'icon-edit',handler:function(){ 
                    $(".tab01-edit input").val("");
					$(".tab01-edit .textarea").val(""); 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						if (row.orderSts=="��ɽ���" || row.orderSts=="��ɲ���ɷ�" || row.orderSts=="�ύ����" ){
							msgShow('ϵͳ��ʾ','�������['+row.orderId+']���ύ�����ܱ༭!','info');	
							return;
						}else{
							var selCustType=row.custType;
							if (row.custType=="����ͻ�"){
							    selCustType=1;
							}else if (row.custType=="���"){
							    selCustType=2;
							}if (row.custType=="ǩ����λ"){
							    selCustType=3;
							}if (row.custType=="�Ƕ���ͻ�"){
							    selCustType=4;
							}if (row.custType=="Ժ�ڿ���"){
							    selCustType=5;
							}if (row.custType=="����ͻ�"){
							    selCustType=6;
							}if (row.custType=="��ⵥλ"){
							    selCustType=7;
							}
							$("#custType_edit").val(selCustType);
							if (selCustType==1){//����
							    $("#fdxTd_edit").css("display","none");
		                        $("#dxTd_edit").css("display","block");						
							}else if (selCustType==4){//�Ƕ���
							    $("#dxTd_edit").css("display","none");
		                        $("#fdxTd_edit").css("display","block");
							}
							changeCustType_edit();
							
							$("#custName_edit_sel").val(row.custId);
							$("#custName_edit_txt").val(row.custName);
							
							$("#postFee_edit").val(row.postFee);
							$("#otherSearchFee_edit").val(row.otherSearchFee);
							$("#otherFee_edit").val(row.otherFee);
							$("#otherFeeRemark_edit").val(row.otherFeeRemark);
							$("#discount_edit").val(row.discount);
							$("#payMode_edit").val(row.payModeInt);
							$('#orderDate_edit').datebox('setValue',row.orderDate);
							
							onclick=$('#win2').window('open');
						}
						
						
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼���ٱ༭!','info');
					};
                  }  
               },
               {text:'������ϸ��Ϣά��',iconCls:'icon-edit',handler:function(){ 
                    $(".tab01-edit input").val("");
					$(".tab01-edit .textarea").val(""); 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						onclick=$('#win5').window('open');
						loadDtlData();
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼���ٱ༭!','info');
					};
                  }  
               }, 
               {text:'��������ȡ��',iconCls:'icon-save',handler:function(){ 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						
							var orderId=row.orderId;
							mathRoundOrderInfo(orderId);
											    
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼�����ύ!','info');
					};
                 }  
              },
              {text:'��������ȥ��',iconCls:'icon-save',handler:function(){ 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						
							var orderId=row.orderId;
							mathFloorOrderInfo(orderId);
											    
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼�����ύ!','info');
					};
               }  
            },
               {text:'�����ύ',iconCls:'icon-save',handler:function(){ 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
						if (row.orderSts!='����Ԥ����'){
							msgShow('ϵͳ��ʾ','�ö����Ѿ��ύ�������ٴ��ύ!','info');
						}else{
							var orderId=row.orderId;
						    var orderType=row.orderTypeInt;
						    var sumFee=row.sumFee;
						    var payMode=row.payModeInt;
						    var custId=row.custId;
						    //alert('orderType='+orderType);
						    //alert('payMode='+payMode);
							commitOrderInfo(orderId,custId,orderType,sumFee,payMode);
						}					    
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼�����ύ!','info');
					};
                  }  
               },
               {text:'������ӡ',iconCls:'icon-print',handler:function(){ 
			        var row = $('#tt').datagrid('getSelected');
					if (row){
					    var orderId=row.orderId;
					    loadPrintData(orderId);
					    onclick=$('#win4').window('open');
					}else{
					    msgShow('ϵͳ��ʾ','��ѡ��һ�м�¼���ٴ�ӡ!','info');
					};
                  }  
               },  
	        {text:'����',iconCls:'icon-remove',handler:function(){  
		          	var rows = $('#tt').datagrid('getSelections');
		          	if (rows.length>0){
			          	var orderId='';
						for(var i=0; i<rows.length; i++){
							if (rows[i].orderSts=="��ɽ���" || rows[i].orderSts=="��ɲ���ɷ�" ){
								msgShow('ϵͳ��ʾ','�������['+rows[i].orderId+']����ɽ�������ɷѣ����ܳ���!','info');	
								return;
							}else{
								if(i==0){
									orderId=rows[i].orderId;
								}else{
									orderId=orderId+","+rows[i].orderId;
								}
							}
							
						}
						$.messager.confirm('ϵͳ��ʾ', '���������󣬽����ܻظ�����ȷ��Ҫ������',function(b){
							if (b){
								del(orderId);
							} 	
						})
		          	}else{
		          	    msgShow('ϵͳ��ʾ','��ѡ���¼����ɾ��111!','info');
		          	};
	  	        }
	  	
            }, 
            {text:'����',iconCls:'icon-search',handler:function(){
                    $("#custType_sel").val("");
                    $("#custName_sel").val("");
                    $("#standType_sel").val("");
					$("#standCode_sel").val("");
					$("#standSeq_sel").val("");
                    $("#payMode_sel").val("");
					$("#orderSts_sel").val("");
                    $("#orderDate_start").val("");
                    $("#orderDate_end").val("");
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




//����������Ϣ
function addOrder(chgType,orderType){
	actType=1;
	clearSearchParam();
    var param={};
	if($("#custType_add").val()=='' || $("#custType_add").val()==null ){
		msgShow('ϵͳ��ʾ','�ͻ����Ͳ���Ϊ��!','warning');
		return false;
	}
	if  ($("#custType_add").val()==1 || 
			$("#custType_add").val()==2 ||
			$("#custType_add").val()==3 ||
			$("#custType_add").val()==5){ //����
		if($("#custName_add_sel").val()==null || $("#custName_add_sel").val()==''){
			msgShow('ϵͳ��ʾ','�����ȵ��ͻ������У������ͻ��������ٸ�ӡ!','warning');
			return false;
		}else{
		    var strCust=$("#custName_add_sel").val().split(",");
			if (strCust.length<2){
			    msgShow('ϵͳ��ʾ','�ͻ�����Ϊ��!','warning');
				return false;
			}
			param.custName=strCust[1];
			param.custId=strCust[0];
		}
	}else{
	    if($("#custName_add_txt").val()==null || $("#custName_add_txt").val()==''){
			msgShow('ϵͳ��ʾ','������ͻ���!','warning');
			return false;
		}else{
		    param.custName=$("#custName_add_txt").val();
			param.custId=0;
		}
	}
	
	if($('#orderDate_add').datebox('getValue')==''){
		msgShow('ϵͳ��ʾ','����ʱ�䲻��Ϊ��!','warning');
		return false;
	}
    
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="addstandOrderInfo"; 
	
	param.orderNo="";
	param.custType=$("#custType_add").val();
   
	param.serviceFee=0;
	if ($("#OrderSearchFee_add").val()!=null && $("#OrderSearchFee_add").val()!=""){
		param.searchFee=$("#OrderSearchFee_add").val();
	}else{
		param.searchFee=0;
	}
	
	if ($("#postFee_add").val()=='' ){		
	    param.postFee=0;
	}else{
	    param.postFee=$("#postFee_add").val();	    
	}
	//add by feihu 20121029
	if ($("#otherSearchFee_add").val()=='' || $("#otherSearchFee_add").val()==null){		
	    param.otherSearchFee=0;
	}else{
	    param.otherSearchFee=$("#otherSearchFee_add").val();	    
	}
	if ($("#otherFee_add").val()=='' || $("#otherFee_add").val()==null){		
	    param.otherFee=0;
	}else{
	    param.otherFee=$("#otherFee_add").val();	    
	}
	if ($("#discount_add").val()=='' || $("#discount_add").val()==null){		
	    param.discount=1;
	}else{
	    param.discount=$("#discount_add").val();	    
	}
	//param.sumFee=Number(param.searchFee)+Number(param.postFee);
	param.sumFee=(Number(param.searchFee)+Number(param.postFee)+Number(param.otherSearchFee)+Number(param.otherFee))*Number(param.discount);
	//end 
	//add by feihu 20131206	
	if ($("#otherFeeRemark_add").val()=='' || $("#otherFeeRemark_add").val()==null){
		param.otherFeeRemark="";
	}else{
		param.otherFeeRemark=$("#otherFeeRemark_add").val();
	}
	//end 

	
	param.payMode=$("#payMode_add").val();
	param.chgType=chgType;//1����׼��ӡ
	//param.orderDate=$("#orderDate_add").val();
	param.orderDate=$('#orderDate_add').datebox('getValue');

	param.orderSts=0;	
	param.orderType=orderType;
	
	JSBaseCall.execute(param,showDoResult);
	
}

//�޸Ķ�����Ϣ
function editOrder(){
	actType=2;
	clearSearchParam();
    var param={};
	if($("#custType_edit").val()=='' || $("#custType_edit").val()==null ){
		msgShow('ϵͳ��ʾ','�ͻ����Ͳ���Ϊ��!','warning');
		return false;
	}
	if  ($("#custType_edit").val()==1 || 
			$("#custType_edit").val()==2 ||
			$("#custType_edit").val()==3 ||
			$("#custType_edit").val()==5){ //����
		if($("#custName_edit_sel").val()==null || $("#custName_edit_sel").val()==''){
			msgShow('ϵͳ��ʾ','�����ȵ��ͻ������У������ͻ��������ٸ�ӡ!','warning');
			return false;
		}else{
		    var strCust=$("#custName_edit_sel").val().split(",");
			if (strCust.length<2){
			    msgShow('ϵͳ��ʾ','�ͻ�����Ϊ��!','warning');
				return false;
			}
			param.custName=strCust[1];
			param.custId=strCust[0];
		}
	}else{
	    if($("#custName_edit_txt").val()==null || $("#custName_edit_txt").val()==''){
			msgShow('ϵͳ��ʾ','������ͻ���!','warning');
			return false;
		}else{
		    param.custName=$("#custName_edit_txt").val();
			param.custId=0;
		}
	}
	
	if($('#orderDate_edit').datebox('getValue')==''){
		msgShow('ϵͳ��ʾ','����ʱ�䲻��Ϊ��!','warning');
		return false;
	}
    
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="updateStandOrderInfo"; 
	

	param.custType=$("#custType_edit").val();

	if ($("#OrderSearchFee_edit").val()!=null && $("#OrderSearchFee_edit").val()!=""){
		param.searchFee=$("#OrderSearchFee_edit").val();
	}else{
		param.searchFee=0;
	}
	
	
	if ($("#postFee_edit").val()==''){		
	    param.postFee=0;
	}else{
	    param.postFee=$("#postFee_edit").val();

	}
	//add by feihu 20121029
	if ($("#otherSearchFee_edit").val()=='' || $("#otherSearchFee_edit").val()==null){		
	    param.otherSearchFee=0;
	}else{
	    param.otherSearchFee=$("#otherSearchFee_edit").val();	    
	}
	if ($("#otherFee_edit").val()=='' || $("#otherFee_edit").val()==null){		
	    param.otherFee=0;
	}else{
	    param.otherFee=$("#otherFee_edit").val();	    
	}
	if ($("#discount_edit").val()=='' || $("#discount_edit").val()==null){		
	    param.discount=1;
	}else{
	    param.discount=$("#discount_edit").val();	    
	}
//end 
	//add by feihu 20131206		
	if ($("#otherFeeRemark_edit").val()=='' || $("#otherFeeRemark_edit").val()==null){
		param.otherFeeRemark="";
	}else{
		param.otherFeeRemark=$("#otherFeeRemark_edit").val();
	}
	//end 
	

	param.payMode=$("#payMode_edit").val();
	
	//param.orderDate=$("#orderDate_add").val();
	param.orderDate=$('#orderDate_edit').datebox('getValue');
	param.orderSts=0;	
	var row = $('#tt').datagrid('getSelected');
	
	param.orderId=row.orderId;
	
	JSBaseCall.execute(param,showDoResult);
	
}
//��������ȡ��
function mathRoundOrderInfo(orderId){
   var param={};
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="mathRoundOrderByOrderId"; 
	param.orderId=orderId;	
	JSBaseCall.execute(param,showDoResult);
}

//��������ȥ��
function mathFloorOrderInfo(orderId){
   var param={};
	param.KEY_JSCALL_SERVICE=key_service;
	param.SERVICE_METHOD="mathFloorOrderByOrderId"; 
	param.orderId=orderId;	
	JSBaseCall.execute(param,showDoResult);
}

//���� ����
function searchOrder(){
    actType=0;
    orderType_sel=$("#orderType_sel").val();
    custType_sel=$("#custType_sel").val();
    custName_sel=$("#custName_sel").val();
	payMode_sel=$("#payMode_sel").val();
	orderSts_sel=$("#orderSts_sel").val();
    
    orderDate_start=$('#orderDate_start').datebox('getValue');//$("#orderDate_start").val();
    orderDate_end=$('#orderDate_end').datebox('getValue');//$("#orderDate_end").val();
	loadData();
    
}

//�ı�ͻ�����
function changeCustType_add(){
   
    var payModeAddObj=document.getElementById("payMode_add");

	delOption(payModeAddObj);
    if  ($("#custType_add").val()==1 ||  $("#custType_add").val()==3){ //����
       
        addOption(payModeAddObj,'Ԥ���ѻ���',1);
        addOption(payModeAddObj,'�󸶷�',2);
        addOption(payModeAddObj,'�ֽ����',3);
    }else if ( $("#custType_add").val()==2){
    	addOption(payModeAddObj,'�󸶷�',2); 
    	addOption(payModeAddObj,'Ԥ���ѻ���',1);         
        addOption(payModeAddObj,'�ֽ����',3);
        payModeAddObj.value=2;
    }else if ($("#custType_add").val()==4){//�Ƕ���
        addOption(payModeAddObj,'�ֽ����',3);
        $("#postFee_add").val(0);
    }else if ($("#custType_add").val()==5){//�Ƕ���
    	 addOption(payModeAddObj,'Ժ�ڽ���',4);
       
    } 
    
    //���¿ͻ��б�
    getCustInfo($("#custType_add").val(),'add');
}
//�ı�ͻ�����
function changeCustType_edit(){
   
    var payModeAddObj=document.getElementById("payMode_edit");

	delOption(payModeAddObj);
    if  ($("#custType_edit").val()==1 || $("#custType_edit").val()==2 || $("#custType_edit").val()==3){ //����
       
        addOption(payModeAddObj,'Ԥ���ѻ���',1);
        addOption(payModeAddObj,'�󸶷�',2);
        addOption(payModeAddObj,'�ֽ����',3);
    }else if ($("#custType_edit").val()==4){//�Ƕ���
        addOption(payModeAddObj,'�ֽ����',3);
        $("#postFee_edit").val(0);
    } else if ($("#custType_edit").val()==5){//�Ƕ���
   	    addOption(payModeAddObj,'Ժ�ڽ���',4);
    
    } 
    
    //���¿ͻ��б�
    getCustInfo($("#custType_edit").val(),'edit');
}
function getCustInfo(custType,opType){
    if ('add'==opType){
	    if  ($("#custType_add").val()==1 || 
	    		$("#custType_add").val()==2 ||
	    		$("#custType_add").val()==3 ||
	    		$("#custType_add").val()==5){ //����        
	        $("#dxTd_add").css("display","block");
		    $("#fdxTd_add").css("display","none");
		    var param={};
			param.KEY_JSCALL_SERVICE="customerService";
			param.SERVICE_METHOD="getCustomerList"; 
			param.cust_type=custType;	
			JSBaseCall.execute(param,function(data){
			   var strJson=data["defaultJsonString"];
			   var obj=eval('(' + strJson + ')');
			   if (obj.KEY_JSCALL_RESULT ){
			       if (obj.KEY_SERVICE_RES){
			           addSelOptions('custName_add_sel',obj.defaultAList);
			           addSelOptions('custName_edit_sel',obj.defaultAList);
			       }else{
			    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
			       }
			   }else{
			       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
			   } 
			});
		}else if ($("#custType_add").val()==4 ){//�Ƕ���
		    $("#dxTd_add").css("display","none");
		    $("#fdxTd_add").css("display","block");
	    }     
    
    }

    //�༭
    if ('edit'==opType){
	    if  ($("#custType_edit").val()==1 ||
	    		$("#custType_edit").val()==2 ||
	    		$("#custType_edit").val()==3 ||
	    		$("#custType_edit").val()==5){ //����        
		    $("#dxTd_edit").css("display","block");
		    $("#fdxTd_edit").css("display","none");
		    var param={};
			param.KEY_JSCALL_SERVICE="customerService";
			param.SERVICE_METHOD="getCustomerList"; 
			param.cust_type=custType;	
			JSBaseCall.execute(param,function(data){
			   var strJson=data["defaultJsonString"];
			   var obj=eval('(' + strJson + ')');
			   if (obj.KEY_JSCALL_RESULT ){
			       if (obj.KEY_SERVICE_RES){
			           addSelOptions('custName_add_sel',obj.defaultAList);
			           addSelOptions('custName_edit_sel',obj.defaultAList);
			       }else{
			    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
			       }
			   }else{
			       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
			   } 
			});
		}else if ( $("#custType_edit").val()==4){//�Ƕ���
		    $("#dxTd_edit").css("display","none");
		    $("#fdxTd_edit").css("display","block");
	    }
    } 
}




//��ӡ
function doPrint(){
	//alert(1);
	//alert($("#myPrintArea").html());
	$("#myPrintArea").printArea();
	//alert(2);
	//$("#myPrintArea").jqprint();
}

//�رմ�ӡ����-- 20120622 �޸�
function closePrint(){
    $('#win4').window('close');//�رմ�ӡ����
}
function closePrint_old(){
	$.messager.confirm('ϵͳ��ʾ', '���Ƿ�Ҫ��մ�ӡ����?', function(r) {
        if (r) {
     	   if (actType==0 || actType==1 || actType==2){//���������޸ĵ�ʱ�򣬹رյ�������
	    		   $('.easyui-window').window('close');
	    	}
     	   clearPrintData();//���ش�ӡ����
        }
        $('#win4').window('close');//�رմ�ӡ����
    });
}
//��մ�ӡ����  --�ݲ��� 20120622
function clearPrintData(){
	var param={};
	param.KEY_JSCALL_SERVICE="saleOrderService";
	param.SERVICE_METHOD="clearPrintOrder"; 	
	JSBaseCall.execute(param,function(data){
		var strJson=data["defaultJsonString"];
		 var obj=eval('(' + strJson + ')');
		   if (obj.KEY_JSCALL_RESULT ){
		       if (obj.KEY_SERVICE_RES){//�ɹ�
		    	   msgShow('ϵͳ��ʾ','�����ɹ�','info');
		       }else{
		    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
		       }
		   }else{
		       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
		   } 
	});
}

//add by feihu 20121218
function changeStandType_add(obj){
	if (obj.value==2){
		$("#standCode_add").val("GB/T");		
	}else if (obj.value==4){
		$("#standCode_add").val("DB62/T");
	}
	calculate_add();
}
function changeStandType_edit(obj){
	if (obj.value==2){
		$("#standCode_edit").val("GB/T");		
	}else if (obj.value==4){
		$("#standCode_edit").val("DB62/T");
	}
	calculate_edit();
}

