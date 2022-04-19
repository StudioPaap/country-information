import axios from "axios";


/* hier declareer ik de functie*/
async function fetchCountries() {

    try {


/* Hier wordt de lijst weergeven vanuit de API en heet nu Response ----*/

        const response = await axios.get('https://restcountries.com/v2/all');

/* ----------Toevoegen van Land vlag!----------*/
        // let flagland = response.data[1].flag;
        // console.log(flagland);
        // const landObject = document.getElementById('vlagAfbeelding');
        // const countryFlag = document.createElement("img");
        // countryFlag.innerHTML =
        //     `<img src="${response.data[0].flag}">`
        // landObject.appendChild(countryFlag);
        // console.log(response.data[1].flag);


/*----------Toevoegen van eerste tekst ---- */




        //Hier zorg ik er voor dat de element country list wordt aangesproken
        const countriesList = document.getElementById('countryList');
        // Hier creeer ik een li
        const countryDetail = document.createElement("li");
        countryDetail.innerHTML =
            `<li> Land : ${response.data[1].name}</li>`
        ;
        // En voeg ik deze aan de parent toe.
        countriesList.appendChild(countryDetail);

/* ----------Hier voeg ik de tweede tekst toe---------*/
        const countryDetail2 = document.createElement("li");
        countryDetail2.innerHTML =
            `<li> Has a population of ${response.data[0].population} people </li>`
        ;
        countriesList.appendChild(countryDetail2);
/* -------- Dis is de standaard error tekst -------*/
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



/*
1.Hoe krijg ik per land een nette array met daarin landnaam en populatie en links in de hoek een vlag?
   A. Leer eerst een land array te maken van verschillende objecten en die dit verzamelt.
   B. Daarna maken we er een functie(map) van die dit doet met alle elementen uit de lijst.
   C. Daarna zorgen we er voor dat deze lijst netjes wordt opgeslagen en per onderdeel een nieuw item/class wordt toegevoegd in de id.
   D.
   */
/* een nieuwe lijst maken die de landen mapt van populatie laag naar groot */
async function OrderArrayPopulation(){
    try {
        const response = await axios.get('https://restcountries.com/v2/all');

        const ArrayPop = response.data.map((pop) => {
            return pop.population;
        })


       ArrayPop.sort((a, b) => {
            if (a > b) {
                return 1;
            }

            if (a <  b) {
                return -1;
            }

            return 0;
        })


    }



    catch (e) {
        console.log(e);
        console.log(e.response);
        if (e.response.status === 500) {
            errorMessage.textContent = "Er ging iets mis in de server";

        }
    }

}

/* ------------------ Hier schrijf ik de stappen op om alle functies samen te voegen in een
1. Ik heb de functie klaarstaan die de geordende lijst ook geeft;----
 2.Ik de */



//Hier roep ik de functie op die de array heeft geordend.
OrderArrayPopulation();


//Hier maak ik een functie die de regio opvraagr
async function getRegion() {

    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response);
        let regionLand = response.data[3].region;
        console.log(regionLand);


        if(regionLand === "Europe"){
            console.log("ik ben europees");
        }

  const Array = response.data.map((Regions) =>{
      return Regions.region
  })

        console.log(Array);


    }
    catch (e) {
        console.log(e);
        console.log(e.response);
        if (e.response.status === 500) {
            errorMessage.textContent = "Er ging iets mis in de server";

        }
    }
}


    getRegion();
/*
2. hoe zorg ik er voor dat alle informatie netjes is uitgelijnd in een kader en daarna weer in de lijst op de hompage
   A. Oefen met een kaders en nep info om de juiste afmetingen te bepalen om als class op te maken.
   B. Omschrijf deze class heel duidelijk zodat deze daarna in de java opgezocht kan worden.
   C. Zorg dat in java de juiste informatie kan worden toegevoegd.

3. Hoe zorg ik er voor dat alle informatie netjes wordt gevuld en dat elk elemement wordt voorzien van dit kader?
5. hoe zorg ik er voor dat alle informatie netjes wordt gedestructureerd?

 */
