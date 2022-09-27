



function PlayGame() {
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        alert('tie game')
    } else if (computerChoice === 'paper') {
        alert('computer won')
    } else if (playerChoice === 'rock') {
        alert('you win')
    } else {
        alert('restart game.')
    }
}

PlayGame()