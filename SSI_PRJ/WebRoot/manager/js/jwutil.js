// JavaScript Document
//定义常量
var strJson="";   //json字符串
var totalRec=""; //总记录数
var pageShowRec=0;  //当前页显示的记录数
var pageNum=10;//每一页显示的数据条数
var startRec=0;//开始记录数
var pageCounts=0;//总页数
var pages=1;//定义当前页
var actType=-1;//定义操作类型 -1：页面加载 0：查询； 1：新增 ；2：修改；3：删除；
var isStatic=0;//定义是否为统计界面，因为统计界面有个总计，导致记录不准



//弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}    	
//显示首页		    
function loadDt(){
   if(parseInt($('#pageTxt').val())==1){
        msgShow('系统提示','已经是首页！','info');
        return  false;
	}else{
		startRec=0;
		pages=1;
		loadData();
	}
				
}
//显示最后一页	    
function loadDtend(){
	if(pageCounts==0 || pageCounts==parseInt($('#pageTxt').val())){
		msgShow('系统提示','已到最后一页!','info');
		return false;
	}else{
		startRec=(pageCounts-1)*pageNum;
        pages=pageCounts;
		loadData();
	}   			
}
//显示上一页
function loadDtup(){
	if(parseInt($('#pageTxt').val())==1){
        msgShow('系统提示','已经到第一页！','info');
        return  false;
	}else{
		var dpage= parseInt($('#pageTxt').val())-1;
		startRec=(dpage-1)*pageNum;
		pages=dpage;
		loadData();
	}
}
//显示下一页
function loadDtdown(){
	if(pageCounts==0 || pageCounts==parseInt($('#pageTxt').val())){
		msgShow('系统提示','已到最后一页!','info');
		return false;
	}else{
		var dpage= parseInt($('#pageTxt').val())+1;
		startRec=(dpage-1)*pageNum;
		pages=dpage;
		loadData();
	}
}		

//显示记录集
function showResult(data){
	var strJson=data["defaultJsonString"];
	var result=eval('(' + strJson + ')');
	
	if (result.KEY_JSCALL_RESULT ){
		if (result.KEY_SERVICE_RES){//成功
	
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
			//计算总页数
			if((totalRec%pageNum)==0){
				pageCounts=totalRec/pageNum;
			}else{
				var a=totalRec-totalRec%pageNum;
				pageCounts=a/pageNum+1;
			}
			$('#pageCounts').html(pageCounts);
			
			if (pageShowRec==0){
				msgShow('系统提示','根据查询条件，没有查询到对应的数据，请改变查询条件后，再重试！','info');
			}
		}else{
		    msgShow('系统提示','数据加载失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
		}
	}else{
	    msgShow('系统提示','数据加载失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
	}		
}

//增删改操作回调函数
function showDoResult(data){
	 var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//成功
	    	   //alert(actType);
	    	   if (actType==0 || actType==1 || actType==2){//新增或者修改的时候，关闭弹出界面
	    		   $('.easyui-window').window('close');
	    	   }
	    	   loadData();
	       }else{
	    	   msgShow('系统提示','操作失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('系统提示','操作失败，调用JSCall失败信息:'+obj.KEY_JSCALL_MSG,'error');
	   } 
}

function showOrderResult(data){
	var strJson=data["defaultJsonString"];
	 var obj=eval('(' + strJson + ')');
	   //alert(strJson);
	   if (obj.KEY_JSCALL_RESULT ){
	       if (obj.KEY_SERVICE_RES){//成功
	    	   $.messager.confirm('系统提示', '您现在需要打印吗?', function(r) {
                   if (r) {
                	   if (actType==0 || actType==1 || actType==2){//新增或者修改的时候，关闭弹出界面
        	    		   $('.easyui-window').window('close');
        	    	   }
                	   loadPrintData();//加载打印数据
                	   
                	   $('#win4').window('open');//显示打印界面
                   }else{//需要继续复印，则不打印，也不关闭窗口
                	 
                   }
                   
               });
	    	   loadData();
        	   clearOrderInfo();//清空表单数据
	    	   
	       }else{
	    	   msgShow('系统提示','操作失败，失败信息'+obj.KEY_SERVICE_RES_INFO,'error');
	       }
	   }else{
	       msgShow('系统提示','操作失败，调用JSCall失败信息:'+obj.KEY_JSCALL_MSG,'error');
	   } 
	
}
function getDate(){
	var now = new Date();   
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var clock = year + "-";  
    if(month < 10)
        clock += "0";  
    clock += month + "-";  
    if(day < 10)
        clock += "0";      
    clock += day;
    return(clock); 
}


//关闭弹出窗口 
function closeWin(divId){
	$('#'+divId).window('close');
}
//		
function fixWidth(percent)  
{  
    return (document.body.clientWidth - 0) * percent ; //这里你可以自己做调整  
};