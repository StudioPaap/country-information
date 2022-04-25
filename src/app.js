import axios from "axios";


/* hier declareer ik de functie*/
async function fetchCountries() {

    try {


/* Hier wordt de lijst weergeven vanuit de API en heet nu Response, daarna noem ik het countries ----*/

        const response = await axios.get('https://restcountries.com/v2/all');
        const countries = response.data;

        // Hier sorteer ik de lijst
        countries.sort((a, b) => {
            return a.population - b.population;
        });

        // Hier worden elementen in de HTML aangemaakt
        const countriesList = document.getElementById('countryList');


// hier worden li items toegeovegd. Ik heb geen aparte functie gemaakt die checkt welke region het is, dit kon je ook uit de lijst halen en laten corresponderen met je class.
        countriesList.innerHTML =  countries.map((landen) =>{
    return `

    <li>
      <img src="${landen.flag}">
      <span class="${landen.region}"> ${landen.name}</span>
      <p> Has a population of ${landen.population} people</p>
    </li>
    `;
}).join('');

    }
    catch (e) {
        console.log(e);
        console.log(e.response);
        if (e.response.status === 500) {
            errorMessage.textContent = "Er ging iets mis in de server";

        }
    }
}


// Hier call ik de functie.
fetchCountries();

