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

let enterName = document.getElementById('name');

enterName.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('submit').click();
    }
});
