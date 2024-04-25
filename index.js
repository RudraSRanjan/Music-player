const songs=[
    {
        id:1,
        name:"Shape Of You",
        artist:"Ed Sheeran",
        img:"Music-player/Shape.jpeg",
        genre:"Rock",
        src:""
        
    },

    {
        id:2,
        name:"All of Me",
        artist:"Adele",
        img:"Music-player/all of me.jpeg",
        genre:"Rock",
        src:""
        
    },

    {
        id:3,
        name:"Sugar",
        artist:"Maroon 5",
        img:"Music-player/sugar.jpeg",
        genre:"Pop",
        src:""
    },

    {
        id:4,
        name:"Yummy",
        artist:"Justin Bieber",
        img:"Music-player/yummy.jpeg",
        genre:"Hip-Hop",
        src:""
        
    },

    {
        id:5,
        name:"Locked Away",
        artist:"R. City",
        img:"Music-player/locked.jpg",
        genre:"Pop",
        src:""
        
    }
]

//Box-1
const allSongs= document.getElementsByClassName("all");
const rockSongs= document.getElementsByClassName("rock");
const popSongs= document.getElementsByClassName("pop");
const hiphop= document.getElementsByClassName("hip-hop");
const songContainer= document.getElementById("song-container");


//Box-3
const playlistName= document.getElementById("playlist-name");
const playlistBtn= document.getElementById("create-playlist");
const current= document.getElementById("current-playlist");
const allPlaylist= document.getElementById("all-playlists");





function rockFunction(e)
{   songContainer.innerHTML="";
    
    const filtered= songs.filter((song)=>
{   
    if(e.target.value=="All")
    {
        return true;
    }
    return song.genre==e.target.value;
});
   filtered.forEach((song)=>
{
    
    const btn= document.createElement("button");
    btn.classList.add("songs-btn");
    btn.textContent=`${song.name}-${song.artist}`;
    songContainer.appendChild(btn);
});
    
   
}
songs.forEach((song)=>
{
    
    const btn= document.createElement("button");
    btn.classList.add("songs-btn");
    btn.textContent=`${song.name}-${song.artist}`;
    songContainer.appendChild(btn);
});


//Playlist Creation 
playlistBtn.addEventListener("click",()=>
{
    const btn= document.createElement("button");
    btn.classList.add("songs-btn");
    btn.textContent=playlistName.value;
    playlistName.value="";
    allPlaylist.appendChild(btn);
});
