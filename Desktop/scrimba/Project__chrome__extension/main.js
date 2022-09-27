let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', e => {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    console.log(myLeads);

    renderLeads();
});


const renderLeads = () => {
       //lock out the items in my leads array using for loop
       let listItems = '';
       for (let i = 0; i < myLeads.length; i++) {
    //    listItems += '<li>' + '<a target="_blank" href="' + myLeads[i] + '">' + myLeads[i] + '</a>' + '</li>';
           listItems += `
                <li>
                   <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a>
                </li>`;
    
    }
    ulEl.innerHTML = listItems;
}









//PRACTICE
/*
const buy = document.getElementById('buy');
buy.innerHTML = '<button id="buybtn">' + 'buy' + '</button>' + '<p id="txt"></>'

const buyBtn = document.getElementById('buybtn');
const Txt = document.getElementById('txt');

buyBtn.addEventListener('click', () => {
    Txt.innerHTML = 'thanks for buying'
    console.log('yezzz')
})
*/

