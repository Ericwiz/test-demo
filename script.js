const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const form = document.getElementById('consent-form');

function setTime() {
    modal.style.display = 'inline';
}

function closeModal() {
    modal.style.display = 'none';
}

setTimeout(setTime, 1500)
modalCloseBtn.addEventListener('click', closeModal)
form.addEventListener('submit', e => {
    e.preventDefault()
})