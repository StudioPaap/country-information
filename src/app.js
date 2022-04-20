import axios from "axios";


/* hier declareer ik de functie*/
async function fetchCountries() {

    try {


/* Hier wordt de lijst weergeven vanuit de API en heet nu Response ----*/

        const response = await axios.get('https://restcountries.com/v2/all');
        const countries = response.data;

        countries.sort((a, b) => {
            return a.population - b.population;
        });


        const countriesList = document.getElementById('countryList');
        countriesList.innerHTML =  countries.map((landen) =>{
    return `
    <li class="Info-land">
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

