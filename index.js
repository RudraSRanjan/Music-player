const songs=[
    {
        id:1,
        name:"Shape Of You",
        artist:"Ed Sheeran",
        img:"data:image/jpeg;base64,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",
        genre:"Rock",
        audio:""
        
    },

    {
        id:2,
        name:"All of Me",
        artist:"Adele",
        img:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
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
        img:'Music-player/locked.jpg',
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

const cardDiv= document.getElementById("card-container");





let CardBtn;

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
    
    CardBtn= document.createElement("button");
    CardBtn.classList.add("songs-btn");
    CardBtn.textContent=`${song.name}-${song.artist}`;
    songContainer.appendChild(CardBtn);
    CardBtn.addEventListener('click',()=>
{
    cardDiv.innerHTML="";
    const division= document.createElement("div");
    division.classList.add("card-elements");

    const image= document.createElement("img");
    image.classList.add("img-ele");
    image.src=song.img;

    const songName= document.createElement("h3");
    songName.classList.add("name-ele");
    songName.textContent=song.name;

    const artistName= document.createElement("h3");
    artistName.classList.add("artist-ele");
    artistName.textContent=song.artist;

    cardDiv.appendChild(division);
    cardDiv.appendChild(image);
    cardDiv.appendChild(songName);
    cardDiv.appendChild(artistName); 



   



});

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
