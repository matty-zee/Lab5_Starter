// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

const volSlider = document.getElementById("volume");
const sound = document.getElementById('horn-select');
const soundButton = document.getElementsByTagName('button')[0];
var hornSound = document.getElementsByTagName('audio')[0];
let hornVolume = 0.5;
const yippee = new JSConfetti();
var party = false; 

soundButton.addEventListener('click', handleButtonClick);
volSlider.addEventListener('input', handleVolChange);
sound.addEventListener('change', handleSoundChange);

jsConfetti.addConfetti({
  emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
})

jsConfetti.addConfetti({
  confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],
})

  function handleSoundChange(Event){
    const soundPic = document.querySelector('img');
    const soundType = Event.target.value;

    console.log(soundType);
    if(soundType == "air-horn"){
      party = false;
      soundPic.src = "assets/images/air-horn.svg";
      hornSound.src = "assets/audio/air-horn.mp3";
    }else if(soundType == "car-horn"){
      party = false;
      soundPic.src = "assets/images/car-horn.svg";
      hornSound.src = "assets/audio/car-horn.mp3";
    }else if(soundType == "party-horn"){
      soundPic.src = "assets/images/party-horn.svg";
      hornSound.src = "assets/audio/party-horn.mp3";
      party = true;
    }

    //console.log(hornSound.src);
  }

   function handleButtonClick(Event){
    //console.log("click")
    hornSound.volume = hornVolume;
    hornSound.play();
    if(party){
      yippee.addConfetti();
    }

     //console.log(hornVolume);
  }

  function handleVolChange(Event){
    const volume = Event.target.valueAsNumber;
    hornVolume = volume / 100;
    let volPic = document.querySelector('#volume-controls > img');

    if(volSlider.value == 0){
      volPic.src = "assets/icons/volume-level-0.svg";
    }else if(volSlider.value < 33){
      volPic.src = "assets/icons/volume-level-1.svg";
    }else if(volSlider.value < 67){
      volPic.src = "assets/icons/volume-level-2.svg";
    }else{
      volPic.src = "assets/icons/volume-level-3.svg";
    }
  }
  

}






