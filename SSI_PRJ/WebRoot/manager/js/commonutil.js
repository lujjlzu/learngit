// JavaScript Document
//定义常量
var price=0;//定义单价
var dataPrice=0; //定义资料费
var searchPrice=0; //定义检索单价
var searchFee=0; //定义检索费用
var sumFee=0;//定义总费用
var postFee=0;//定义邮费


var FDX_ISO_CP_PRICE=2;   //非定向客户国际标准复印费用
var FDX_GB_CP_PRICE=1.5;   //非定向客户国家标准复印费用
var FDX_DB_CP_PRICE=3;//非定向客户地方标准复印费用
var FDX_HB_CP_PRICE=1.5;  //非定向客户行业标准复印费用

var FDX_ISO_CP_SEARCH_PRICE=1;   //非定向客户国际标准检索费用
var FDX_GB_CP_SEARCH_PRICE=1;   //非定向客户国家标准检索费用
var FDX_DB_CP_SEARCH_PRICE=5;//非定向客户地方标准检索费用
var FDX_HB_CP_SEARCH_PRICE=1;  //非定向客户行业标准检索费用

var YN_ISO_CP_PRICE=2;   //院内国际标准复印费用
var YN_GB_CP_PRICE=1.5;   //院内国家标准复印费用
var YN_DB_CP_PRICE=3;//院内地方标准复印费用
var YN_HB_CP_PRICE=5;  //院内行业标准复印费用

var YN_ISO_CP_SEARCH_PRICE=1;   //院内国际标准检索费用
var YN_GB_CP_SEARCH_PRICE=1;   //院内国家标准检索费用
var YN_DB_CP_SEARCH_PRICE=5;//院内地方标准检索费用
var YN_HB_CP_SEARCH_PRICE=1;  //院内行业标准检索费用

var DX_ISO_CP_PRICE=2;   //定向客户国际标准复印费用
var DX_GB_CP_PRICE=1;   //定向客户国家标准复印费用
var DX_DB_CP_PRICE=3;//定向客户地方标准复印费用
var DX_HB_CP_PRICE=1;  //定向客户行业标准复印费用

var DX_CP_SEARCH_PRICE=0; //定向客户标准检索费用

//下载常量
var FDX_ISO_DW_PRICE=2;   //非定向客户国际标准下载费用
var FDX_GB_DW_PRICE=1.5;   //非定向客户国家标准下载费用
var FDX_DB_DW_PRICE=1.5;//非定向客户地方标准下载费用
var FDX_HB_DW_PRICE=1.5;  //非定向客户行业标准下载费用

var FDX_ISO_DW_SEARCH_PRICE=20;   //非定向客户国际标准检索费用
var FDX_GB_DW_SEARCH_PRICE=15;   //非定向客户国家标准检索费用
var FDX_DB_DW_SEARCH_PRICE=15;//非定向客户地方标准检索费用
var FDX_HB_DW_SEARCH_PRICE=15;  //非定向客户行业标准检索费用

var DX_ISO_DW_PRICE=2;   //定向客户国际标准下载费用
var DX_GB_DW_PRICE=1;   //定向客户国家标准下载费用
var DX_DB_DW_PRICE=1;//定向客户地方标准下载费用
var DX_HB_DW_PRICE=1;  //定向客户行业标准下载费用

var DX_ISO_DW_SEARCH_PRICE=10; //定向客户标准检索费用
var DX_GB_DW_SEARCH_PRICE=5; //定向客户标准检索费用
var DX_DB_DW_SEARCH_PRICE=5; //定向客户标准检索费用
var DX_HB_DW_SEARCH_PRICE=5; //定向客户标准检索费用

var YN_ISO_DW_PRICE=2;   //院内国际标准下载费用
var YN_GB_DW_PRICE=1.5;   //院内国家标准下载费用
var YN_DB_DW_PRICE=1.5;//院内地方标准下载费用
var YN_HB_DW_PRICE=1.5;  //院内行业标准下载费用

var YN_ISO_DW_SEARCH_PRICE=20;   //院内国际标准检索费用
var YN_GB_DW_SEARCH_PRICE=15;   //院内国家标准检索费用
var YN_DB_DW_SEARCH_PRICE=15;//院内地方标准检索费用
var YN_HB_DW_SEARCH_PRICE=15;  //院内行业标准检索费用

var DATA_CP_PRICE=0.5;//资料复印单价


//清空下拉数据
function delOption(Obj){
	try{
	    for(var i=0;i<Obj.options.length;i++){	      
            Obj.remove(i);
            i=i-1;
	    }
    }catch(e){
    }
}
function addOption(Obj,selText,selVal){
    try{
    	Obj.options.add(new Option(selText, selVal));
  }catch(e){
  }
}

//添加选项
function addSelOptions(ele,alist){
   var obj=document.getElementById(ele);
   delOption(obj);
   for (var i=0;i<alist.length;++i){
      var dto=alist[i];
      var option=new Option(dto.custName,dto.custId+','+dto.custName);
      obj.options.add(option);
   }
}

function addSelOptions(ele,alist,isAll,allVal){
	var obj=document.getElementById(ele);
	delOption(obj);
	if (isAll){
		var option=new Option("全选",allVal);
	    obj.options.add(option);
	}
   for (var i=0;i<alist.length;++i){
      var dto=alist[i];
      var option=new Option(dto.custName,dto.custId+','+dto.custName);
      obj.options.add(option);
   }
	
}
