var user1 = new User();
	user1.newaccount("user1", "password");
var user2 = new User();
	user2.newaccount("user2", "password");

var album1 = new Album();
	album1.newalbum("myAlbum");
var album2 = new Album();
	album2.newalbum("secondAlbum");

var photo1 = new Photo();
	photo1.newPhoto("http://placekitten.com/200/300");
var photo2 = new Photo();
	photo2.newPhoto("http://placekitten.com/250/350");
	
user1.albums.push(album1);
user1.albums.push(album2);
album1.photos.push(photo1);
album1.photos.push(photo2);	