function readyASDiv() {
	
	dispAlbums();
	dispPhotos();
	
	$("#createBtn").click(function(evt) {
console.log("Album Create Button clicked.");
		var aname = $("#anBox").val();
		if(aname == "") {
			alert("Please enter a name for the album.");
		} else {
			for(var i = 0; i < albums.length; i++) {
				if(albums[i].albumname == aname) {
					alert("An album with that name already exists. Please choose another name.");
					$("#anBox").html("");
				} else {
					var tempalbum = new Album();
					tempalbum.newalbum(aname);
					alert("New album created successfully.");
					$("#radio2".click());				//	refresh page to display new album below
				}
			}
		}
	});
	
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
				var tempdiv = "<div id='" + tempname + "' class='selector'>" + user.albums[i].albumname + "</div>";
				albumsdiv.append(tempdiv);
				$("#" + tempname).click(function(evt) {
					manageAlbum(tempname);
				});
				$("#" + tempname).data(tempname, user.albums[i]);
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
				var tempdiv = "<div id='" + tempname + "' class='selector'>" + user.photos[i].photoname + "</div>";
				photosdiv.append(tempdiv);
				$("#" + tempname).click(function(evt) {
					managePhoto(tempname);
				});
				$("#" + tempname).data(tempname, user.photos[i]);
			}
		}
	}
	
	function manageAlbum(albumname) {
		var album = $("#" + albumname).data(albumname);
		$("#maindiv").empty();
		$("#maindiv").load("albummanage.html #albummanagediv", function() {
			readyAMDiv(album);
		});
	}
	
	function managePhoto(photoname) {
		var photo = $("#" + photoname).data(photoname);
		$("#maindiv").empty();
		$("#maindiv").load("photomanage.html #photomanagediv", function() {
			readyPMDiv(photo);
		});
	}
	
}
