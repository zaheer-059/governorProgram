type album = {            //creating structur for object album where the last key is optional
    albumName: string,
    albumTitle: string,
    track?:number;
}

function makeAlbum(name:string,title:string,trackNumber?:number):album{       //assigning type of function as album
    const myAlbum:album={
        albumName: name,
        albumTitle: title,
    }
    if (trackNumber !== undefined){
        myAlbum.track=trackNumber;
    }
    return myAlbum
}

let myAlbum1 = makeAlbum("myalbum1","title1")
let myAlbum2 =makeAlbum("myalbum2","title2",3)

console.log(myAlbum1);
console.log(myAlbum2);
