var albums = [];

function Album() {
	this.albumID = Album.counter++;
	this.albumname;
	this.dispspeed = 1;
	this.photos = [];
	this.createDate;
}

Album.counter = 0;

Album.prototype.newalbum = function(aname) {
	this.albumname = aname;
	this.createDate = new Date(Date.now());
	
	albums.push(this);
}

$(document).ready(function() {
	
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
		var albumcreatediv = $("#albumcreatediv");
		var albummanagediv = $("#albummangediv");
		
		albumcreatediv.hide();
		albummanagediv.show();
		dispAlbums();
	});
	
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
				$("#" + tempname).data(tempname, )
			}
		}
	}
	
	function selectedalbumdisp(tempname) {
		var selectedalbum = $("#selectedalbum");
		selectedalbum.html(tempname);
	}
});

var myAlbum = new Album();
myAlbum.newalbum("myAlbum");