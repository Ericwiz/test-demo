

//initialize the count as 0
//listen for clicks on the increment
//increment the count variable when button is clicked
//change the count-el to html when



let counter = 0;
let countEl = document.getElementById("count-el")



function increment() {
    counter += 1;
    countEl.textContent = counter;
}

increment()

let saveEl = document.getElementById('save-el');


function save() {
    
    let countDash = counter + ' - ';
    saveEl.innerText = saveEl.textContent + countDash;
    countEl.innerText = 0;
    counter = 0;
}

save()



//let greeting = 'good day, my name is';

//let myGreeting = `${greeting} ${Name}`;

//console.log(myGreeting);

//let welcomeEl = document.getElementById("welcome-el");

//let Myname = 'wisdom';
//let greeting = 'welcome back '

//welcomeEl.innerText = `${greeting} ${Myname}`;

//console.log(welcomeEl.innerText);


