// const slider = document.querySelector('.slider');
// const cards = document.querySelectorAll('.card'); // Select all card elements
// const imgWidth = document.querySelector('.img').offsetWidth;
// let currentIndex = 0;

// function slide(direction) {
//     if (direction === 'next' && currentIndex < cards.length - 2) {
//         currentIndex++;
//     } else if (direction === 'prev' && currentIndex > 0) {
//         currentIndex--;
//     }
//     slider.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
// }

// document.querySelector('.prev').addEventListener('click', () => slide('prev'));
// document.querySelector('.next').addEventListener('click', () => slide('next'));
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = `translateX(${translateValue})`;
}
