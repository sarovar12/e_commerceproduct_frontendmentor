const image = document.querySelector('.img-preview');
let lightboxIndex = 1;

showLightbox(lightboxIndex);

image.addEventListener('click', function() {
    open();
});


function hide() {
    document.getElementById('lightbox').style.display="none";
    document.getElementById('lightbox-wrap').style.display="none";
}

function open() {
    document.getElementById('lightbox').style.display="block";
    document.getElementById('lightbox-wrap').style.display="block";
}

function plusLightbox(n) {
    showLightbox(lightboxIndex += n);
}

function currentLightbox(n) {
    showLightbox(lightboxIndex = n);
}

function showLightbox(n) {
    let lightboxThumbs = document.getElementsByClassName('lightbox-thumb');
    let lightboxThumbsSmall = document.getElementsByClassName('lightbox-thumb-s');
    let i;

    if (n > lightboxThumbs.length ) {
        lightboxIndex = 1;
    }
    if (n < 1) {
        lightboxIndex = lightboxThumbs.length;
    }
    for (i = 0; i < lightboxThumbs.length; i++) {
        lightboxThumbs[i].style.display = "none";
    }
    for (i = 0; i < lightboxThumbsSmall.length; i++) {
        lightboxThumbsSmall[i].className = lightboxThumbsSmall[i].className.replace(" active", "");
    }
    lightboxThumbs[lightboxIndex-1].style.display="block";
    lightboxThumbsSmall[lightboxIndex-1].className += " active";
}