// /* The gameBoard function creates and tracks the current
// state of the gameboard(it creates the current state and 
// also tracks the current state of the board)
// */

// /* It initializes a 2D array(rows x columns). This 2D array
// represents the gameboard whereby each cell can be accessed
// and monitor individually. This helps in keeping track of all
// moves and state of the board during the game
// */

// // The for loops initialize each row as an array and populate the columns,
// // effectively creating a 2D grid structure.

// function Gameboard(){
//     const rows = 3;
//     const columns = 3;
//     const board = []; // 2D array to represent the board;
//     for(let i = 0; i < rows; i++){
//         board[i] = [];
//         for(let j = 0; j < columns; j++){
//             board[i].push(Cell())
//         }
//     }

//     const getBoard = () => board; // provides access to the 
//     // current state of the board

//     // In order to mark a cell, we need to find the empty cells
//   // select that cell and change that cell's value to the player number

//     const dropToken = (column, player) => {
//       const availableCells = board.filter((row) => 
//         row[column].getValue() === 0).map(row => row[column]);

//       if(!availableCells.length) return
//       board
//      }
  
// console.log(board)
// }

// function Cell(){
//   let value = 0;

//   const addToken = (player) => {
//     value = player;
//   }
//   const getValue = () => value
//   return {
//     addToken, getValue
//   }
// }


// Gameboard()


function Gameboard(){
  const board = [];


};

function GameController(playerOneName = 'Player One', playerTwoName = 'Player Two'){
  // const board = Gameboard();
  const players = [
    {
      name : playerOneName,
      markup : 'x'
    },
    {
      name : playerTwoName,
      markup : 'o' 
    }
  ];

let activePlayer = players[0];

const switchPlayerTurn = () => {
  if(activePlayer === players[0]){
    activePlayer = players[1]
  }else{
    activePlayer = players[0]
  }
};

const getActivePlayer = () => activePlayer

return { getActivePlayer}
}


console.log(GameController().getActivePlayer())