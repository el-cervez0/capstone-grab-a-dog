let currMoleTile;
let currEnemyTile;
let score = 0;
let gameOver = false;


window.onload = function () {
    setGame();
}

const setGame = () => {
    for (let i = 0; i < 9; i++) {
        let hole = document.createElement("div")
        hole.id = i.toString();
        hole.classList.add('hole');
        hole.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(hole);
    }

    setInterval(setMole, 1000);
    setInterval(setEnemyMole, 2000)
}

const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9)
    return num;
}

function setMole() {
    if (gameOver) return;

    if (currMoleTile) {
        currMoleTile.innerHTML = ""
    }

    let mole = document.createElement("img");
    mole.src = "./assets/mole2.png"

    let num = getRandomTile();
    if (currEnemyTile && currEnemyTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setEnemyMole() {
    if (gameOver) return;

    if (currEnemyTile) {
        currEnemyTile.innerHTML = ";"
    }

    let enemy = document.createElement("img");
    enemy.src = "./assets/mole.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currEnemyTile = document.getElementById(num)
    currEnemyTile.appendChild(enemy);
}

function selectTile() {
    if (gameOver) return;

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        currMoleTile.innerHTML = ""
    }
    if (this == currEnemyTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}   