function playSound(e) {
  // console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  } //stop fn from running
  audio.currentTime = 0; //rewind to the start
  audio.play();

  key.classList.add("playing");
  // console.log(key);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not a transform

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// console.log(keys);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
