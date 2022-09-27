// const slides = document.getElementsByClassName('carousel-item');
// let slidePosition = 0;
// const totalSlides = slides.length;

// const buttonPrev = document.getElementById('carousel-button-prev');
// const buttonNext = document.getElementById('carousel-button-next');

// console.log(slides)

// const moveToPrevSlide = () => {
//     hideAllSlides();
    
//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--;
//     }
    
//     slides[slidePosition].classList.add("carousel-item-visible");
// }
// const moveToNextSlide = () => {
//     hideAllSlides();
//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
// }

//     const hideAllSlides = () => {
//         for (let slide of slides) {
//             slide.classList.remove('carousel-item-visible');
//             slide.classList.add('carousel-item-hidden');
//         }
//     };

// buttonPrev.addEventListener('click', () => {

//     moveToPrevSlide()
// });
    
//     buttonNext.addEventListener('click', () => {
//         moveToNextSlide()
// })




// const buttonNext = document.getElementById('carousel-button-next');
// const buttonPrev = document.getElementById('carousel-button-prev');
// const slides = document.getElementsByClassName('carousel-item');
// let slidePosition = 0;
// let totalSlides = slides.length;

// buttonNext.addEventListener('click', () => {
//     hideAllCarousel()

//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0
//     } else {
//         slidePosition++
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
// })

// buttonPrev.addEventListener('click', () => {
//     hideAllCarousel()

//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;

//     } else {
//         slidePosition--
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
// })

// const hideAllCarousel = () => {
//     for (let slide of slides) {
//         slide.classList.remove('carousel-item-visible');
//         slide.classList.add('carousel-item-hidden');
//     }
// }

const buttonNext = document.querySelector('#carousel-button-next');
const buttonPrevious = document.querySelector('#carousel-button-prev');

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
let totalSlides = slides.length;

buttonNext.addEventListener('click', () => {

    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible');

})

buttonPrevious.addEventListener('click', () => {

    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible');

})


















































































































































































































































































































