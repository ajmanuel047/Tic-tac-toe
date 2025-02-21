let clickCheck = 'undefined';
let playerOneScore = 0;
let playerTwoScore = 0;
const playerOne = document.querySelector('.playerOne');
const playerTwo = document.querySelector('.playerTwo');

function startButton(){  
  const start = document.querySelector('#start_button');
  const form = document.querySelector('form');
  const formTitle = document.querySelector('h3')
  const submit = document.querySelector('#submit');
  const player1 = document.querySelector('#player1');
  const player2 = document.querySelector('#player2');
  

  const updateScreen = () => {   
    form.style.display = 'flex';
    formTitle.style.display = 'flex';
    start.style.display = 'none';
  }
  
  start.addEventListener('click', updateScreen);

  function submitButton(){    
      const updateScreen = (e) => {      
      if(player1.value && player2.value){
          e.preventDefault(); 
          const playerTurnDiv = document.querySelector('.turn');        
          playerTurnDiv.style.display = 'flex'
          formTitle.style.display = 'none';
          form.style.display = 'none';
          clickCheck = 'yes';
          createNewBoard()        
          gameScore();
          gameRestart()
          ScreenController();  
      }

    }

    submit.addEventListener('click', updateScreen)
  }

  submitButton()
}

startButton()

function Gameboard(){
 
  const rows = 3;
  const columns = 3;
  const board = []; // 2D array to represent the board;

  for(let i = 0; i < rows; i++){
      board[i] = [];
      for(let j = 0; j < columns; j++){
          board[i].push(Cell())
      }
    }
  
    const getBoard = () => board;

    // In order to mark a cell, we need to find the empty cell on the column
    // select that cell and change that cell's value to the player number

    const markCell = (column, player, currRow) => {
      if(!board[currRow][column].getValue()){
        board[currRow][column].addMarkUp(player);
      }       
    }
    
    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      return boardWithCellValues
    };
    
    return { getBoard, markCell, printBoard }
};

// -------

function Cell(){
let value = '';

const addMarkUp = (player) => {
  value = player;
}

const getValue = () => value

return { addMarkUp, getValue }
}

// -------

function GameController(){
let board = Gameboard();
const playerOneName = player1.value
const playerTwoName = player2.value

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

const printNewRound = () => {
board.printBoard();
};

function winMessage (){
  const winMessage = document.querySelector('.message');
  document.querySelector('h2').style.display = 'none'
  document.querySelector('h3').style.display = 'flex'
  winMessage.textContent = `${getActivePlayer().name} Wins`;
  board = Gameboard()
  gameScore()
  setTimeout(() => {
     clickCheck = 'undefined';
  }, 1);
}

function drawMessage (){
  const message = document.querySelector('.message');
  document.querySelector('h2').style.display = 'none'
  document.querySelector('h3').style.display = 'flex'
  message.textContent = `Draw`;
  board = Gameboard()
  gameScore()
  setTimeout(() => {
     clickCheck = 'undefined';
  
  }, 1);
}


const playRound = (column, currRow) => {
board.markCell(column, getActivePlayer().markup, currRow);

/*  This is where we would check for a winner and handle that logic,
    such as a win message. */

      if(board.printBoard()[0][0] === board.printBoard()[1][0] && board.printBoard()[1][0] === board.printBoard()[2][0]){
        if(board.printBoard()[0][0] !== '' && board.printBoard()[1][0] !== '' && board.printBoard()[2][0] !== ''){
          winMessage()
          gameRestart();   
        }
       
      } 
       if(board.printBoard()[0][1] === board.printBoard()[1][1] && board.printBoard()[1][1] === board.printBoard()[2][1]){
        if(board.printBoard()[0][1] !== '' && board.printBoard()[1][1] !== '' && board.printBoard()[2][1] !== ''){
          winMessage();        
          gameRestart(); 
        } 
      }
       if(board.printBoard()[0][2] === board.printBoard()[1][2] && board.printBoard()[1][2] === board.printBoard()[2][2]){
        if(board.printBoard()[0][2] !== '' && board.printBoard()[1][2] !== '' && board.printBoard()[2][2] !== ''){
          winMessage();
          gameRestart();  
        }
      }
       if(board.printBoard()[0][0] === board.printBoard()[0][1] && board.printBoard()[0][1] === board.printBoard()[0][2]){
        if(board.printBoard()[0][0] !== '' && board.printBoard()[0][1] !== '' && board.printBoard()[0][2] !== ''){
          winMessage();
          gameRestart();   
        }
      }
       if(board.printBoard()[1][0] === board.printBoard()[1][1] && board.printBoard()[1][1] === board.printBoard()[1][2]){
        if(board.printBoard()[1][0] !== '' && board.printBoard()[1][1] !== '' && board.printBoard()[1][2] !== ''){
          winMessage();
          gameRestart();    
        }
      }
       if(board.printBoard()[2][0] === board.printBoard()[2][1] && board.printBoard()[2][1] === board.printBoard()[2][2]){
        if(board.printBoard()[2][0] !== '' && board.printBoard()[2][1] !== '' && board.printBoard()[2][2] !== ''){
          winMessage();
          gameRestart();   
        }
      }
       if(board.printBoard()[0][0] === board.printBoard()[1][1] && board.printBoard()[1][1] === board.printBoard()[2][2]){
        if(board.printBoard()[0][0] !== '' && board.printBoard()[1][1] !== '' && board.printBoard()[2][2] !== ''){
          winMessage();
          gameRestart();    
        }
      }
       if(board.printBoard()[0][2] === board.printBoard()[1][1] && board.printBoard()[1][1] === board.printBoard()[2][0]){
        if(board.printBoard()[0][2] !== '' && board.printBoard()[1][1] !== '' && board.printBoard()[2][0] !== ''){
          winMessage();
          gameRestart();    
        }
      }
      if(board.printBoard()[0][0] !== '' && board.printBoard()[0][1] !== '' && board.printBoard()[0][2] !== '' && board.printBoard()[1][0] !== ''
         && board.printBoard()[1][1] !== '' && board.printBoard()[1][2] !== '' && board.printBoard()[2][0] !== '' && board.printBoard()[2][1] !== ''
         && board.printBoard()[2][2] !== ''){
          drawMessage()
          gameRestart();   
         }

// Switch player turn
switchPlayerTurn();
printNewRound();

};

printNewRound();

return { playRound, getActivePlayer, getBoard: board.getBoard }
}

