function Gameboard () {
    const gameboard = document.getElementById("tic-tac-toe");
    if (gameboard.hasChildNodes()) {
        gameboard.innerHTML = "";
    }
    for (let i = 0; i < 3; i++) {
            const gameboardRow = document.createElement("div");
            gameboardRow.setAttribute("class", "row");
            for (let j = 0; j < 3 ; j++ ) {
                const gameboardCell = document.createElement("div");
                gameboardCell.setAttribute("class", "cell");
                gameboardCell.setAttribute("id", i + "-" + j)
                gameboardRow.appendChild(gameboardCell);
            }
            gameboard.appendChild(gameboardRow);
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

    return ((name) => {
        let player = [];
        player.id = setUserId();
        player.name = setUserName(name);
        player.level = 0;
        return player;
    });
}

function Game () {
    
    const player1 = createPlayer();
    const player2 = createPlayer();

    return [player1, player2];
}