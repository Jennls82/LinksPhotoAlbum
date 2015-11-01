function readyUpload() {
console.log("In readyUpload()");
		
	$("#uploadPhotoButton").click(function () {
		var newImg = $("#photopath").val();
		$("#initPic").attr("src", newImg);
	});
	

	$("#accordion").accordion();
	$("#date").datepicker();
	$("#menu").menu();
	$("input[type=button]").button();
	$("#photopath").button();
	$("#uploadTags").click(
		function () {
			var photoArray = [];
			console.log("In 1st fxn");

			var title = $("#title").val();
			var photopath = $("#photopath").val();
			var caption = $("#caption").val();
			var date = $("#date").val();
			var metatags = [];

			(function addPhotoIstance() {
				console.log("In addPhotofxn");
				var temp = new Photo();
				temp.newPhoto(photopath);
				temp.setPhotoTitle(title);
				temp.setPhotoCaption(caption);
				temp.setPhotoTakenDate(date);
				//need to set the album info
		
	
	 
				var album = [];
				$("input[type=checkbox]").each(function () {
					if ($(this).is(':checked')) {
						//attach to album object
						var albumObj = new Album();
						albumObj.albumname = $(this).val();
						album.push(albumObj);
					};
				})
				temp.albums = album;
				photoArray.push(temp);
				  
				var cookie = setCookie("photoArray1", photoArray);
				console.log("cookie = " + cookie);
				
				localStorage.setItem("photoArray1", JSON.stringify(photoArray));
				var storageTest = localStorage.getItem("photoArray1");
				console.log(storageTest);
				alert(storageTest);
				JSON.stringify($("#uploadinfo").serializeArray())
				console.log("JSON = " + photoArray);
			})();
		});
}
	
	
	
