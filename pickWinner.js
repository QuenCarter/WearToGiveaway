const entries =
    ["_bethany92",
        "_cece.beauty_",
        "_jlenay_",
        "_lovemel_",
        "_lovemel_",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "_ms_mel",
        "12thandviv",
        "1supalady",
        "1supalady",
        "211_beadwork_",
        "8ninedesign",
        "aaronsladya",
        "armaclintravels",
        "armaclintravels",
        "armaclintravels",
        "armaclintravels",
        "armaclintravels",
        "armaclintravels",
        "barefoot_gypsea",
        "beautifullybre",
        "beautifullybre",
        "being_ladytee",
        "being_ladytee",
        "being_ladytee",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bellissima.meme",
        "bensblue",
        "blauren629",
        "brianna.m.e",
        "browdiva",
        "browdiva",
        "c_est_lydie",
        "cece2005",
        "cece2005",
        "chellychele",
        "cocotina73",
        "dajamama",
        "day1writer",
        "elliemae.reyes",
        "elliemae.reyes",
        "elliemae.reyes",
        "famcallsme_dee",
        "famcallsme_dee",
        "hey_its_shakespeare",
        "jeline.j",
        "jos_reads_and_writes",
        "kemkravings",
        "kmorris_29",
        "littlemisssunshine_95",
        "littlemisssunshine_95",
        "littlemisssunshine_95",
        "littlemisssunshine_95",
        "littlemisssunshine_95",
        "livi508",
        "mexii_melt",
        "mrstobi",
        "mrstobi",
        "mrstobi",
        "mrsv722",
        "mrsv722",
        "mrsv722",
        "ms_menyon",
        "nerdy_brit",
        "nerdy_brit",
        "onlyone_yessy",
        "purplegirl80",
        "purplegirl80",
        "quittac",
        "r2d2johnson",
        "redmegsb",
        "redmegsb",
        "reds_ridinghood",
        "reds_ridinghood",
        "reds_ridinghood",
        "sabrina_4life",
        "skygirlfitnessinc",
        "skygirlfitnessinc",
        "sunflowerfaye",
        "sunnysunshine720",
        "superstaris2020",
        "tiffs_livingherbestlife",
        "usborneinthemitten",
        "watermelonandblackcoffee",
        "zola_monroe",
        "cece2005",
        "kmorris_29",
        "blauren629",
        "sunnysunshine720",
        "_jlenay_",
        "ms_menyon",
        "kemkravings",
        "thekendrajones",
        "211_beadwork_",
        "littlemisssunshine_95",
        "watermelonandblackcoffee",
        "mexii_melt",
        "dajamama",
        "livi508",
        "sunflowerfaye",
        "bellissima.meme",
        "quittac",
        "_ms_mel",
        "redmegsb",
        "chellychele",
        "nerdy_brit",
        "bensblue",
        "beautifullybre",
        "8ninedesign",
        "cece2005",
        "armaclintravels"];
const entriesLength = entries.length;
let uniqueNames = [];
let test;

let index = 0;

entries.forEach( name => {
    if (!uniqueNames.includes(name)){
        uniqueNames.push(name);
    }
})

const getRandomInt = arrayLength => {
    return Math.floor(Math.random() * arrayLength)
};
const showNames = () => {

    if (index < uniqueNames.length) {
        document.getElementById("winnerDiv").innerHTML = uniqueNames[index];
        index++;
    }
    else {
        clearInterval(test);
        showWinner();
    }

}

const pickWinner = () => {
    test = setInterval(showNames, 200);
    document.getElementById("button").style.display = "none";

}

const showWinner = () => {
    const winner = entries[getRandomInt(entriesLength)];
    document.getElementById("winnerDiv").innerHTML = `Congrats, @${winner}!!`;
    document.getElementById("congratsDiv").innerHTML = `Congrats, @${winner}!!`;
}

