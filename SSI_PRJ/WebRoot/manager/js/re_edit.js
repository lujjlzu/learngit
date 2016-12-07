// JavaScript Document
 function reEdit(){
 	var brand_name_edit=document.getElementById("brand_name_edit").value;
	var show_name_edit=document.getElementById("show_name_edit").value;
	var num=document.getElementById("show_seq_edit").value;
	var reg = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg2 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg3 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg4 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg5 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var numreg = /[\d]/g;
	if (!reg.test(brand_name_edit))
	{
		alert("请输入中文或字符！");
	}
	if (!reg2.test(show_name_edit))
	{
		alert("请输入中文或字符！");
	}
	if (!numreg.test(num))
	{
		alert("请输入数字！");
	}
 
 }