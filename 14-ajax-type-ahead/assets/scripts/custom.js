const jsonData = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";


const cities = [];


fetch(jsonData).then(ab => ab.json()).then(data => cities.push(...data))

console.log(cities)

function findMatch(wordMatch, cities){
    return cities.filter(place => {
        //we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordMatch, 'gi');
        //above variable code is for using variable in regex
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayResult(){
    const matchArray = findMatch(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
        <li>
        <span class="name">Rank : ${place.rank}</span>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('')
    suggestion.innerHTML = html;
}



const searchInput = document.querySelector('.search')
const suggestion = document.querySelector('.suggestion')

searchInput.addEventListener('change', displayResult)
searchInput.addEventListener('keyup', displayResult)