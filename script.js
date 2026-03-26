const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let index = 0;
const totalCards = cards.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

btnNext.addEventListener('click', () => {
    index++;

    if (index >= totalCards) {
        index = 0; // volta pro início
    }

    updateCarousel();
});

btnPrev.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = totalCards - 1; // vai pro último
    }

    updateCarousel();
});