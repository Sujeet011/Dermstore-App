const beautyTools = [
    { name: "Facial Cleansing Brush", category: "Tool", img: "https://images.meesho.com/images/products/430774772/fc9qx_1200.jpg", rating: 5, amount: 2499 },
    { name: "Jade Roller & Gua Sha Set", category: "Tool", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSy17zcJKHu3SHylHBZ02-_zlGKtR5vQIbA57HUbdBtgNzgChsKUQ-LTp4R9Nn-yCgzzcqtXFju7xiHepf97_up_Xk3c-cYFcSLfMglcjjrWcoOpmHk2gTM", rating: 4, amount: 1299 },
    { name: "LED Light Therapy Mask", category: "Device", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBBuxReAv3nBfi5N5MwBVAkQMRgNiRDbGrG2JsxnSTAyTuz26NUbknS5jTlI8hiSIYgTil9lNIusi_7jpyHeXGuaswqsQcTyjAG-80l9s", rating: 5, amount: 5999 },
    { name: "Nano Ionic Facial Steamer", category: "Device", img: "https://m.media-amazon.com/images/I/61BNeAUfHUL.jpg", rating: 4, amount: 3499 },
    { name: "Electric Blackhead Remover", category: "Device", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_h6geCQxNPl3f4FXWEc59KoKUB9JtQwcmyWK3r4cHHqHaorKsApVa0PBrA8EiNCNvq3KNr3hFFYTxMmEnpSIdRgj7KKeVzWPdFL8is6CaIcRoYCQl5vTJ", rating: 5, amount: 2199 },
    { name: "Derma Roller", category: "Tool", img: "https://m.media-amazon.com/images/I/51c1dSmUzdL.jpg", rating: 4, amount: 9999 },
    { name: "Ultrasonic Skin Scrubber", category: "Device", img: "https://images.meesho.com/images/products/258830844/6z0xr_1200.jpg", rating: 5, amount: 2899 },
    { name: "Eyebrow Trimmer", category: "Tool", img: "https://images.meesho.com/images/products/481304165/t55ms_1200.jpg", rating: 4, amount: 799 },
    { name: "Heated Eyelash Curler", category: "Device", img: "https://m.media-amazon.com/images/I/51CTOxCTwHL.jpg", rating: 5, amount: 1499 },
    { name: "Silicone Face Cleansing Pad", category: "Tool", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQavi68yzpRqKMOdH71_Ef_jkjIBZ8JUTsCko2LyDY9EBn4ir8BclF5ndPf3nJ6byI5sPgIXKWv7LY_D874j3yeihJkAEzYu7bl20heQHKkAyubLddaxL1pWA", rating: 4, amount: 499 },
    { name: "Portable Facial Mist Sprayer", category: "Device", img: "https://images.meesho.com/images/products/363563852/ftfnk_1200.jpg", rating: 5, amount: 1599 },
    { name: "Callus Remover Foot File", category: "Tool", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6yx1ubXOoz99weIYHeKih_fjy_cJon1eoxYwmNV6S32JfDJHH0wUmokIsNqYQq2RYv747Lim4OwBSPJZx903lQbMVe16_FQ3xdQRtiFV3fEkc9JFVw3PInw", rating: 4, amount: 899 },
    { name: "Pore Vacuum Cleaner", category: "Device", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKSciwLyMCij6u6yMbtQxbn8-PwVoNle727Zwce8e4RrY2_cIXLbrKJ8qojCzoxZblG4faFnIQcAxFF3rNCHokKqcLc-4ZqOLHhaMm8jvv_rU5taGVGq_JVWY", rating: 5, amount: 1999 },
    { name: "Facial Ice Roller", category: "Tool", img: "https://deodap.in/cdn/shop/files/1224.jpg?v=1737634716&width=1920", rating: 4, amount: 699 },
    { name: "Makeup Brush Cleaner", category: "Device", img: "https://deodap.in/cdn/shop/files/72a9fcb1-7002-4be3-9d90-d1488810abee.jpg?v=1737622664&width=1946", rating: 5, amount: 1799 }
];

console.log(beautyTools);

function displayProducts(filter = 'All') {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    const filteredProducts = filter === 'All' ? beautyTools : beautyTools.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${'⭐'.repeat(product.rating)}</p>
            <p>₹${product.amount}</p>
            <button class="quick-buy">Quick Buy</button>
        `;
        productGrid.appendChild(productCard);
    });
}

function filterProducts(filter) {
    displayProducts(filter);
}

function toggleText() {
    let moreText = document.getElementById("more-text");
    let button = document.getElementById("toggle-btn");
    moreText.style.display = moreText.style.display === "none" ? "inline" : "none";
    button.textContent = moreText.style.display === "none" ? "Read more" : "Read less";
}

function loadReviews() {
    const reviews = [
        "The facial cleansing brush deeply cleanses my pores. Love it! - Emily R.",
        "The LED therapy mask has improved my skin tone in just a few weeks. - Jake M.",
        "Jade roller feels so refreshing in the morning! - Sophia K.",
        "The nano facial steamer makes my skincare products absorb better. - Liam D.",
        "Pore vacuum cleaner removes blackheads effortlessly. Best investment! - Olivia P."
    ];
    const reviewsContainer = document.getElementById("reviews-container");
    reviews.forEach(review => {
        const div = document.createElement("div");
        div.classList.add("review");
        div.innerHTML = `<p>"${review}"</p>`;
        reviewsContainer.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    loadReviews();
});
