const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const Elementochute = document.getElementById('chute')

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start()

recognition.addEventListener("result", onSpeak)
recognition.addEventListener('end', () => recognition.start() )
function onSpeak(e){
   chute = (e.results[0][0].transcript)
   exibeChute(chute)
   verificaValorChuteFalso(chute)
}

function exibeChute(chute){
  Elementochute.innerHTML = `
  <div> Você disse:</div>
  <span class="box">${chute}</span>
  `
}