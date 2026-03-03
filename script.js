function Gameboard () {

    this.makeGrid = () => {

        let board = [];

        for (let i = 0; i < 3; i++) {

            board[i] = [];

            for (let j = 0; j < 3; j++) {

                board[i][j] = null;
            }
        }

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

    this.gameFlow = () => {

        while (this.isActive) {

            this.makePlay();
            console.log(board.grid);

            if (this.winner) {

                break;
            }
        }
    }

    this.makePlay = () => {

        let position = prompt("Coordinates e.g. x, y");
        position = position.split(", ");

        if (board.grid[position[0]-1][position[1]-1] === null) {

            if (this.turn) {

                board.grid[position[0]-1][position[1]-1] = player1.mark;
                player1.markedCells.push([position[0] * 1, position[1] * 1]);
                this.checkWin(player1);

            } else {

                board.grid[position[0]-1][position[1]-1] = player2.mark;
                player2.markedCells.push([position[0] * 1, position[1] * 1]);
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


