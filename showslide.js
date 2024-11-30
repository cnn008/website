const saleSlides = document.getElementById('sale-slides');
const totalSaleSlides = 8; // Update based on the number of images
const visibleSaleSlides = 4; // Number of images visible at a time
let currentSaleSlide = 0;

const prevButton = document.querySelector('.slide-control.prev');
const nextButton = document.querySelector('.slide-control.next');

function updateSaleSlidePosition() {
    const offset = -(currentSaleSlide * (100 / visibleSaleSlides));
    saleSlides.style.transform = `translateX(${offset}%)`;

    // Disable "Previous" button if at the first slide
    if (currentSaleSlide === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Disable "Next" button if at the last slide
    if (currentSaleSlide === totalSaleSlides - visibleSaleSlides) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}


function nextSaleSlide() {
    if (currentSaleSlide < totalSaleSlides - visibleSaleSlides) {
        currentSaleSlide++;
    } else {
        currentSaleSlide = 0; // Loop back to the start
    }
    updateSaleSlidePosition();
}

function prevSaleSlide() {
    if (currentSaleSlide > 0) {
        currentSaleSlide--;
    } else {
        currentSaleSlide = totalSaleSlides - visibleSaleSlides; // Loop back to the end
    }
    updateSaleSlidePosition();
}
