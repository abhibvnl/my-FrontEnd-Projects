const musicContainer=document.querySelector(".container")

let audios=["on My Way","hindi Song","Rocka bay","Sachiyan"]
let images=["image1","image2","image3","image4"]
var audio=document.querySelector("audio")
var image=document.querySelector("img")
const songTittle=document.querySelector(".songTittle")
const nextSong=document.querySelector(".nextBtn")
const prevSong=document.querySelector(".prevBtn")
const playPauseSong=document.querySelector(".playBtn")
const progress=document.querySelector(".progress")


let loadSongs=songIndex=>{
    audio.src=`${audios[songIndex]}.mp3`;
    image.src=`${images[songIndex]}.png`;
    songTittle.innerHTML=`${audios[songIndex]}`
  
    audio.play();
}
var songIndex=0;

//next song
let forward=()=>{

    songIndex++;
    if(songIndex==audios.length)
    songIndex=0;
    loadSongs(songIndex)
    playSong();
}
//play  song
let playSong=()=>{
    progress.style.animationDuration=`${audio.duration}s`
    musicContainer.classList.add('play')
    document.querySelector(".fa-play").setAttribute("class","fas fa-pause")
    audio.play();
    image.style.animationPlayState="running"
    progress.style.animationPlayState="running"

}

//pause song
let pauseSong=()=>{
    
    musicContainer.classList.remove('play')
    document.querySelector(".fa-pause").setAttribute("class","fas fa-play")
    audio.pause();
    image.style.animationPlayState="paused"
    progress.style.animationPlayState="paused"


}

//previous song
let backward=()=>{
    if(songIndex==0)
    songIndex=audios.length
    songIndex--;
    loadSongs(songIndex)
    playSong(); 
   
}
//even listners
nextSong.addEventListener('click',forward)
playPauseSong.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play'); 

    if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
})
prevSong.addEventListener('click',backward)



