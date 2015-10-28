var albums = [];

function Album() {
	this.albumID = Album.counter++;
	this.albumname;
	this.dispspeed = 1;
	this.photos = [];
	this.createDate;
	this.albumdescription;
	this.publicflag;
}

Album.counter = 0;

Album.prototype.newalbum = function(aname) {
	this.albumname = aname;
	this.createDate = new Date(Date.now());
	
	albums.push(this);
}



