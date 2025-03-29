document.querySelector('.add-to-cart').addEventListener('click', function () {
    alert('Item added to cart!');
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const sliderWrapper = document.querySelector(".slider-wrapper");

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });
});



const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

decreaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

document.querySelector('.add-to-cart').addEventListener('click', function () {
    alert(`Added ${quantityInput.value} item(s) to cart!`);
});

function toggleSection(id) {
    let content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
    content.previousElementSibling.classList.toggle("expanded");
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");

    let index = 0;
    const itemWidth = document.querySelector(".carousel-item").offsetWidth;
    const totalItems = document.querySelectorAll(".carousel-item").length;
    const itemsToShow = 4;
    const maxIndex = totalItems - itemsToShow;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    setInterval(() => {
        if (index < maxIndex) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    }, 3000);
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

    document.addEventListener("DOMContentLoaded", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        updateCartCount();
    
        document.querySelectorAll(".quick-buy").forEach(button => {
            button.addEventListener("click", (event) => {
                let productElement = event.target.closest(".product");
                let productId = productElement.getAttribute("data-id");
                let productName = productElement.getAttribute("data-name");
                let productPrice = productElement.getAttribute("data-price");
    
                let existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
                }
    
                  localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
                alert(`${productName} added to cart!`);
            });
        });
    });
    
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll(".cart-count").forEach(el => el.textContent = totalItems);
    }
    

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
