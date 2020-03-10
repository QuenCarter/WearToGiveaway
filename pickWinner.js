const entries = ["Sally", "Bob", "Sam", "Jon", "Quen"];
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
    test = setInterval(showNames, 300);
    document.getElementById("button").style.display = "none";
    
}

const showWinner = () => {
    const winner = entries[getRandomInt(entriesLength)];
    document.getElementById("winnerDiv").innerHTML = `Congrats, ${winner}!!`;
    document.getElementById("congratsDiv").innerHTML = `Congrats, ${winner}!!`;
}

