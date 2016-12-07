// JavaScript Document
 function reNum(){
 	var brand_name=document.getElementById("brand_name").value;
	var show_name=document.getElementById("show_name").value;
	var num=document.getElementById("show_seq").value;
	var reg = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg2 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg3 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg4 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg5 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg6 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var reg7 = /^[\u4e00-\u9fa5a-z]+$/gi;
	var numreg = /[\d]/g;
	if (!reg.test(brand_name))
	{
		alert("请输入中文或字符！");
	}
	if (!reg2.test(show_name))
	{
		alert("请输入中文或字符！");
	}
	if (!numreg.test(num))
	{
		alert("请输入数字！");
	}
 
 }