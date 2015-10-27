
function User() {
	this.userID;
	this.username;
	this.password;
	this.photos = [];
	this.albums = [];
}

User.prototype.login = function(un, pw) {
	this.username = un;
	this.password = pw;
}

User.prototype.newaccount = function(un, pw) {
	for each (user )
}