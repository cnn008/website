const gallerySlides = document.getElementById('gallery-slides');
const totalgallerySlides = 8; // Update based on the number of images
const visiblegallerySlides = 7; // Number of images visible at a time
let currentGallerySlide = 0;

const gprevButton = document.querySelector('.gslide-control.prev');
const gnextButton = document.querySelector('.gslide-control.next');

function updateGallerySlidePosition() {
    const offset = -(currentGallerySlide * (100 / visiblegallerySlides));
    gallerySlides.style.transform = `translateX(${offset}%)`;
    // Disable "Previous" button if at the first slide
    if (currentGallerySlide === 0) {
        gprevButton.disabled = true;
    } else {
        gprevButton.disabled = false;
    }

    // Disable "Next" button if at the last slide
    if (currentGallerySlide === totalgallerySlides - visiblegallerySlides) {
        gnextButton.disabled = true;
    } else {
        gnextButton.disabled = false;
    }
}


function nextGallerySlide() {
    if (currentGallerySlide < totalgallerySlides - visiblegallerySlides) {
        currentGallerySlide++;
    } else {
        currentGallerySlide = 0; // Loop back to the start
    }
    updateGallerySlidePosition();
}

function prevGallerySlide() {
    if (currentGallerySlide > 0) {
        currentGallerySlide--;
    } else {
        currentGallerySlide = totalgallerySlides - visiblegallerySlides; // Loop back to the end
    }
    updateGallerySlidePosition();
}
