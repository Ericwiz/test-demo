let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// QUESION
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

// SOLUTION
// const myCoursesArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }

// }
// myCoursesArr(myCourses)


// QUESION
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// SOLUTION
// const getAge = localStorage.getItem('age')
// console.log(getAge)

// QUESTION
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// SOLUTION
// const result = document.getElementById('result');
// result.addEventListener('click', () => {
//     console.log(data[0].score)
// })

// QUESTION

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// SOLUTION

// const bestPlayers = ['messi', 'neymer', 'hazard', 'mount'];
//     const football = 'One of my favourite footballer'
// function generateSentence(desc, arr) {

//     console.log('here is a list of my 4 best players:')
//     for (let player = 0; player < bestPlayers.length; player++) {
//         console.log(`${bestPlayers[player]} ${football}`)
//     }
// }

// generateSentence(football, bestPlayers)


// QUESTION

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "imgs/img1.jpg",
    "imgs/img2.jpg",
    "imgs/img3.jpg"
]

const imgss = document.getElementById('images');

// function renderImg() {
//     for (let i = 0; i < imgs.length; i++) {
//         imgss.innerHTML += `<img class="img" src="${imgs[i]}">`
//     }

// }
// renderImg()

// OR

// function renderImg() {
//     let DOMimg = ''
//     for (let i = 0; i < imgs.length; i++) {
//         DOMimg += `<img class="img" src="${imgs[i]}">`
//     }
//     imgss.innerHTML = DOMimg
// }
// renderImg()

// QUESTION
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// ANSWER
const totalPrice = '420.69235632455'
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy € ${Number(totalPrice).toFixed(2)}`
