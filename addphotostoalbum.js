function readyAPtADiv() {
	console.log("In readyAPtADiv() in addphotostoalbum.js");
	var user = $("#loggedInInterface").data("user");
	
	
	showPhotoCollection();
	showAlbumCollection();
	
	
	function showPhotoCollection() {
		var photoc = user.photos;
		var photoclen = photoc.length;
		var dndP = $("#userphotosBox");
		
		if(photoclen == 0) {
			$("#userphotosBox").html("There are no photos in your collection");
		} else {
			for(var i = 0; i < photoclen; i++) {
				var photoObj = photoc[i];
				var photoname = "<div class='objlabel'>" + photoObj.photoname + "</div>";
				var photothumb = "<img src='" + photoObj.photopath + "' class='thumbnail' height=30px width=30px>";
				dndP.append("<div class='thumbnail draggable' id='photo" + photoObj.photoID + "'>" + photothumb + photoname + "</div>");
			}
		}
	}
	
	function showAlbumCollection() {
		var albumc = user.albums;
		var albumclen = albumc.length;
		var dndA = $("#useralbumsBox");
		
		if(albumclen == 0) {
			$("#useralbumsBox").html("There are no albums in your collection");
		} else {
			for(var i = 0; i < albumclen; i++) {
				var albumObj = albumc[i];
				var albumname = "<div class='collectlabel'>" + albumObj.albumname + "</div>";
				var albumbox = "<div class='objlabel' id='" + albumname + "'></div>";
				dndA.append("<div class='container sortable droppable collectbox' id='album" + albumObj.albumID + "'>" + albumname + "</div>");
			}
		}
	}
	
	function addPhotoToAlbum(event, ui) {
		var user = $("#loggedInInterface").data("user");
		var photoarray = user.photos;
		var thisphoto = ui.draggable[0].id;
		var psearchterm = thisphoto.substring(5);
		var photoObj;
		for(var i = 0; i < photoarray.length; i++) {
			if(photoarray[i].photoID == psearchterm) {
				photoObj = photoarray[i];
			}
		}
		
		var albumarray = user.albums;
		var thisalbum = event.target.id;		
		var asearchterm = thisalbum.substring(5);
		var albumObj;
		for(var i = 0; i < albumarray.length; i++) {
			if(albumarray[i].albumID == asearchterm) {
				albumObj = albumarray[i];
			}
		}
		// add photo name to display of album container
		var albumphotoslength = albumObj.photos.length;
		if(albumphotoslength == 0) {
			albumObj.photos.push(photoObj);
		} else {
			for(var i = 0; i < albumphotoslength; i++) {
				var a = albumObj.photos.indexOf(photoObj);
				if(a == -1) {
					albumObj.photos.push(photoObj);
				} else {
					alert("That photo is already in that album.");
					return 0;
				}
			}
		}
		$("#" + thisalbum).append("<div id='" + thisphoto + "' class='albumlist'>" + photoObj.photoname + "</div>")
		console.log("at end of addPhotoToAlbum. album photo array is: " + albumObj.photos);
	}
	
	$(".draggable").draggable({
		helper: "clone",
		connectToDroppable: ".sortable",
		
	
	});
	
	$(".sortable").sortable({
	});
	
	$(".droppable").droppable({
		drop: function(event, ui) {
			addPhotoToAlbum(event, ui)
		}		
		});
	
	
	
	
	
	
	
	
}