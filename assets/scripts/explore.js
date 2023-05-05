// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("select");
  const button = document.getElementsByTagName("button")[0];
  const inputTxt = document.getElementById("text-to-speak");
  const facePic = document.getElementsByTagName("img")[0];

  let voices = [];
  let utterThis;
  let synth = window.speechSynthesis;

  setInterval(function() {
    if(synth.speaking){
      facePic.src = "assets/images/smiling-open.png";
    }else{
      facePic.src = "assets/images/smiling.png";
    }
  }, 100);



  button.addEventListener("click", handleButtonClick)
  voiceSelect.addEventListener("input", handleVoiceSelect);
  inputTxt.addEventListener("input", handleTxtInput);

  synth.onvoiceschanged= function(){
    voices = synth.getVoices();
    populateVoiceList();
  }



  function handleVoiceSelect(Event){
    const voiceType = Event.target.value; 
    

    for(let i=0; i < voices.length; i++){
      if(voices[i].name == voiceType){
        utterThis.voice = voices[i];
      }
    }

  }

  function handleTxtInput(Event){
    const spokenText = Event.target.value;
    utterThis = new SpeechSynthesisUtterance(spokenText);
  }

  function handleButtonClick(Event) {
    synth.speak(utterThis);
  }

  function populateVoiceList() {
    for(let i=0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = voices[i].name;
  
      if(voices[i].default){
      option.textContent += " - Default"
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
    
  }

  
}