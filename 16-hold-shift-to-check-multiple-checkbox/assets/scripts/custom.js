const allCheckbox = document.querySelectorAll(
  '.checkbox .form-control input[type="checkbox"]'
);

// console.log(allCheckbox)

//variable for remember last checkbox was clicked
let lastCheckbox;

function checkFn(e) {
  // console.log(e)
  let betweenCheckbox = false;

  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    allCheckbox.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastCheckbox) {
        //checking both side top and bottom
        betweenCheckbox = !betweenCheckbox;
        console.log("star and last point");
      }
      if (betweenCheckbox) {
        checkbox.checked = true;
      }
    });
  }

  lastCheckbox = this;
}

allCheckbox.forEach((checkbox) => checkbox.addEventListener("click", checkFn));
