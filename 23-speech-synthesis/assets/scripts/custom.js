console.log("text to speech");

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector("#speak");
const stopBtn = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

//this function will get all voices options
function allVoices() {
  voices = this.getVoices();
  // console.log(voices)
  voiceDropdown.innerHTML = voices
    .filter(
      (voice) => voice.lang.includes("en") || voice.lang.includes("hi-IN")
    )
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function setVoice() {
  // console.log('changin')
  // console.log(this.value)
  msg.voice = voices.find((voice) => voice.name === this.value);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  // speechSynthesis.speak(msg);

  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  // console.log(this.name, this.value)
  msg[this.name] = this.value;
  toggle();
}

//speechSynthesis is global variable
speechSynthesis.addEventListener("voiceschanged", allVoices);

//all inputs
voiceDropdown.addEventListener("change", setVoice);

options.forEach((option) => option.addEventListener("change", setOption));

//speakBtn
speakBtn.addEventListener("click", toggle);
//stop button
stopBtn.addEventListener("click", () => toggle(false));
