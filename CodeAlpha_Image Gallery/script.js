let images = document.querySelectorAll(".image");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// OPEN LIGHTBOX
function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

    images.forEach((image, index) => {
        if (image.src === img.src) {
            currentIndex = index;
        }
    });
}

// CLOSE
function closeLightbox() {
    lightbox.style.display = "none";
}

// NEXT IMAGE
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// PREVIOUS IMAGE
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// FILTER
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}