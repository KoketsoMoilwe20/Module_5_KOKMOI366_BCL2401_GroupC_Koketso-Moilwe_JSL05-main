// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Logan", artist: "Emtee", genre: "Pop" },
    { title: "Rollup", artist: "Hustler", genre: "Pop" },
    { title: "Wave", artist: "Emtee", genre: "Rock" },
    { title: "Re_Up", artist: "Emtee", genre: "R&B" },
    { title: "Johustleburg", artist: "Emtee", genre: "R&B" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"R&B",
    "Rocket":"Pop",
    "Groot":"Rock"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here


    //grab div element in index.html

const divPlaylist = document.getElementById('playlists');

//get an array of the guardian names
let guadins_list = Object.keys(guardians);


let guardians_playlist = guadins_list.map(item => {
    
    //store playlist array for each guadian
    let playlist = songs.map(song => {

   

        if(song.genre == guardians[item]){

            let title = song.title;
            let artist = song.artist;

            return[`${title} `,` by ${artist}`]
        }
     
        return
    })
   

     // filter out the "undefined"
    let playlist_filtered = playlist.filter(item => item !== undefined)


    //store array containing guardian name and the filtered playlist array
    return [item,playlist_filtered]
})

console.log(guardians_playlist)
  //loop through the guardian_playlist array to display the playlists to the DOM
  for(let i = 0;i < guardians_playlist.length;i++){

       let divplay = document.createElement('div');
       divplay.classList.add('playlist');
       
       let name = document.createElement('h2');
       //name of guadian 
       name.innerText = guardians_playlist[i][0];
       divplay.appendChild(name);


       //loop through the playlist_filtered array to display song title and artist to the DOM
       for(let j = 0;j < guardians_playlist[i][1].length;j++ ){

        let p_playlist = document.createElement('p');
        let span = document.createElement('span');
        span.classList.add('song-title');
        span.innerText = guardians_playlist[i][1][j][0];

        p_playlist.appendChild(span);
        p_playlist.innerHTML += guardians_playlist[i][1][j][1];

        divplay.appendChild(p_playlist);

        divPlaylist.appendChild(divplay);

       }

       



  }


}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


