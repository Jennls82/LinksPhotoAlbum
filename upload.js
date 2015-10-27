$(document).ready(function(){
			$( "#accordion" ).accordion();
			$("#date").datepicker();
			$("#menu").menu();
			$("input[type=button]").button();
			
			$("#uploadTags").click(
	function(){
	var formArray=[];
	var title = $("#title").val();  
	var comment = $("#comment").val();  
	var date = $("#date").val();  
	var album = [];//$("checkbox").val();
		$("input[type=checkbox]").each(function(){
			if ($(this).is(':checked')) {
       			album.push($(this).val());
			};
		})
		// $("checkbox").on('change', ':checkbox', function () {
    	// 	if ($(this).is(':checked')) {
       	// 	album.push(this.val());
		// 	};
		//});
	formArray.push(title,comment,date,album);
	  
	JSON.stringify($("#uploadinfo").serializeArray());
	console.log(formArray);
	});	
			
	});
	
	
	
