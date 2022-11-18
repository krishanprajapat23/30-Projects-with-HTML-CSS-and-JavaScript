const heroSec = document.querySelector(".hero");
const text = heroSec.querySelector("h1");

const walk = 100; //100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = heroSec;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xMove = Math.round((x / width) * walk - walk / 2);
  const yMove = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
   ${xMove}px ${yMove}px 0 rgba(25,25,112,0.4)
  `;
}

heroSec.addEventListener("mousemove", shadow);
