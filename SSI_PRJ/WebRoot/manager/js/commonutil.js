// JavaScript Document
//���峣��
var price=0;//���嵥��
var dataPrice=0; //�������Ϸ�
var searchPrice=0; //�����������
var searchFee=0; //�����������
var sumFee=0;//�����ܷ���
var postFee=0;//�����ʷ�


var FDX_ISO_CP_PRICE=2;   //�Ƕ���ͻ����ʱ�׼��ӡ����
var FDX_GB_CP_PRICE=1.5;   //�Ƕ���ͻ����ұ�׼��ӡ����
var FDX_DB_CP_PRICE=3;//�Ƕ���ͻ��ط���׼��ӡ����
var FDX_HB_CP_PRICE=1.5;  //�Ƕ���ͻ���ҵ��׼��ӡ����

var FDX_ISO_CP_SEARCH_PRICE=1;   //�Ƕ���ͻ����ʱ�׼��������
var FDX_GB_CP_SEARCH_PRICE=1;   //�Ƕ���ͻ����ұ�׼��������
var FDX_DB_CP_SEARCH_PRICE=5;//�Ƕ���ͻ��ط���׼��������
var FDX_HB_CP_SEARCH_PRICE=1;  //�Ƕ���ͻ���ҵ��׼��������

var YN_ISO_CP_PRICE=2;   //Ժ�ڹ��ʱ�׼��ӡ����
var YN_GB_CP_PRICE=1.5;   //Ժ�ڹ��ұ�׼��ӡ����
var YN_DB_CP_PRICE=3;//Ժ�ڵط���׼��ӡ����
var YN_HB_CP_PRICE=5;  //Ժ����ҵ��׼��ӡ����

var YN_ISO_CP_SEARCH_PRICE=1;   //Ժ�ڹ��ʱ�׼��������
var YN_GB_CP_SEARCH_PRICE=1;   //Ժ�ڹ��ұ�׼��������
var YN_DB_CP_SEARCH_PRICE=5;//Ժ�ڵط���׼��������
var YN_HB_CP_SEARCH_PRICE=1;  //Ժ����ҵ��׼��������

var DX_ISO_CP_PRICE=2;   //����ͻ����ʱ�׼��ӡ����
var DX_GB_CP_PRICE=1;   //����ͻ����ұ�׼��ӡ����
var DX_DB_CP_PRICE=3;//����ͻ��ط���׼��ӡ����
var DX_HB_CP_PRICE=1;  //����ͻ���ҵ��׼��ӡ����

var DX_CP_SEARCH_PRICE=0; //����ͻ���׼��������

//���س���
var FDX_ISO_DW_PRICE=2;   //�Ƕ���ͻ����ʱ�׼���ط���
var FDX_GB_DW_PRICE=1.5;   //�Ƕ���ͻ����ұ�׼���ط���
var FDX_DB_DW_PRICE=1.5;//�Ƕ���ͻ��ط���׼���ط���
var FDX_HB_DW_PRICE=1.5;  //�Ƕ���ͻ���ҵ��׼���ط���

var FDX_ISO_DW_SEARCH_PRICE=20;   //�Ƕ���ͻ����ʱ�׼��������
var FDX_GB_DW_SEARCH_PRICE=15;   //�Ƕ���ͻ����ұ�׼��������
var FDX_DB_DW_SEARCH_PRICE=15;//�Ƕ���ͻ��ط���׼��������
var FDX_HB_DW_SEARCH_PRICE=15;  //�Ƕ���ͻ���ҵ��׼��������

var DX_ISO_DW_PRICE=2;   //����ͻ����ʱ�׼���ط���
var DX_GB_DW_PRICE=1;   //����ͻ����ұ�׼���ط���
var DX_DB_DW_PRICE=1;//����ͻ��ط���׼���ط���
var DX_HB_DW_PRICE=1;  //����ͻ���ҵ��׼���ط���

var DX_ISO_DW_SEARCH_PRICE=10; //����ͻ���׼��������
var DX_GB_DW_SEARCH_PRICE=5; //����ͻ���׼��������
var DX_DB_DW_SEARCH_PRICE=5; //����ͻ���׼��������
var DX_HB_DW_SEARCH_PRICE=5; //����ͻ���׼��������

var YN_ISO_DW_PRICE=2;   //Ժ�ڹ��ʱ�׼���ط���
var YN_GB_DW_PRICE=1.5;   //Ժ�ڹ��ұ�׼���ط���
var YN_DB_DW_PRICE=1.5;//Ժ�ڵط���׼���ط���
var YN_HB_DW_PRICE=1.5;  //Ժ����ҵ��׼���ط���

var YN_ISO_DW_SEARCH_PRICE=20;   //Ժ�ڹ��ʱ�׼��������
var YN_GB_DW_SEARCH_PRICE=15;   //Ժ�ڹ��ұ�׼��������
var YN_DB_DW_SEARCH_PRICE=15;//Ժ�ڵط���׼��������
var YN_HB_DW_SEARCH_PRICE=15;  //Ժ����ҵ��׼��������

var DATA_CP_PRICE=0.5;//���ϸ�ӡ����


//�����������
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

//���ѡ��
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
		var option=new Option("ȫѡ",allVal);
	    obj.options.add(option);
	}
   for (var i=0;i<alist.length;++i){
      var dto=alist[i];
      var option=new Option(dto.custName,dto.custId+','+dto.custName);
      obj.options.add(option);
   }
	
}
