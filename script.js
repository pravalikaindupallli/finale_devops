let currentIndex = 0;

function moveSlide(step) {
    let slides = document.querySelectorAll(".carousel-item");
    let totalSlides = slides.length;
    
    currentIndex += step;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    
    let container = document.querySelector(".carousel-slide");
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
}
