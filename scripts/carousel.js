const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
let counter = 0;

document.querySelector('.next').addEventListener('click', () => {
    if (counter >= images.length - 1) counter = -1;
    counter++;
    slide.style.transform = `translateX(${ -counter * 100 }%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    if (counter <= 0) counter = images.length;
    counter--;
    slide.style.transform = `translateX(${ -counter * 100 }%)`;
});