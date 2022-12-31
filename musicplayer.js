const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev =document. getElementById("prev");
const next = document.getElementById("next");
let isPlaying = false;


const songs = [{name:"song", title:"song", artist:"rahul" }, {name:"songfav" ,title:"songfav", artist:"1st"},
 { name:"starload" ,title:"starload", artist:"2nd" }]

 //for play function
const  playMusic = ()=>{
    music.play();
    isPlaying = true;
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
//for pause ke liye
const pauseMusic = ()=>{
    music.pause();
    isPlaying = false;
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click", () =>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic();
})

//chainging the music data
const loadSong = (songs) =>{
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src =songs.name +".mp3";
img.src = "images/" + songs.name +".jpg";

};
songsIndex = 0;
// loadSong(songs [0]);
const nextSong = ()=>{
    songsIndex =(songsIndex + 1 ) % songs.length
    loadSong(songs [songsIndex]);
    playMusic();            
};
const prevSong = ()=>{
    songsIndex =(songsIndex - 1 + songs.length) % songs.length;
    loadSong(songs [songsIndex]);
    playMusic();            
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);