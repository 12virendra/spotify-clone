console.log("welcome to javascript");
         // Initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar')
let gif= document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {songName:"Makhna", filePath:"1.mp3",coverPath:"spotifycover.png"},
    {songName:"Husn", filePath:"2.mp3",coverPath:"spotifycover2.png"},
    {songName:"Phle Bhi main", filePath:"3.mp3",coverPath:"spotifycover3.png"},
    {songName:"Thoda felling da rakh dhyan ve", filePath:"4.mp3",coverPath:"spotifycover4.png"},
    {songName:"Lalkara", filePath:"5.mp3",coverPath:"spotifycover5.png"},
]


// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;

    }

})

//Listen to Events 
audioElement.addEventListener('timeupdate',()=>{
//   update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress; 

});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar . value * audioElement . duration/100
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`${songIndex+1}.mp3`
         masterSongName.innerText=songs[songIndex].songName;
         audioElement. currentTime = 0;
         audioElement.play();
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle')
         masterPlay.classList.add('fa-pause-circle')
         
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName;
         audioElement. currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName;
         audioElement. currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
})