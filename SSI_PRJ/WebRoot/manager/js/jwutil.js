// JavaScript Document
//���峣��
var strJson="";   //json�ַ���
var totalRec=""; //�ܼ�¼��
var pageShowRec=0;  //��ǰҳ��ʾ�ļ�¼��
var pageNum=10;//ÿһҳ��ʾ����������
var startRec=0;//��ʼ��¼��
var pageCounts=0;//��ҳ��
var pages=1;//���嵱ǰҳ
var actType=-1;//����������� -1��ҳ����� 0����ѯ�� 1������ ��2���޸ģ�3��ɾ����
var isStatic=0;//�����Ƿ�Ϊͳ�ƽ��棬��Ϊͳ�ƽ����и��ܼƣ����¼�¼��׼



//������Ϣ���� title:���� msgString:��ʾ��Ϣ msgType:��Ϣ���� [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}    	
//��ʾ��ҳ		    
function loadDt(){
   if(parseInt($('#pageTxt').val())==1){
        msgShow('ϵͳ��ʾ','�Ѿ�����ҳ��','info');
        return  false;
	}else{
		startRec=0;
		pages=1;
		loadData();
	}
				
}
//��ʾ���һҳ	    
function loadDtend(){
	if(pageCounts==0 || pageCounts==parseInt($('#pageTxt').val())){
		msgShow('ϵͳ��ʾ','�ѵ����һҳ!','info');
		return false;
	}else{
		startRec=(pageCounts-1)*pageNum;
        pages=pageCounts;
		loadData();
	}   			
}
//��ʾ��һҳ
function loadDtup(){
	if(parseInt($('#pageTxt').val())==1){
        msgShow('ϵͳ��ʾ','�Ѿ�����һҳ��','info');
        return  false;
	}else{
		var dpage= parseInt($('#pageTxt').val())-1;
		startRec=(dpage-1)*pageNum;
		pages=dpage;
		loadData();
	}
}
//��ʾ��һҳ
function loadDtdown(){
	if(pageCounts==0 || pageCounts==parseInt($('#pageTxt').val())){
		msgShow('ϵͳ��ʾ','�ѵ����һҳ!','info');
		return false;
	}else{
		var dpage= parseInt($('#pageTxt').val())+1;
		startRec=(dpage-1)*pageNum;
		pages=dpage;
		loadData();
	}
}		

//��ʾ��¼��
function showResult(data){
	var strJson=data["defaultJsonString"];
	var result=eval('(' + strJson + ')');
	
	if (result.KEY_JSCALL_RESULT ){
		if (result.KEY_SERVICE_RES){//�ɹ�
	
			totalRec=result.KEY_TOTAL_REC;
			if (result.defaultAList!=null){
			    pageShowRec=result.defaultAList.length;
			}else{
				pageShowRec=0;
			}
			var d={"total":pageShowRec,
				"rows":result.defaultAList
			};	
			 
			$('#tt').datagrid('loadData',d);
			 
			$('#pageTxt').val(pages);
			$('#startRec').html(startRec+1);
			if (isStatic==1 && startRec+pageShowRec>0){
				$('#endRec').html(startRec+pageShowRec-1);
			}else {
				$('#endRec').html(startRec+pageShowRec);
			}			
			$('#totalRec').html(totalRec);
			//������ҳ��
			if((totalRec%pageNum)==0){
				pageCounts=totalRec/pageNum;
			}else{
				var a=totalRec-totalRec%pageNum;
				pageCounts=a/pageNum+1;
			}
			$('#pageCounts').html(pageCounts);
			
			if (pageShowRec==0){
				msgShow('ϵͳ��ʾ','���ݲ�ѯ������û�в�ѯ����Ӧ�����ݣ���ı��ѯ�����������ԣ�','info');
			}
		}else{
		    msgShow('ϵͳ��ʾ','���ݼ���ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
		}
	}else{
	    msgShow('ϵͳ��ʾ','���ݼ���ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
	}		
}

//��ɾ�Ĳ����ص�����
function showDoResult(data){
	 var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//�ɹ�
	    	   //alert(actType);
	    	   if (actType==0 || actType==1 || actType==2){//���������޸ĵ�ʱ�򣬹رյ�������
	    		   $('.easyui-window').window('close');
	    	   }
	    	   loadData();
	       }else{
	    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
	   } 
}

function showOrderResult(data){
	var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//�ɹ�
	    	   $.messager.confirm('ϵͳ��ʾ', '��������Ҫ��ӡ��?', function(r) {
                   if (r) {
                	   if (actType==0 || actType==1 || actType==2){//���������޸ĵ�ʱ�򣬹رյ�������
        	    		   $('.easyui-window').window('close');
        	    	   }
                	   loadPrintData();//���ش�ӡ����
                	   
                	   $('#win4').window('open');//��ʾ��ӡ����
                   }else{//��Ҫ������ӡ���򲻴�ӡ��Ҳ���رմ���
                	 
                   }
                   
               });
	    	   loadData();
        	   clearOrderInfo();//��ձ�����
	    	   
	       }else{
	    	   msgShow('ϵͳ��ʾ','����ʧ�ܣ�ʧ����Ϣ'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('ϵͳ��ʾ','����ʧ�ܣ�����JSCallʧ����Ϣ:'+obj.KEY_JSCALL_MSG,'error');
	   } 
	
}
function getDate(){
	var now = new Date();   
    var year = now.getFullYear();       //��
    var month = now.getMonth() + 1;     //��
    var day = now.getDate();            //��
    var clock = year + "-";  
    if(month < 10)
        clock += "0";  
    clock += month + "-";  
    if(day < 10)
        clock += "0";      
    clock += day;
    return(clock); 
}


//�رյ������� 
function closeWin(divId){
	$('#'+divId).window('close');
}
//		
function fixWidth(percent)  
{  
    return (document.body.clientWidth - 0) * percent ; //����������Լ�������  
};