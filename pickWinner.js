const entries = 
["cosmicnug",
"purplegirl80",
"_ms_mel",
"laena_8",
"armaclintravels",
"livi508",
"armaclintravels",
"nerdy_brit",
"sunnysunshine720",
"ms_menyon",
"michealemorgan",
"sunnysunshine720",
"cosmicnug",
"derrikadenise",
"nerdy_brit",
"armaclintravels",
"quittac",
"thewhitleybunch",
"jossyology",
"livi508",
"cece2005",
"laena_8",
"_ms_mel",
"courtneeyssprivv",
"livalittlelal",
"purplegirl80",
"mrs_melb",
"armaclintravels",
"nerdy_brit"];
const entriesLength = entries.length;
let transitionInterval; // meaningful rename

let index = 0;

const getRandomInt = arrayLength =>  Math.floor(Math.random() * arrayLength); // shortened fat arrow

const showNames = () => {    
    if (index < entriesLength){
        document.querySelector("#winnerDiv").innerHTML = entries[index]; // document.querySelector()
        index++;
    }
    else
    {   
        clearInterval(transitionInterval);
        showWinner();
    }    
}

const pickWinner = () => { // formatting
    transitionInterval = setInterval(showNames, 200);
    document.querySelector("#button").style.display = "none"; // document.querySelector()
    
}

const showWinner = () => {
    const winner = entries[getRandomInt(entriesLength)];
    document.querySelector("#winnerDiv").innerHTML = `Congrats, @${winner}!!`; // document.querySelector()
    document.querySelector("#congratsDiv").innerHTML = `Congrats, @${winner}!!`; // document.querySelector()
}

