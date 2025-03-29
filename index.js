document.addEventListener("DOMContentLoaded", function () {
    // Image Slider
    const slides = document.querySelectorAll(".slide-item img");
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function moveSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => moveSlide(1), 12000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    document.querySelector(".prev-btn").addEventListener("click", function () {
        moveSlide(-1);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        moveSlide(1);
    });

    startAutoSlide();
    showSlide(currentIndex);

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const items = document.querySelectorAll(".carousel-item");
const visibleItems = Math.floor(document.querySelector(".carousel-wrapper").offsetWidth / items[0].offsetWidth);
const totalItems = items.length;
let currentIndexCarousel = 0;

const updateCarousel = () => {
    const itemWidth = items[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentIndexCarousel * itemWidth}px)`;
};

nextBtn.addEventListener("click", () => {
    if (currentIndexCarousel < totalItems - visibleItems) {
        currentIndexCarousel++;
    } else {
        currentIndexCarousel = 0; 
    }
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    if (currentIndexCarousel > 0) {
        currentIndexCarousel--;
    } else {
        currentIndexCarousel = totalItems - visibleItems;
    }
    updateCarousel();
});

window.addEventListener("resize", () => {
    updateCarousel();
});
})

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel, index) => {
        const prevBtn = document.querySelectorAll(".carousel-prev")[index];
        const nextBtn = document.querySelectorAll(".carousel-next")[index];
        const items = carousel.querySelectorAll(".carousel-item");
        const visibleItems = Math.floor(carousel.parentElement.offsetWidth / items[0].offsetWidth);
        const totalItems = items.length;
        let currentIndexCarousel = 0;

        const updateCarousel = () => {
            const itemWidth = items[0].offsetWidth;
            carousel.style.transform = `translateX(-${currentIndexCarousel * itemWidth}px)`;
        };

        nextBtn.addEventListener("click", () => {
            if (currentIndexCarousel < totalItems - visibleItems) {
                currentIndexCarousel++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (currentIndexCarousel > 0) {
                currentIndexCarousel--;
                updateCarousel();
            }
        });

        window.addEventListener("resize", updateCarousel);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("signupModal");
    const openBtn = document.getElementById("openSignup");
    const closeBtn = document.querySelector(".close");

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
