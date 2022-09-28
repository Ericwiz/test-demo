const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const form = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');



function setTime() {
    modal.style.display = 'inline';
}

function closeModal() {
    modal.style.display = 'none';
}

setTimeout(setTime, 1500)

modalCloseBtn.addEventListener('click', closeModal)

document.getElementById('decline-btn').addEventListener('mouseenter', () => {
    document.getElementById('modal-choice-btns').classList.toggle('reverse')
    console.log('wetin')
})

form.addEventListener('submit', e => {
    e.preventDefault();

    modalText.innerHTML = `
      <div class="modal-inner-loading">
    <img src="image/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
`
    
    setTimeout(() => document.getElementById('uploadText').textContent = 'Making the sale...', 1500);
    const formData = new FormData(form)
    const name = formData.get('name')

    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul 🤣🤣🤣</p>
        <div class="idiot-gif">
            <img src="image/pirate.gif">
        </div>
        `

        document.getElementById('modal').style.height = '480px'
        document.getElementById('modal-close-btn').disabled = false
    }, 3000)

})