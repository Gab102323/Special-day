document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeBtn = document.getElementsByClassName('close')[0];
    var longPressTimer;

    document.querySelectorAll('.image').forEach(function(image) {
        // Click event for normal click
        image.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImage.src = this.src;
        });

        // Long press events
        image.addEventListener('mousedown', function() {
            longPressTimer = setTimeout(function() {
                lightbox.style.display = 'flex';
                lightboxImage.src = image.src;
            }, 500); // Long press duration (500 ms)
        });

        image.addEventListener('mouseup', function() {
            clearTimeout(longPressTimer);
        });

        image.addEventListener('mouseleave', function() {
            clearTimeout(longPressTimer);
        });

        image.addEventListener('touchstart', function() {
            longPressTimer = setTimeout(function() {
                lightbox.style.display = 'flex';
                lightboxImage.src = image.src;
            }, 500); // Long press duration (500 ms)
        });

        image.addEventListener('touchend', function() {
            clearTimeout(longPressTimer);
        });

        image.addEventListener('touchmove', function() {
            clearTimeout(longPressTimer);
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});