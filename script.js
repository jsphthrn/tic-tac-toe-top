function Gameboard () {
    const gameboard = document.getElementById("tic-tac-toe");
    if (gameboard.hasChildNodes()) {
        gameboard.innerHTML = "";
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 ; j++ ) {
            const gameboardCell = document.createElement("div");
            gameboardCell.setAttribute("class", "cell");
            gameboardCell.setAttribute("id", i + ", " + j);
            gameboardCell.textContent = "0";
            gameboardCell.setAttribute("status", "inactive")
            gameboardCell.addEventListener("click", () => {
                if (gameboardCell.getAttribute("status") === "inactive") {
                    gameboardCell.setAttribute("status", "active");
                    gameboardCell.textContent = getCurrentPlayerMarker();
                }
            });
            gameboard.appendChild(gameboardCell);
            }
        }    
    /*
    return (() => {
        let gameboard = [];
        for (let i = 0; i < 3; i++) {
            gameboard[i] = [];
            for (let j = 0; j < 3 ; j++ ) {
                gameboard[i][j] = null;
            }
        }
        return gameboard;
    });
    */
}

function createPlayer () {

    function setUserName(userName) {
        return userName.toString(); 
    }
    function setUserId () {
        return crypto.randomUUID();
    }

    return ((name, marker) => {
        let player = [];
        player.id = setUserId();
        player.name = setUserName(name);
        player.marker = setMarker(marker);
        player.level = 0;
        return player;
    });
}

function Game () {
    
    const player1 = createPlayer();
    const player2 = createPlayer();

    let turn = true;
    let currentPlayer;

    if (turn) {
        currentPlayer = player1;
    } else {
        currentPlayer = player2
    }

    
}

const newGame = document.getElementById("new-game");
newGame.addEventListener("click", () => {
    const gameSetting = document.getElementById("game-starting");
    gameSetting.showModal();
})