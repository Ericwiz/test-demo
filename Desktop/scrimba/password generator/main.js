const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];



const generateFirstPassword = () => {
    const passwordContainer1 = document.getElementById('password-container1');
    const password = [];
    for (let i = 0; i < 15; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password.push(characters[randomNumber]);
        passwordContainer1.value = password.join('');
        
    }
    
}

const generateSecondPassword = () => {
    const passwordContainer2 = document.getElementById('password-container2');
    const password = [];
    for (let i = 0; i < 15; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password.push(characters[randomNumber]);
        passwordContainer2.value = password.join('');
        
    }
    
}


const button = document.getElementById('btn')

button.addEventListener('click', (e) => {
    e.preventDefault()
    generateFirstPassword()
    generateSecondPassword()
})

const clearBtn = document.getElementById('btnclear');

clearBtn.addEventListener('click', () => {
    document.getElementById('form').reset()
})