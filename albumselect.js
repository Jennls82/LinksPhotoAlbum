	
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
				}
			}
		}
	});
	
	$("#manageBtn").click(function(evt) {
console.log("Manage/Display Albums Button clicked.");
	displayAvailAlbums();
	});
	
	function displayAvailAlbums() {
		var albumcreatediv = $("#albumcreatediv");
		var albummanagediv = $("#albummangediv");
		
		albumcreatediv.hide();
		albummanagediv.show();
		dispAlbums();
	}
	
	function dispAlbums() {
		var loggedInInterface = $("#loggedInInterface");
		var user = loggedInInterface.data("user");
		var albumsdiv = $("#albumsdiv");
		
		if(user.albums.length == 0) {
			albumsdiv.html("You have no albums to manage or display.");
		} else {			
			for(var i = 0; i < user.albums.length; i++) {
				var tempdiv = albumsdiv.add("div");
				var tempname = "album" + i;
				tempdiv.setAttribute("id", tempname);
				tempdiv.innerHTML=user.albums[i].albumname;
				albumsdiv.append(tempdiv);
				$("#" + tempname).click(function(evt) {
					selectedalbumdisp(tempname);
				});
				$("#" + tempname).data(tempname, user.albums[i]);
			}
		}
	}
	
	function selectedalbumdisp(tempname) {
		var selectedalbum = $("#selectedalbum");
		selectedalbum.html(tempname);
	}
});