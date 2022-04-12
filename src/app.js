import axios from "axios";

async function fetchCountries(){

    try{
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response);
        const countriesList = document.getElementById('countryList');
        const countryDetail = document.createElement("li");
        countryDetail.innerHTML =
            `<li> Dit zijn de talen : ${response.data[0].languages[1].name}</li>`
        ;
        countriesList.appendChild(countryDetail);
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


