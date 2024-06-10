export default function initSlider() {
    const SLIDE_DURATION = 5000;

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider-container');

    const showSlideAtIndex = (index) => {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;

        updateDots();
        updateBackground();
    };

    const updateDots = () => {
        dots.forEach(dot => dot.classList.remove('ativo'));
        dots[currentIndex].classList.add('ativo');
    };

    const updateBackground = () => {
        const bgImage = slides[currentIndex].getAttribute('data-bg');
        sliderContainer.style.backgroundImage = `url('${bgImage}')`;
    };

    const nextSlide = () => {
        showSlideAtIndex(currentIndex + 1);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlideAtIndex(index));
    });

    setInterval(nextSlide, SLIDE_DURATION);

    showSlideAtIndex(currentIndex);
}
