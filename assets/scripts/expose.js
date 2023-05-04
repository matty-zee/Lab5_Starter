// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const volPic = document.getElementById("volume-controls").getElementsByTagName("img");
  const volSlider = document.getElementById("volume");
  volSlider.onchange = () => {
 
    if(volSlider.value == 0){
      volPic.src = "assets/icons/volume-level-0.svg";
    }else if(volSlider.value < 33){
      volPic.src = "assets/icons/volume-level-1.svg";
    }else if(volSlider.value < 67){
      volPic.src = "assets/icons/volume-level-2.svg";
    }else{
      volPic.src = "assets/icons/volume-level-3.svg";
    }

    console.log(volPic.src)
  }

}


