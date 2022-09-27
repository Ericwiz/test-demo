// Variables
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

// DOM manipulation variables //

// Player One Dice Variable Naming
const playerOneDice = document.getElementById('playerOneDice');
const playerOneScoreBoard = document.getElementById('playerOneScoreboard');

// Player Two Dice Variable Naming
const playerTwoDice = document.getElementById('playerTwoDice');
const playerTwoScoreBoard = document.getElementById('playerTwoScoreboard');

// buttons
const rollDiceBtn = document.getElementById('rollBtn');
const resetGameBtn = document.getElementById('resetBtn');

// message
const message = document.getElementById('message');

// Creating the game logic and add fuctionalities 😇😇😇

const btnDisplay = () => {
    rollDiceBtn.style.display = 'none';
    resetGameBtn.style.display = 'block';
}

const resetGame = () => {
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let playerOneTurn = true;
    
    playerOneScoreBoard.textContent = playerOneScore;
    playerTwoScoreBoard.textContent = playerTwoScore;
    playerOneDice.textContent = "-";
    playerTwoDice.textContent = "-";
    message.textContent = 'Player 1 Turn'
    resetGameBtn.style.display = 'none';
    rollDiceBtn.style.display = 'block';
    playerTwoDice.classList.remove('active');
    playerOneDice.classList.add('active');

}


rollDiceBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    // console.log(randomNumber);
    
    // Find out which player rolled the dice
    if (playerOneTurn === true) {
        // updating and storing the score
        playerOneScore += randomNumber;
        playerOneScoreBoard.textContent = playerOneScore;
        // 
        playerOneDice.textContent = randomNumber;
        message.textContent = 'Player 2 Turn'
        playerOneDice.classList.remove('active');
        playerTwoDice.classList.add('active');

    } else {
        // updating and storing the score
        playerTwoScore += randomNumber;
        playerTwoScoreBoard.textContent = playerTwoScore;
        // 
        playerTwoDice.textContent = randomNumber;
        message.textContent = 'Player 1 Turn';
        playerTwoDice.classList.remove('active');
        playerOneDice.classList.add('active');
    }

    // switch Players turn
    // playerOneTurn = !playerOneTurn
    if (playerOneTurn === true) {
        playerOneTurn = false
    } else {
        playerOneTurn = true
    }

    // updating and storing the score
    if (playerOneScoreBoard.textContent >= 20) {
        message.textContent = 'Player 1 Won! 😍'

        btnDisplay()
    } else if (playerTwoScoreBoard.textContent >= 20) {
        message.textContent = 'Player 2 Won! 🥰';
       
        btnDisplay()
        
    }


});

resetGameBtn.addEventListener('click', () => {
    resetGame()
})


