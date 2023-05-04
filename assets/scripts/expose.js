// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const volSlider = document.getElementById("volume");
  volSlider.addEventListener('change', handleVolChange)

  function handleVolChange(Event){
    const volume = Event.target.valueAsNumber;
    let volPic = document.querySelectorAll('#volume-controls > img')[0];

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


