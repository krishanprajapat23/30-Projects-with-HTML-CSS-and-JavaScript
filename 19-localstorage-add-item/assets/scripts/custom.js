const listItem = document.querySelector(".list-item");
const addItems = document.querySelector(".add-item");

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItemFn(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;
  const item = {
    // text: text, //or we can do this by es6 syntax
    text,
    done: false,
  };

  items.push(item);
  populateList(items, listItem);
  //stroring items in local storage
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(allList = [], oneList) {
  oneList.innerHTML = allList
    .map((list, i) => {
      return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        list.done ? "checked" : ""
      }>
      <label for="item${i}">${list.text}</label>
      </li>
    `;
    })
    .join("");
}



function toggleDone(e){
if(!e.target.matches('input')) return; //skip it unless any input met
// console.loog(e.target)

const el = e.target;
const index = el.dataset.index;

items[index].done = !items[index].done;
localStorage.setItem("items", JSON.stringify(items));

populateList(items, listItem)

}




addItems.addEventListener("submit", addItemFn);
listItem.addEventListener('click', toggleDone)

populateList(items, listItem);