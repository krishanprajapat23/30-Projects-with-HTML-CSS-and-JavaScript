const allInput = document.querySelectorAll(".controls input");
let a = [];
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  console.log(this.value);
  //   console.log(
  //     document.documentElement.style.setProperty(
  //       `--${this.name}`,
  //       this.value + suffix
  //     )
  //   );
  //   console.log(this.name);
  a.push(this.value + suffix);
  let showValue = a.slice(-1)[0];
  console.log("===============", showValue);
  let changeContent = (document.getElementById("myParagraph").innerText =
    "Value " + showValue);

  if (changeContent) {
    return document;
  }
}

const bg = document.querySelector(".change-bg");
console.log(bg);
function bga() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.body.style.background.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  console.log(this.name);
}

allInput.forEach((input) => input.addEventListener("change", handleUpdate));

allInput.forEach((input) => input.addEventListener("mousemove", handleUpdate));
