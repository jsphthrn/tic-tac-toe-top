function Gameboard () {

    this.makeGrid = () => {

        let board = [];

        const DOMBoard = document.createElement("div");
        DOMBoard.setAttribute("id", "board");


        for (let i = 0; i < 3; i++) {

            const boardRow = document.createElement("div");
            boardRow.setAttribute("id","row-" + (i + 1));

            board[i] = [];

            for (let j = 0; j < 3; j++) {

                const boardCell = document.createElement("div");
                boardCell.setAttribute("row", i + 1);
                boardCell.setAttribute("column", j + 1);
                boardCell.setAttribute("class", "cell");
                boardCell.textContent = "0";
                boardCell.addEventListener("click", game.makePlay(i, j, boardCell));
                boardRow.appendChild(boardCell);

                board[i][j] = null;
            }

            DOMBoard.appendChild(boardRow);

        }

        document.getElementById("tic-tac-toe").appendChild(DOMBoard);
        this.grid = board;

        

    }

    this.grid = null;
}

function Player (id, mark) {

    this.id = id;
    this.mark = mark;
    this.markedCells = [];

}

function Game (board, player1, player2) {

    this.winingPatterns = [[[1, 1], [1, 2], [1, 3]], [[2, 1], [2, 2], [2, 3]], [[3, 1], [3, 2], [3, 3]],
        [[1, 1], [2, 1], [3, 1]], [[2, 1], [1, 2], [2, 2], [3, 2]], [[3, 1], [3, 2], [3, 3]], [[1, 1], [2, 2], [3, 3]], [[3, 1], [2, 2], [1, 3]]
    ];

    this.winner = null;

    this.gameStart = () => {

        while (this.isActive) {

            this.makePlay();
            console.log(board.grid);

            if (this.winner) {

                break;
            }
        }
    }

    this.makePlay = (row, column, cell) => {

        if ((board.grid[row][column] === null) && this.isActive) {

            if (this.turn) {

                board.grid[row][column] = player1.mark;
                cell.textContent = player1.mark;
                player1.markedCells.push([row + 1, column + 1]);
                this.checkWin(player1);

            } else {

                board.grid[row][column] = player2.mark;
                cell.textContent = player2.mark;
                player2.markedCells.push([row + 1, column + 1]);
                this.checkWin(player2);

            }

            this.turn = !this.turn;

        } else {

            alert("Position occupied!");

        }
        
    }

    this.checkWin = (player) => {

        let aux = player.markedCells;

        if (aux.length > 2) {

            for (let i = 0; i < this.winingPatterns.length; i++) {

                let check = [];
                let aux2 = this.winingPatterns[i];

                for (let j = 0; j < 3; j++) {

                    for (let k = 0; k < aux.length; k++) {

                        if (aux[k].join() === aux2[j].join()) {

                            check.push(true);
                            break;

                        }

                    }
                }

                if (check.length === 3) {
                    
                    this.winner = player.id;
                    this.isActive = false;
                    break;
                }
            }
        }
    }
}


/* TESTING CODE FOR CONSOLE USE CASE

let jose = new Player ("Jose", "X");
let john = new Player ("John", "O");

let gameboard = new Gameboard ();
gameboard.makeGrid();

let game = new Game (gameboard, jose, john);
game.isActive = true;
game.turn = true;
*/

// DOM elements

const newGameButton = document.getElementById("new-game");

newGameButton.addEventListener("click", () => {

    document.getElementById("game-starting").showModal();

});

const cancelNewGameButton = document.getElementById("cancel-start");

cancelNewGameButton.addEventListener("click", () => {

    document.getElementById("game-starting").close();

});

const startGameButton = document.getElementById("start-game");

startGameButton.addEventListener("click", () => {

    document.getElementById("tic-tac-toe").removeChild(document.getElementById("board"));

    let gameboard = new Gameboard ();
    gameboard.makeGrid();

    let player1 = new Player (document.getElementById("player-1-name").value, 
    document.getElementById("marker-1").value);

    let player2 = new Player (document.getElementById("player-2-name").value, 
    document.getElementById("marker-2").value);

    let game = new Game (gameboard, player1, player2);

    game.turn = true;
    game.isActive = true;
    // game.gameStart();

});