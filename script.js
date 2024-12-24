/* The gameBoard function creates and tracks the current
state of the gameboard(it creates the current state and 
also tracks the current state of the board)
*/

/* It initializes a 2D array(rows x columns). This 2D array
represents the gameboard whereby each cell can be accessed
and monitor individually. This helps in keeping track of all
moves and state of the board during the game
*/

// The for loops initialize each row as an array and populate the columns,
// effectively creating a 2D grid structure.

function Gameboard(){
    const rows = 2;
    const columns = 2;
    const board = []; // 2D array to represent the board;
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            
        }
    }

    const getBoard = () => board; // provides access to the 
    // current state of the board

}
Gameboard()