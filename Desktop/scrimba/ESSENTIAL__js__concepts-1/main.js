const modalOpen = document.getElementById('open-modal');
const modalClose = document.getElementById('close-modal');

modalOpen.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
})