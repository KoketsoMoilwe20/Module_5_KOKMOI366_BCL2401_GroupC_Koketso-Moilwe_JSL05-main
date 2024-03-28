// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "No more parties", artist: "Coi Leray", genre: "Hip-Hop" },
    { title: "To Zion", artist: "Ms. Lauryn Hill", genre: "Soulful" },
    { title: "Egwu", artist: "Chike", genre: "Afrobeats" },
    { title: "My love is your love", artist: "Whitney Houston", genre: "Soulful" },
    { title: "Sparky", artist: "Cruel Santino", genre: "Afrobeats" },
    { title: "FEAR.", artist: "Kendrick Lamar", genre: "Hip-Hop" },
    { title: "Deja Vu", artist: "J. Cole", genre: "Hip-Hop" },
    { title: "Stand By Me", artist: "Ben E. King", genre: "Soulful" },
    { title: "Free Mind", artist: "Tems", genre: "Afrobeats" },
    { title: "Heartless", artist: "Kanye West", genre: "Hip-Hop" },
    { title: "Rose in the Dark", artist: "Cleo Sol", genre: "Soulful" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Soulful",
    "Rocket" : "Hip Hop",
    "Groot" : "Afrobeats"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = Object.entries(guardians).map(([guardianName, genre]) => {
      const guardianPlaylist = songs.filter((song) => song.genre === genre);
      return { guardianName, songs: guardianPlaylist };
    });
    return playlists;
  }
    // Use the map() function to create playlists for each Guardian
    // Your code here
    

// Call generatePlaylist and display the playlists for each Guardian


//function to display playlists on the webpage
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach((playlist) => {
      const playlistElement = document.createElement("section");
      playlistElement.classList.add("playlist");
  
      const title = document.createElement("h2");
      title.textContent = `${playlist.guardianName}'s Playlist`;
      playlistElement.appendChild(title);
  
      songs.forEach(song => {
  
          const songElement =  document.createElement('div');
          songElement.classList.add('song');
  
          const songTitle = document.createElement('span');
          songTitle.classList.add('song-title');
          songTitle.textContent = song.title;
          songElement.appendChild(songTitle);
  
          const songArtist = document.createElement('span');
          songArtist.textContent = ` by ${song.artist}`;
          songElement.appendChild(songArtist);
  
          playlistElement.appendChild(songElement);
      });
     
      playlistsContainer.appendChild(playlistElement);
    });
  }; 
  
  // Generate playlists and display them
  const generatedPlaylists = generatePlaylist(guardians, songs);
  displayPlaylists(generatedPlaylists);


