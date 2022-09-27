let myPoints = 0;
let myScore = 0;

sumEl = document.getElementById('sum-el');
scoreEl = document.getElementById('score-el');
saveEl = document.getElementById('save-el');
resultEl = document.getElementById('result-el');

function btnOne() {
    myPoints += 3;

    sumEl.textContent = myPoints;
    
}
btnOne()

function btnTwo() {
    myPoints = myPoints + 2;
    sumEl.textContent = myPoints;
}
btnTwo()

function btnThree() {
    myPoints = myPoints + 1;
    sumEl.textContent = myPoints;
}
btnThree()

function totalSum() {
    resultEl.textContent = 'SCORE: ' + myPoints;
    sumEl.textContent = 0;
    myPoints = 0;
}
totalSum()
totalSum('')


function firstBtn() {
    myScore = myScore + 3;
    scoreEl.textContent =  myScore;
}
firstBtn()

function secondBtn() {
    myScore = myScore + 2;
    scoreEl.textContent =  myScore;
}
secondBtn()

function thirdBtn() {
    myScore = myScore + 1;
    scoreEl.textContent = myScore;
    
}
thirdBtn()

function totalScore() {
    saveEl.textContent = 'SCORE: ' + myScore;
    scoreEl.textContent = 0;
    myScore = 0;
}
totalScore()
totalScore("")

