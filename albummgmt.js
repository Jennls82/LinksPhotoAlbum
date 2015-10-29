function readyAMDiv(album) {
	
	showPhotoOrder();
	
	
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
	
	$("#albumPhotoOrderDnD").sortable({
		containment: "parent",
		activate: function() {
			// highlight dragged obj
		},
		deactivate: function() {
			//	return activated object back to regular format	
		},
		placeholder: "emptySpace"
	});
	
	$("#albumPhotoOrderCommitBtn").click(function(evt) {
		var neworder = $("#albumPhotoOrderDnD").sortable("toArray");
		var tempphotoarray = [];
		
		for(var i = 0; i < neworder.length; i++) {
			var searchTerm = neworder[i].substring(5);
			var x;
			for(var j = 0; j < album.photos.length; j++) {
				if(album.photos[j].photoID == searchTerm) {
					x = j;
				}
			}
console.log("DEBUG: reordering photoarray. found " + neworder[i] + " at index " + x);
			tempphotoarray.push(album.photos[x]);
		}
		album.photos = tempphotoarray;
		console.log(album.photos);
	});
	
	function showPhotoOrder() {
console.log("In showPhotoOrder()");
		var albumphotos = album.photos;
		var dnd = $("#albumPhotoOrderDnD");
		
		if(albumphotos.length == 0) {
			$("#albumPhotoOrderDnD").html("There are no photos in the album.");
		} else {
			for(var i = 0; i < albumphotos.length; i++) {
				var photoObj = albumphotos[i];
				var photoname = "<label for='photothumb'>" + photoObj.photoname + "</label>";
				var photothumb = "<img src='" + photoObj.photopath + "' class='thumbnail' height=30px width=30px>";
				dnd.append("<div class='thumbnail sortable' id='photo" + photoObj.photoID + "'>" + photothumb + photoname + "</div>");
			}
		}
	}
	
	
	
	
	
	
	
}	//	end readyAMDiv(album)