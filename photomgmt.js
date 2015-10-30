function readyPMDiv(photo) {
	var user = $("#loggedInInterface").data("user");
	
	console.log(photo);
	
	$("#photodisplaybox").html("<img src='" + photo.photopath + "'>");
	$("#photonameBox").html("<input type='text' id='photoname' value='" + photo.photoname + "'>");
	$("#phototitleBox").html("<input type='text' id='phototitle' value='" + photo.phototitle + "'>");
	$("#photocaptionBox").html("<input type='text' id='photocaption' value='" + photo.photocaption + "'>");
	$("#phototakendateBox").html("<input type='text' id='photoTakenDate' placeholder='" + photo.photoTakenDate + "'>");
	
	$("#photoTakenDate").datepicker();
	
	$("#pmCommitBtn").click(function(evt) {
console.log("pmCommitBtn clicked.");
		photo.setPhotoName($("#photoname").val());
		photo.setPhotoTitle($("#phototitle").val());
		photo.setPhotoCaption($("#photocaption").val());
		photo.setPhotoTakenDate($("#photoTakenDate").val());
	});
	
	dispAlbums();
	dispPhotos();

	
	
	function dispAlbums() {
console.log("in albumselect.js/dispAlbums()");
		var loggedInInterface = $("#loggedInInterface");
		var user = loggedInInterface.data("user");
		var albumsdiv = $("#userAlbumsLst");
		
		if(user.albums.length == 0) {
			albumsdiv.html("You have no albums to manage or display.");
		} else {			
			for(var i = 0; i < user.albums.length; i++) {
				var tempname = "album" + i;
				var tempobj = user.albums[i];
				var tempdiv = "<div id='" + tempname + "' class='selector'>" + tempobj.albumname + "</div>";
				albumsdiv.append(tempdiv);
				 $("#" + tempname).click(function(evt) {
				 	manageAlbum($(this).attr("id"));
				 });
				$("#userAlbumsdiv").data(tempname, albums[i]);
			}
		}
	}
	
	function dispPhotos() {
console.log("in albumselect.js/dispPhotos()");
		var loggedInInterface = $("#loggedInInterface");
		var user = loggedInInterface.data("user");
		var photosdiv = $("#userPicsLst");
		
		if(user.photos.length == 0) {
			photosdiv.html("You have no photos to manage.");
		} else {			
			for(var i = 0; i < user.photos.length; i++) {
				var tempname = "photo" + i;
				var tempname2 = "&quot;" + tempname + "&quot;";
				var tempobj = user.photos[i];
				var tempdiv = "<div id='" + tempname + "' class='selector'>" + tempobj.photoname + "</div>";
				photosdiv.append(tempdiv);
				$("#" + tempname).click(function(evt) {
					managePhoto($(this).attr("id"));
				});
				$("#" + tempname).data(tempname, tempobj)
				
			}
		}
	}
	
	
	
}
	function manageAlbum(albumname) {
console.log("In manageAlbum: ");
		var album = $("#userAlbumsdiv").data(albumname);
		$("#maindiv").empty();
		$("#maindiv").load("albummanage.html #albummanagediv", function() {
			readyAMDiv(album);
		});
	}
	

	function managePhoto(photoname) {
		var photo = $("#" + photoname).data(photoname);
		$("#maindiv").empty();
		$("#maindiv").load("photomgmt.html #photomgmtdiv", function() {
			readyPMDiv(photo);
		});
	}

