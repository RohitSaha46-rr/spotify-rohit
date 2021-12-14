let play_main=document.querySelector("#play_main");
let progress=document.getElementById("progress");
let play1=document.querySelectorAll(".play1");
let back=document.getElementById("back");
let forward=document.getElementById("for");
let song_name=document.querySelector(".song_name");
let gif=document.getElementById("gif");
let songs=[
    {
        name:"Tera Hua",
    },
    {
        name:"Tumse Bhi Zyada",
    },
    {
        name:"Mera Yaara",
    },
    {
        name:"Rait Zara Si",
    },
    {
        name:"Tera Hoke Rahoon",
    },
    {
        name:"Phir Mohabbat",
    },

];
let audio=new Audio("1.mp3");
let songindex=0;
let check=true;
play_main.addEventListener('click',()=>{
    if(check){
        audio.play();
play_main.classList.replace("fa-play","fa-pause");
check=false;
    }
    else{
        audio.pause();
        play_main.classList.replace("fa-pause","fa-play");
        check=true;
    }
    if(song_index_continue==1){
    play1[0].classList.replace("fa-play","fa-pause");
    }
});
audio.addEventListener('timeupdate',()=>{
    progress.value=parseInt((audio.currentTime/audio.duration)*100);
    gif.style.opacity=1;
})
progress.addEventListener('change',()=>{
    audio.currentTime=(progress.value*audio.duration)/100;
    
})



const allplay=()=>{
    play1.forEach(element =>{
        element.classList.replace("fa-pause","fa-play");
    });
}
play1.forEach(element => {
    element.addEventListener("click",(e)=>{
        allplay();
        element.classList.replace("fa-play","fa-pause");
        song_index_continue=parseInt(e.target.id);
        audio.src=`${song_index_continue}.mp3`;
        song_name.innerHTML=songs[song_index_continue-1].name;
        audio.play();
        play_main.classList.replace("fa-play","fa-pause");
        check=false;
    });
});

const prevsong=()=>{
    
    if(song_index_continue>1){
        song_index_continue-=1;
    
        audio.src=`${song_index_continue}.mp3`;
        audio.play();
        play1[song_index_continue-1].classList.replace("fa-play","fa-pause");
        play1[song_index_continue].classList.replace("fa-pause","fa-play");
        play_main.classList.replace("fa-play","fa-pause");
       check=false;
       k--;
       song_name.innerHTML=songs[song_index_continue-1].name;

}
}
let song_index_continue=1;
let k=0;
const nextsong=()=>{
    if(song_index_continue<6){
    audio.src=`${song_index_continue+1}.mp3`;
    audio.play();
       play1[song_index_continue-1].classList.replace("fa-pause","fa-play");
       play1[song_index_continue].classList.replace("fa-play","fa-pause");
       play_main.classList.replace("fa-play","fa-pause");
       check=false;
       k++;
       song_name.innerHTML=songs[song_index_continue].name;

      song_index_continue++;
    }
}
back.addEventListener('click',prevsong);
forward.addEventListener('click',nextsong);
audio.addEventListener('ended',nextsong);