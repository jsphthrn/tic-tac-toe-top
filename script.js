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
}

function Game (board, player1, player2) {

    this.gameFlow = () => {
        while (this.isActive) {
            this.checkTurn();
            this.makePlay();
            board;
            this.checkWin();
        }
    }

    this.checkTurn = () => {
        this.turn ? this.currentPlayer = player1 : this.currentPlayer = player2;
    }

    this.makePlay = () => {
        let position = prompt("Coordinates e.g. x, y");
        position = position.split(", ");
        board.grid[position[0]-1][position[1]-1] = this.currentPlayer.mark;
        this.turn = !this.turn;
    }

    this.checkWin = () => {

    }



}

let jose = new Player ("Jose", "X");
let john = new Player ("John", "O");

let gameboard = new Gameboard ();
gameboard.makeGrid();

