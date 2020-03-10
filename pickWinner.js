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
let test;

let index = 0;

const getRandomInt = arrayLength => {
    return Math.floor(Math.random() * arrayLength)
};
const showNames = () => {
    
    if (index < entriesLength){
        document.getElementById("winnerDiv").innerHTML = entries[index];
        index++;
    }
    else
    {   
        clearInterval(test);
        showWinner();
    }
    
}

const pickWinner = ()=> {
    test = setInterval(showNames, 200);
    document.getElementById("button").style.display = "none";
    
}

const showWinner = () => {
    const winner = entries[getRandomInt(entriesLength)];
    document.getElementById("winnerDiv").innerHTML = `Congrats, @${winner}!!`;
    document.getElementById("congratsDiv").innerHTML = `Congrats, @${winner}!!`;
}

