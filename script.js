// script.js
document.addEventListener('DOMContentLoaded', function() {
    var imageEnlarger = document.getElementById('image-enlarger');
    var enlargedImg = document.getElementById('enlarged-img');

    function showEnlargedImage(src) {
        enlargedImg.src = src;
        imageEnlarger.style.display = 'flex';
    }

    // Handle clicks on .btn-next
    var btns = document.querySelectorAll('.btn-next');
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var imgSrc = this.getAttribute('data-img');
            showEnlargedImage(imgSrc);
        });
    });

    // Handle clicks on .preview-img
    var previewImgs = document.querySelectorAll('.preview-img');
    previewImgs.forEach(function(img) {
        img.addEventListener('click', function() {
            var imgSrc = this.src;
            showEnlargedImage(imgSrc);
        });
    });

    // Handle clicks on the enlarged image background to close
    imageEnlarger.addEventListener('click', function() {
        imageEnlarger.style.display = 'none';
    });
});
