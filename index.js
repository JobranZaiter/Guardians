let currentIndex = 0;
let slides = document.querySelectorAll('.image-content');
let circles = document.querySelectorAll('.circle');

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    circles.forEach((circle, idx) => {
        if (idx === index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

function navigateToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

showSlide(currentIndex);

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        navigateToSlide(index);
    });
});

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 15000);