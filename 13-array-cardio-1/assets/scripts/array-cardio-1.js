const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//filter() method == creates a shallow copy of a portion of a given array
//1. filter first of inventors for those who were born in the 1500's

// const fifteen = inventors.filter(function (inventor) {
//   if (inventor.year >= 1500 && inventor.year < 1600) {
//     return true; //means we are keeping the outcome
//   }
// });

//or shorter way with arrow function
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.log("1. people born in the 1500's (filter)");
console.table(fifteen);

//==================================================================================

//map() function == creates a new array
//2. give an array of the inventor first and last names
const nameArray = inventors.map((x) => `"${x.first} ${x.last}"`);

console.log("2. first and last names (map) ", nameArray);

//==================================================================================
//sort() function == sorts the elements of an array in place and returns the reference to the same array

//3. sort the inventors by birthdate, oldest to youngest

// const birthDateOrder = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//with arrow fn and ternary
const birthDateOrder = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log("sort by birthdate==> ");
console.table(birthDateOrder);

//==================================================================================

//reduce() function = return the sum of all the elements in an array

//4. how many years did all the inventors live

const allYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(allYears + " Total Years of Inventors Lived");

//==================================================================================

//5. sort the inventors by years lived

const oldestSort = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;

  return lastGuy > nextGuy ? -1 : 1;
});
console.log("5. sort the inventors by years lived ==>");
console.table(oldestSort);

//==================================================================================

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const list = document.querySelector(".mw-category");
// const allLink = Array.from(list.querySelectorAll("a")); //change a nodelist to an array

// const lsDe = allLink
//   .map((a) => a.textContent)
//   .filter((street) => street.includes("de"));

// console.table(lsDe);

//==================================================================================

//7. sort the people alphabetically by last name
const alpha = people.sort((last, next) => {
  const [aLast, aFirst] = last.split(", ");
  const [bLast, bFirst] = next.split(", ");
  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

//==================================================================================

//8. reduce === sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "bike",
  "scooter",
  "bike",
  "van",
  "van",
  "truck",
  "bmw",
  "ferrari",
  "bmw",
  "test",
];

const filterData = data.reduce((obj, item) => {
  // console.log(item);
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(filterData);
