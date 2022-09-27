function getDiceRollArray(diceCount){
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(num => {
        return `<div class="dice">${num}</div>`
    }).join('')
}
getDiceHtml()



const hero = {
    elementId: 'hero',
    name: 'wizard',
    avarter: "imgs/angelic.png",
    health: 60,
    diceCount: 3
}

// for monster
const monster = {
    elementId: 'monster',
    name: 'Orc',
    avarter: "imgs/demon.jpg",
    health: 10,
    diceCount: 2
}

function Character(data) {
    this.elementId = data.elementId;
    this.name = data.name;
    this.avarter = data.avarter;
    this.health = data.health;
    this.diceCount = data.diceCount;

    this.getCharacterHtml = function () {
        const { elementId, name, avarter, health, diceCount } = this;

        let diceHtml = getDiceHtml(diceCount)
    

        document.getElementById(elementId).innerHTML = `
        <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avarter}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
        ${diceHtml}
        </div>
        </div>`;
    }
}

const wizard = new Character(hero)
const Orc = new Character(monster)


// function renderCharacter(data) {
//     const { elementId, name, avarter, health, diceCount } = data;
    
//     let diceHtml = getDiceHtml(diceCount)
    
//     document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//     <img class="avatar" src="${avarter}"/>
//     <p class="health">health: <b> ${health} </b></p>
//     <div class="dice-container">
//     ${diceHtml}
//     </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);



// PRACTICE AREA

// Object distructuring
/*
const favoriteMusic = {
    name: 'goodnes',
    year: 2020,
    artist: 'okay',
    album: 'nedu',
}

const { name, year, artist, album } = favoriteMusic;
console.log(`my favourite Music is ${name} released in ${year} by ${artist} from the album ${album} `);


const dreamHoliday = {
    destination: 'Greece',
    activity: 'swim all day long',
    accommodation: 'Ruthly hotel',
    companion: 'Family'
}

const { destination, activity, accommodation, companion } = dreamHoliday;
console.log(`i would love to visit ${destination} and have some ${activity} in ${accommodation} with ${companion}`);
*/


// SPECIAL
// function getLottoNumbers(){
//     const winningNums = []
//     for (let i = 0; i < 6; i++){
//         winningNums.push(Math.round(Math.random()*100))
//     }
//     return winningNums
// }

// function getWinningNumbersHtml(){
//     return getLottoNumbers().map(function(num){
//         return num
//     }).join('')
// }

//  console.log(getWinningNumbersHtml())

// const emoji = new Array(100).fill('😍')
// console.log(emoji)
