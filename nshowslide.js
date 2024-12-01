const newsSlides = document.getElementById('news-slides');
const totalnewsSlides = 8; // Update based on the number of images
const visiblenewsSlides = 3; // Number of images visible at a time
let currentNewsSlide = 0;

const nprevButton = document.querySelector('.nslide-control.prev');
const nnextButton = document.querySelector('.nslide-control.next');

function updateNewsSlidePosition() {
    const offset = -(currentNewsSlide * (100 / visiblenewsSlides));
    newsSlides.style.transform = `translateX(${offset}%)`;
    // Disable "Previous" button if at the first slide
    if (currentNewsSlide === 0) {
        nprevButton.disabled = true;
    } else {
        nprevButton.disabled = false;
    }

    // Disable "Next" button if at the last slide
    if (currentNewsSlide === totalnewsSlides - visiblenewsSlides) {
        nnextButton.disabled = true;
    } else {
        nnextButton.disabled = false;
    }
}


function nextNewsSlide() {
    if (currentNewsSlide < totalnewsSlides - visiblenewsSlides) {
        currentNewsSlide++;
    } else {
        currentNewsSlide = 0; // Loop back to the start
    }
    updateNewsSlidePosition();
}

function prevNewsSlide() {
    if (currentNewsSlide > 0) {
        currentNewsSlide--;
    } else {
        currentNewsSlide = totalnewsSlides - visiblenewsSlides; // Loop back to the end
    }
    updateNewsSlidePosition();
}
