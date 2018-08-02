function getValue()
{
	var arr=document.form1.check;
	var dd=document.form1.text1.value;
	var ee=document.form1.Option.value;
	if (dd) 
	{
		alert(dd);
	}
	if (ee)
	{
		alert(ee);
	}
	// alert(arr[0].value); //取得check數組的值

	if (document.form1.check3.checked)
	{
		alert(document.form1.check3.value);	
		
	}
	
	if (document.form1.check4.checked)
	{
		alert(document.form1.check4.value);	
		
	}
}