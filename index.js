let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
}

const playerArr = ["player-1", "player-5", "player-3", "player-7", "player-2", "player-6", "player-8", "player-4"];
let playerIndex = 0;

function addName() {
    if (playerIndex <= playerArr.length) {
        let userName = document.getElementById('name').value;
        document.querySelector(`#${playerArr[playerIndex]} span`).innerHTML = userName;
        playerIndex++;
    }
}
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',addName);


/*
function getName() {
    newName.innerHTML = userName.value;
}

submitBtn.addEventListener('click',addName);


/*

const oldPlayer = document.getElementById("player-1").value;
const newPlayer = document.getElementById("name-box").value
function addPlayer() {
    oldPlayer.replace(/Spin Again/, newPlayer.value);
    //document.getElementById("player-1").innerHTML = newPlayer;
}

/*function addPlayer() {
    for (let i = 1; i < 9; i++) {

    }
}

----------

const name = document.getElementById("name").value;
const oldName = document.getElementById("player-1").value;
const newName = oldName.replace(/player-1/, "name");

function getName() {
    var newPlayerName = document.getElementById("name").value;
    localStorage.setItem("player.span", newName);
}
*/