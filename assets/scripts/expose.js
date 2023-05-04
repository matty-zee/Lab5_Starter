// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  function handleVolChange(Event){

    const volumeLevel = Event.target.value;
    const volPic = document.getElementById('volume-controls').getElementsByTagName("img").src;

    if(volumeLevel == 0){
      volPic = "volume-level-0.svg";
    }else if(volumeLevel < 33){
      volPic = "volume-level-1.svg";
    }else if(volumeLevel < 67){
      volPic = "volume-level-2.sng";
    }else{
      volPic = "volume-level-3.svg";
    }
  }

}

const volSlider = document.getElementById('volume');
volSlider.addEventListener('change', handleVolChange);