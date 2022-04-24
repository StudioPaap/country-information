import axios from "axios";


/*     ---------------- Stappenplan!!!------------------------------------------------
0.1 Een formulier opmaken in HTML
0.2 Een event-listener aan het formulier toevoegen die de ingevoerde data opslaat onder een variabele
0.3 die variabele vervangt het adres van de endpoint
0.4 zodra de gegevens van dat land opgevraagd worden, word de lijst gemapt op deze keys
0.5 de tekst wordt geprint via innerhtml en alle lege velden vervangen met de data uit de keys.

1. Nieuwe variabele waarin we de endpoint opslaan aanmaken
2. We hebben .name nodig van elke country, zodat we bij het object van elk land kunnen komen.
3. We moeten een kleine zoekfunctie maken met een invulveld en een submit knop.
4. De submit eventListener moet de gegevens doorgeven en opslaan onder de {naam} en deze vervangen.
5. Via de inner html kunnen we de gegevens die we uit het object willen op de pagina weergeven
6. Ik maak een class op die er voor zorgt dat de informatie netjes wordt weergevem
7. een andere functie checkt of er wel een echt land is ingevoerd, als deze niet overeenkomt met de lijst, bericht sturen
8. We moeten een truthy maken waarbij de gegevens worden gecehkt op dubbele data, ander samen worden weergegeven anders 1 enkele.



document.getElementById("searchknop").addEventListener("click", function() {
    NaamLand = {
     givenLand: document.getElementByID('country-zoek').value,
    };
});

 */


//Hier maak ik de gehele funtie






// functie die op dit evenement wordt uitgevoerd
        function sendData(event){
            event.preventDefault();
            let landNaam = document.getElementById('country-zoek').value
            const NaamLand  =`${landNaam}`;
            console.log(NaamLand);
            return NaamLand;

        }

// Referentie opslaan
        const landForm= document.getElementById("zoekenCountry");


//Eventlistener op element
        landForm.addEventListener("submit", sendData);




async function searchCountry() {
    try {
//  !!!!!!!!!!!!!!!!!!!!!!!! Hier staat dus de variabele opnieuw gedeclareerd, maar hier wil ik degene uit het formulier met de eventleistener
        let NaamLand = "Peru";


        //Hier wordt de endpoint ingesteld
    const response2 = await axios.get('https://restcountries.com/v2/name/' + NaamLand);


    //Hier wordt een proef gedaan om de juiste data array op te halen.
    const countryInfo= response2.data;

    //Hier wordt de informatie geprint in de LI
    const countrySearchResultDisplay = document.getElementById('CountrySearchResult');
    countrySearchResultDisplay.innerHTML =  countryInfo.map((infoZoekLand) => {

        return `
  <li>
       <img src="${infoZoekLand.flag}">
       <span class="${infoZoekLand.region}"> ${infoZoekLand.name}</span>
       <p> ${infoZoekLand.name} is situated in ${infoZoekLand.region}. It has a population of ${infoZoekLand.population}</p>
       <p> The capitol is ${infoZoekLand.capital} and they speak mostly ${infoZoekLand.languages[0].name} </p>
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


searchCountry();
