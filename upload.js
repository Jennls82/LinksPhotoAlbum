$(document).ready(function(){
			$("#accordion").accordion();
			$("#date").datepicker();
			$("#menu").menu();
			$("input[type=button]").button();
		     $("#photopath").button();
			$("#uploadTags").click(
	function(){
	var title = $("#title").val();  
	var photopath = $("#photopath").val();
	var caption = $("#caption").val();  
	var date = $("#date").val();  
	var metatags= [];//fxn
	
	function addPhotoIstance() {
		var temp = new Photo();
		temp.newPhoto(photopath);
		temp.setPhotoTitle(title);
		temp.setPhotocaption(caption);
		temp.setPhotoTakenDate(date);
		//need to set the album info
		
	
	 
	// var album = [];//$("checkbox").val();
	// 	$("input[type=checkbox]").each(function(){
	// 		if ($(this).is(':checked')) {
    //    			album.push($(this).val());
	// 		};
	// 	})
	// formArray.push(title,caption,date, photoUploadDate,album);
	
	// //delete if unchecked
	// 	function unchecked(){$("input[type=checkbox]").each(function(){
	// 		if ($(this).is(':checked, false')) {
    //    			album.delete($(this).val());
			
		
	
	  
	JSON.stringify($("#uploadinfo").serializeArray());
	console.log(photos);
	};		
	});	
	});
	
	
	
