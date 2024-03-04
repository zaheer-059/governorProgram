function makeAlbum(name, title, trackNumber) {
    var myAlbum = {
        albumName: name,
        albumTitle: title,
    };
    if (trackNumber !== undefined) {
        myAlbum.track = trackNumber;
    }
    return myAlbum;
}
var myAlbum1 = makeAlbum("myalbum1", "title1");
var myAlbum2 = makeAlbum("myalbum2", "title2", 3);
console.log(myAlbum1);
console.log(myAlbum2);
