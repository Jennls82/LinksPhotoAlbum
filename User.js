

function User() {
	this.userID = User.counter++;
	this.username;
	this.password;
	this.photos = [];
	this.albums = [];
}

User.counter = 0;

User.prototype.login = function() {
	$("#loginInterface").hide();
	$("#newuserInterface").hide();
	$("#loggedInInterface").show();
	$("#username").html(this.username);
	$("#loggedInInterface").data("user", this);
}

User.prototype.newaccount = function(un, pw) {
	this.username = un;
	this.password = pw;
	
	users.push(this);
}

User.prototype.dispAlbums = function() {
	var localalbums = this.albums;
	if(localalbums.length == 0) {
		$("#albumsdisplay").html("You do not have any albums to display or manage.");
	} else {
		for(var i = 0; i < localalbums.length; i++) {
//			$("albumsdisplay").
		
		}	
	}
}

User.prototype.serialize = function() {
	
} 