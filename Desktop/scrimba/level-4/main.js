
  
let firstCard = getRandomCard();

let secondCard = getRandomCard();

let cards = [];
    
let sum = 0;

let hasBlackJack = true

let isAlive = true;

let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}




function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}

function renderGame() {
    cardEl.textContent = 'Cards: ' ;
    
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }

    sumEl.textContent = 'SUM: ' + sum;
    if (sum <= 20) {
        message = 'Do you want to draw another card?';
        messageEl.textContent = message;

    } else if (sum === 21) {
        message = 'yessss! you have a Blackjack.';
        messageEl.textContent = message;
        hasBlackJack = true
        
    } else {
        message = "Sorry! You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message;
}


function newCard() {
    

    if (isAlive === true && hasBlackJack === false) {
 
        let thirdCard = getRandomCard();

    sum += thirdCard;
    cards.push(thirdCard)
    
    renderGame()
    }
    
    
}



// let race1 = 30;
// let race2 = 40;

// function raceTime() {
//     return race1 + race2;
// }
 
// let totalRaceTime = raceTime()
// console.log(totalRaceTime);

//let sentence = ['Hello ', 'my ', 'name ', 'is ', 'wiz '];
//let = greetingEl = document.getElementById('greeting-el');



    //for (let i = 0; i < sentence.length; i++) {
        
       //// greetingEl.textContent += ' ' + sentence[i]
    //}





//count = [1, 2, 3, 4, 5 ]

//for (let i = 0; i < length; i++) {
    //console.log(count[i])
//}


//let myArray = [
   // 'wiz',
   // 20,
   // true
//]
//myArray.push('agu')
//console.log(myArray)

 //myArray.pop('agu')
//console.log(myArray)




/*
let age = 100;

if (age === 100) {
    console.log("Here is your birthday card from the king!");
} else if (age < 100) {
    console.log('Not elegible');
} else {
    console.log("Not elegible! You already have one");
}
*/

/*
let age = 22;

if (age === 21 || age > 21) {
    console.log('Welcome to the club.');
} else {
    console.log('Sorry! You cannot enter the club.');
}*/

