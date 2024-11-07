const thumbnails = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
    });
});


const readMoreBtn = document.getElementById('readMoreBtn');
const shortDesc = document.getElementById('shortDesc');
const fullDesc = document.getElementById('fullDesc');

