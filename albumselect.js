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
	
	$("#dispspeedBox").slider({
		range: "max,",
		min: 1,
		max: 10,
		value: 5,
		slide: function(event, ui) {
			$("#speedLbl").val(ui.value);
		}
	});
	
	$("#speedLbl").val($("#dispspeedBox").slider("value"));
	
		$("#createAlbumBtn").click(function(evt) {
console.log("Create Album Button clicked.");
		$("#albummanagediv").empty();
		$("#maindiv").load("albumselect.html #albumcreatediv", function() {
			readyASDiv();
		});
	});
	
	$("#addPhotosToAlbumBtn").click(function(evt) {
console.log("Manage Album Button clicked.");
		$("#albummanagediv").empty();
		$("#maindiv").load("addphotostoalbum.html #addphotoalbumdiv", function() {
			readyAPtADiv();
		});
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
console.log("album: " + album);
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
