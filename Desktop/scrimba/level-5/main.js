// const airbnb = {
//     hasListened: true,
//     name: 'wisdom',
//     amount: 4,
//     artist: ['chris', 'brown']
// };

// console.log(airbnb.artist)
// console.log(airbnb.name)

// const person = {
//     name: 'wisdom',
//     age: 20,
//     country: 'Nigeria'
// }

// const logData = () => {
//     console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
// };
// logData();

// let age = 23;

// if (age < 6) {
//     console.log('free');
// } else if (age === 6 || age <= 17) {
//     console.log('child discount');
// }  else if (age === 18 || age <= 26) {
//     console.log('student discount');
// }  else if (age === 27 || age <= 66) {
//     console.log('full payment');
// }  else  {
//     console.log('senior citizen discount');
// }

// let largestCountries = ['Tuvalu', 'india', 'usa', 'indonesia', 'Monaco'];
// console.log('The 5 largest countries in the world are:');
// for (let i = 0; i < largestCountries.length; i++) {
//     console.log('- ' + largestCountries[i]);
// };

// largestCountries.pop();
// largestCountries.push('Pakistan');
// largestCountries.shift();
// largestCountries.unshift('China');
// console.log(largestCountries);

// let dayOfMonth = 31;
// let weekday = 'friday';

// if (dayOfMonth === 13 && weekday === 'friday') {
//     console.log('yezzzz');
// }

// let hands = ['rock', 'paper', 'scissor']

// const randomHands = () => {
//    return hands [Math.floor(Math.random() * 3 )]
// }
// randomHands()
// console.log(randomHands())


let fruit = ['orange', 'apple', 'orange', 'apple', 'orange', 'apple'];

let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

const shelf = () => {
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === 'orange') {
           orangeShelf.textContent += ' ' + fruit[i];
        } else {
            appleShelf.textContent += ' ' + fruit[i]
        }
    }
}
shelf()