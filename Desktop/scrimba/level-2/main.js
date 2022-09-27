/*
let firstName = 'Obumneme';

let middleName = 'Wisdom';

let surname = 'Agu';

let fullName = `${surname} ${middleName} ${firstName}`;

console.log(fullName);
*/

/*
let Name = 'Linda';
let greeting = 'Hi there';

function salute() {
    console.log(`${greeting}, ${Name}`);
}

salute()
*/

/*let myPoints = 3;

function addPoints() {
     myPoints += 3;
 
}

addPoints()

function removePoints() {
    myPoints -= 1;
}
addPoints()
addPoints()
removePoints()
removePoints()

console.log(myPoints)
*/

//let errorMessage = document.getElementById('error');


//function purchase() {
    //errorMessage.textContent = alert('you suck');
//}
//purchase()

let num1 = 8;
let num2 = 4;

document.getElementById('num1-el').textContent = num1;

document.getElementById('num2-el').textContent = num2;

let sumEl = document.getElementById('sum-el');

function add() {
    sum = num1 + num2;
    sumEl.textContent = 'SUM: ' + sum;
}
add()

function subtract() {

    sum = num1 - num2;
    sumEl.textContent = 'SUM: ' + sum;
}
subtract()


function divide() {;

    sum = num1 / num2;
    sumEl.textContent = 'SUM: ' + sum;
}
divide()

function multiply() {

    sum = num1 * num2;
    sumEl.textContent = 'SUM: ' + sum;
}
multiply()