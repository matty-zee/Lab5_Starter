// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

const volSlider = document.getElementById("volume");
const sound = document.getElementById('horn-select');
const soundButton = document.getElementsByTagName('button')[0];
const hornSound = document.getElementsByTagName('audio')[0];
const hornVolume = volSlider.value / 100;

soundButton.addEventListener('click', handleButtonClick);
volSlider.addEventListener('input', handleVolChange);
sound.addEventListener('change', handleSoundChange);

  function handleSoundChange(Event){
    const soundPic = document.querySelector('img');
    const soundType = Event.target.value;

    console.log(soundType);
    if(soundType == "air-horn"){
      soundPic.src = "assets/images/air-horn.svg";
      hornSound.src = "assets/audio/air-horn.mp3";
    }else if(soundType == "car-horn"){
      soundPic.src = "assets/images/car-horn.svg";
      hornSound.src = "assets/audio/car-horn.mp3";
    }else if(soundType == "party-horn"){
      soundPic.src = "assets/images/party-horn.svg";
      hornSound.src = "assets/audio/party-horn.mp3";
    }

    console.log(hornSound.src);
  }

   function handleButtonClick(Event){
    console.log("click")
    hornSound.volume = hornVolume;
    hornSound.play();
  }

  function handleVolChange(Event){
    const volume = Event.target.valueAsNumber;
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






