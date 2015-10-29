var user1 = new User();
	user1.newaccount("user1", "password");
var user2 = new User();
	user2.newaccount("user2", "password");

var album1 = new Album();
	album1.newalbum("myAlbum");
var album2 = new Album();
	album2.newalbum("secondAlbum");

var photo1 = new Photo();
	photo1.newPhoto("http://placehold.it/350x150");
var photo2 = new Photo();
	photo2.newPhoto("http://placehold.it/200x250");
	
user1.albums.push(album1);
user1.albums.push(album2);
album1.photos.push(photo1);
album1.photos.push(photo2);	
photo1.setPhotoTitle("Test Title for photo1");
photo1.setPhotoCaption("Test Caption for photo1");
photo2.setPhotoTitle("Test Title for photo2");
photo2.setPhotoCaption("Test Camption for photo2");
photo1.setPhotoName("Photo1");
photo2.setPhotoName("Photo2");
user1.photos.push(photo1);
user1.photos.push(photo2);