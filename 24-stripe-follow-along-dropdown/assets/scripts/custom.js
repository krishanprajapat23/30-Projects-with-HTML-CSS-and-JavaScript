const trigger = document.querySelectorAll(".list > li");
const bg = document.querySelector(".dropdown-bg");
const nav = document.querySelector(".navbar");

function handleEnter() {
  this.classList.add("trigger-enter");
  //arrow fn inherit this from parents
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  bg.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  // console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  bg.style.setProperty("width", `${coords.width}px`);
  bg.style.setProperty("height", `${coords.height}px`);
  bg.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  bg.classList.remove('open');

}

trigger.forEach((trig) => trig.addEventListener("mouseenter", handleEnter));
trigger.forEach((trig) => trig.addEventListener("mouseleave", handleLeave));
