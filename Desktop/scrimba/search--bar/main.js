const input = document.getElementById('usernameInput');

input.addEventListener('keyup', e => {
    const username = e.target.value.toLowerCase();
    
 const allNamesDOMCollection = document.getElementsByClassName('name');
// console.log(allNamesDOMCollection[0].textContent)
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        if (currentName.includes(username)) {
            allNamesDOMCollection[counter].style.display = 'block'
        } else {
            allNamesDOMCollection[counter].style.display = 'none'
        }
    }
})

// const inputEl = document.getElementById('usernameInput');

// inputEl.addEventListener('keyup', e => {
//     const name = e.target.value.toLowerCase();

//     const liEl = document.getElementsByClassName('name'); 

//     for (let i = 0; i < liEl.length; i++) {
//       const eachName =  liEl[i].textContent.toLowerCase();

//         if (eachName.includes(name)) {
//             liEl[i].style.display = 'block'
//         } else {
//             liEl[i].style.display = 'none'
//         }
//     }

// })































