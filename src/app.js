import axios from "axios";

async function fetchCountries(){

    try{
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response);
        const countriesList = document.getElementById('countryList');
        const countryDetail = document.createElement("li");
        countryDetail.innerHTML =
            `<li> Land : ${response.data[0].name}</li>`
        ;
        countriesList.appendChild(countryDetail);

        const countryDetail2 = document.createElement("li");
        countryDetail2.innerHTML =
            `<li> Has a population of ${response.data[0].population} people </li>`
        ;
        countriesList.appendChild(countryDetail2);
    }
    catch (e){
        console.log(e);
        console.log(e.response);
        if (e.response.status === 500) {
            errorMessage.textContent = "Er ging iets mis in de server";

        }
    }
}

fetchCountries();


