/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtn = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//==========================================================================
//fn
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}


function updateBtn(){
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}


function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(this.dataset.skip)
}


function handleRange(){
  // console.log(this.name)
  // console.log(this.value)
  video[this.name] = this.value;
}

function progressUpdate(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//==========================================================================
//event listening
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("timeupdate", progressUpdate);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);


skipBtn.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRange));


let mousedown = false;

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousemove', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

























