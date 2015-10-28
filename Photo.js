var photos = [];

function Photo() {
	this.photoID = Photo.counter++;
	// different from title this.photoname;
	this.photopath;
	this.phototitle;
	this.photocaption;
	this.photoUploadDate;
	this.photoTakenDate;
	this.metatags = [];
	this.albums = [];	
}

Photo.counter = 0;

Photo.prototype.newPhoto = function(filepath) {
	this.photopath = filepath;
	var slashpos = filepath.lastIndexOf("/");
	var dotpos = filepath.lastIndexOf(".");
	this.photoname = filepath.substring(slashpos, dotpos);
	this.photoUploadDate = new Date(Date.now());
	
	photos.push(this);
}

Photo.prototype.setPhotoTitle = function(t) {
	this.phototitle = t;
}

Photo.prototype.setPhotoCaption = function(c) {
	this.photocaption = c;
}

Photo.prototype.setPhotoTakenDate = function(d) {
	this.photoTakenDate = new Date(d);
}

