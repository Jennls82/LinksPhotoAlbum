function readyAMDiv(album) {
	
	
	
	$(function() {
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
	});
	
	$("#createAlbumBtn").click(function(evt) {
console.log("Create Album Button clicked.");
		$("#albummanagediv").empty();
		$("#albummanagediv").load("albumcreate.html");
	});
	
	$("#addPhotosToAlbumBtn").click(function(evt) {
console.log("Manage Album Button clicked.");
		$("#albummanagediv").empty();
		$("#albummanagediv").load("addphotos.html");
	});
	
	$("#albumPhotoOrderDnD").sortable({
		containment: "parent",
		grid: [30, 30],						//	may not need this
		activate: function() {
			// highlight dragged obj
		},
		deactivate: function() {
			//	return activated object back to regular format	
		},
		placeholder: "emptySpace"
	});
	
	function showPhotoOrder() {
		var album = $("#manageInterface").data("album");
		var albumphotos = album.photos;
		var dnd = $("#albumPhotoOrderDnD");
		
		if(albumphotos.length == 0) {
			$("#albumPhotoOrderDnD").html("There are no photos in the album.");
		} else {
			for(var i = 0; i < albumphotos.length; i++) {
				var photoObj = album[i];
				var photoname = "<label for='photothumb'>" + photoObj.photoname + "</label>";
				var photothumb = "<img src='" + photoObj.photopath + "' class='thumbnail'>";
				dnd.append("<div class='sortable' id='photo" + photoObj.photoID + "'>" + photothumb + photoname + "</div>");
			}
		}
		
	}
	
	
	
	
	
	
	
}	//	end readyAMDiv(album)