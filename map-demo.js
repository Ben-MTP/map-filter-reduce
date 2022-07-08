const songs = [
  {id: 1, name: "Curl of the Burl", artist: "Mastodon"},
  {id: 2, name: "This method accepts two parameters as mentioned above and described below", artist: "each element"},
  {id: 3, name: "Curl of the Burl 1", artist: "current element"},
  {id: 4, name: "Curl of the Burl 2", artist: "passed to the function."},
  {id: 5, name: "Curl of the Burl 3", artist: "result of callback function"}
];

/**
 * Chuyển đổi đơn giản giữa mảng các Object sang mảng các Strings:
 */
var allSongNames = songs.map(function(song){
  return "name: " + song.name + " - artist: " + song.artist
});

const allSongNames1 = songs.map(song => {
  return song.name;
});

console.log(allSongNames);
console.log(allSongNames1);


const lowerCaseSongs = songs.map(mySongFunc);

var mySongFunc = function(song){
  return song.name.toLowerCase();
};

const mySongFunc1 = song => {
  return song.name.toLowerCase();
};

console.log(lowerCaseSongs);