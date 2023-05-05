// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("select");
  window.addEventListener('DOMContentLoaded', init);
  let voices = [];
  window.speechSynthesis.onvoiceschanged= function(){
    voices = window.speechSynthesis.getVoices();
    populateVoiceList();
  }

  function populateVoiceList() {
    for(let i=0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = voices[i].name + voices[i].lang;
  
      if(voices[i].default){
      option.textContent += " - Default"
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
      console.log(i);
    }
    
  }

  
}