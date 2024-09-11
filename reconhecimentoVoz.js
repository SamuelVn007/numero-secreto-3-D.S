const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const Elementochute = document.getElementById("chute")
const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start()

recognition.addEventListener("result", onSpeak)
function onSpeak(e){
   chute = (e.results[0][0].transcript)
   exibeChute(chute)
}

function exibeChute(chute){
  Elementochute.innerHTML = `
  <div> Você disse:</div>
  <span class="box">${chute}</span>
  <div>O número secreto é maior </div>
  `
}