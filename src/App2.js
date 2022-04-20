import axios from "axios";


/*     ---------------- Stappenplan!!!------------------------------------------------
1. Nieuwe variabele waarin we de endpoint opslaan aanmaken
2. We hebben .name nodig van elke country, zodat we bij het object van elk land kunnen komen.
3. We moeten een kleine zoekfunctie maken met een invulveld en een submit knop.
4. De submit eventListener moet de gegevens doorgeven en opslaan onder de {naam} en deze vervangen.
5. Via de inner html kunnen we de gegevens die we uit het object willen op de pagina weergeven
6. Ik maak een class op die er voor zorgt dat de informatie netjes wordt weergevem
7. een andere functie checkt of er wel een echt land is ingevoerd, als deze niet overeenkomt met de lijst, bericht sturen
8. We moeten een truthy maken waarbij de gegevens worden gecehkt op dubbele data, ander samen worden weergegeven anders 1 enkele.


 */





console.log("werkt alles?")
async function searchCountry() {
try {
    const response2 = await axios.get('https://restcountries.com/v2/name/{name}');

}


catch (e) {
    console.log(e);
    console.log(e.response);
    if (e.response.status === 500) {
        errorMessage.textContent = "Er ging iets mis in de server";

    }
}

}

