// Global variables
let playerOneTurn = 0;
let playerTwoTurn = 0;
let playerOne = true;
// let playerTwo = false;

const playerOneScore = document.getElementById('playerOneScore');
const playerTwoScore = document.getElementById('playerTwoScore');
const playerOneScoreBoard = document.getElementById('playerOneScoreBoard');
const playerTwoScoreBoard = document.getElementById('playerTwoScoreBoard');
const message = document.getElementById('message');

const rollDice = document.getElementById('rollDice');
const resetBtn = document.getElementById('reset');

const container = document.querySelector('.score-container');

// creating the game logic
// functions

const generateRandomNumberAndDisplayScore = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (playerOne === true) {
        playerOneTurn += randomNumber;
        playerOneScore.textContent = playerOneTurn;
        playerOneScoreBoard.textContent = randomNumber;
        // To store the game

    } else {
        playerTwoTurn += randomNumber;
        playerTwoScore.textContent = playerTwoTurn;
        playerTwoScoreBoard.textContent = randomNumber;
    }

// Switch round bewtween players
    if (playerOne === true) {
       playerOne = false
    } else {
        playerOne = true
    }
    // playerOne = !playerOne;

    // switch the players turn

    if (playerOne === true) {
        message.textContent = 'Player 1 turn';
    } else {
        message.textContent = 'Player 2 turn';
    }
    

};
// SCOREBORD STATES
const activeState = () => {
    if (playerOne === true) {
        playerOneScoreBoard.classList.add('active');
        playerTwoScoreBoard.classList.remove('active');
    } else {
        playerTwoScoreBoard.classList.add('active');
        playerOneScoreBoard.classList.remove('active');
    }
}

// Declare a winner
const winner = () => {
    if (playerOneScore.textContent >= 50) {
        message.textContent = 'Player 1 won!'

        displayAndHideButtons()
    } else if (playerTwoScore.textContent >= 50) {
        message.textContent = 'Player 2 won!'

        displayAndHideButtons()
    }



};

// btn display and hidden 
const displayAndHideButtons = () => {
    rollDice.style.display = 'none'
    resetBtn.style.display = 'inline'
}



rollDice.addEventListener('click', () => {

    generateRandomNumberAndDisplayScore()
    winner()
    activeState()
})

//RESET GAME FUNCTION 
const resetGame = () => {
    playerOneTurn = 0;
    playerTwoTurn = 0;
    playerOne = true;

    // const randomNumber = Math.floor(Math.random() * 0) + 0;

    // playerOneTurn = randomNumber;

    playerOneScore.innerHTML = playerOneTurn;
    playerTwoScore.textContent = playerTwoTurn;
    message.textContent = 'Player 1 Turn';
    playerOne = playerOne;
    playerOneScoreBoard.textContent =   '-';
    playerTwoScoreBoard.textContent =   '-';
    rollDice.style.display = 'inline';


}

resetBtn.addEventListener('click', () => {

    resetGame()
})

// const playAgain = document.getElementsByClassName('rolldicebtn');

// playAgain.addEventListener('click', () => {

//     generateRandomNumberAndDisplayScore()
//     winner()
//     activeState()
// })