function ScreenController() {
const game = GameController();
const playerTurnDiv = document.querySelector('.turn');
const boardDiv = document.querySelector('.board');
const board = Gameboard()

const updateScreen = () => {
  // clear the board
  boardDiv.textContent = "";

  // get the newest version of the board and player turn
  const board = game.getBoard();
  const activePlayer = game.getActivePlayer();

  // Display player's turn
  playerTurnDiv.textContent = `${activePlayer.name}'s turn...`

  // Render board squares
  board.forEach((row, index1) => {
    row.forEach((cell, index) => {     
      // Anything clickable should be a button!!
      const cellButton = document.createElement("button");
      cellButton.classList.add("cell");
      // Create a data attribute to identify the row and column
      // This makes it easier to pass into our `playRound` function 
      cellButton.dataset.column = index
      cellButton.dataset.row = index1
      cellButton.textContent = cell.getValue();
      
      boardDiv.appendChild(cellButton);
    })
  })
}

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    const board = Gameboard()

    // Make sure I've clicked a column and not the gaps in between
    if (!selectedColumn) return;
    if (!selectedRow) return;
 
    if(e.target.textContent == '' && clickCheck == 'yes'){
      game.playRound(selectedColumn, selectedRow);
      console.log(selectedColumn)
     }
    
    
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

}

function gameRestart (){
  const restart = document.querySelector('.restart_btn');
  const updateScreen = () => { 
    createNewBoard()
    ScreenController();   
    clickCheck = 'yes';
    const playerTurnDiv = document.querySelector('.turn');
    playerTurnDiv.style.display = 'flex';
    document.querySelector('h3').style.display = 'none';    
  }
  restart.addEventListener('click', updateScreen)
}

function createNewBoard(){
  const container = document.querySelector('.boardContainer')
  document.querySelector('.board').remove()
  const boardDiv = document.createElement('div')
  boardDiv.classList.add("board");
  container.appendChild(boardDiv)
}

ScreenController();  

function gameScore (){
  const winMessage = document.querySelector('.message');
  playerOne.textContent =  `${player1.value} : ${playerOneScore}`
  playerTwo.textContent =  `${player2.value} : ${playerTwoScore}`
  
  if(winMessage.textContent == `${player1.value} Wins`){
    playerOneScore ++;
    playerOne.textContent =  `${player1.value} : ${playerOneScore}`
  }else if(winMessage.textContent == `${player2.value} Wins`){
    playerTwoScore ++;
    playerTwo.textContent =  `${player2.value} : ${playerTwoScore}`
  }
}

