const hero = {
    elementId: 'hero',
    name: 'wizard',
    avarter: '../next level--js/step1/imgs/angelic.png',
    health: 60,
    diceroll: [6, 3, 1],
    diceCount: 3

}
const monster = {
    elementId: 'monster',
    name: 'Orc',
    avarter: '../next level--js/step1/imgs/demon.jpg',
    health: 10,
    // diceroll: [4, 3],
    diceCount: 2
}  

//constructor function
  
function Character(data) {
    this.elementId = data.elementId;
    this.name = data.name;
    this.avarter = data.avarter;
    this.health = data.health;
    // this.diceroll = data.diceroll;
    this.diceCount = data.diceCount;
}
    
function renderCards(data) {
    const { elementId, name, avarter, health, diceroll, diceCount } = data
    const diceHtml = diceroll.map(newCount => {
        return  `<div class="dice">${newCount}</div>`
    }).join('')
    // for (let i = 0; i < diceCount; i++) {
    //     diceHtml += `<div class="dice">${diceroll[i]}</div>`;
    // }

    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
    <h4 class="name"> ${name}</h4>
    <img class="avatar" src="${avarter}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
    ${diceHtml}
    </div>
    </div>
`
}

renderCards(hero);
renderCards(monster);




//Practice
// const hotel1 = {
// 	name: 'Safari View',
// 	rooms: 30,
// 	stars: '⭐⭐⭐⭐⭐',
// 	costPerNightAdult: 240,
// }

// const hotel2 = {
// 	name: 'Leopard Mansion',
// 	rooms: 96,
// 	stars: '⭐⭐⭐',
// 	costPerNightAdult: 120,
// }

// function NationalParkHotels(data) {
//     this.name = data.name
//     this.rooms = data.rooms
//     this.stars = data.stars
//     this.costPerNightAdult = data.costPerNightAdult
        
// }

// const hoteln = new NationalParkHotels(hotel1);
// console.log(hoteln)

