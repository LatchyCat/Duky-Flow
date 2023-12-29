// JavaScript code for image rotation
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "JIHYO-2-900x600.avif",
        "NAYEON-2-900x600.avif",
        "JEONGYEON-2-900x600.avif",
        "MOMO-2-900x600.avif",
        "SANA-2-900x600.avif",
        "MINA-2-900x600.avif",
        "DAHYUN-2-900x600.avif",
        "CHAEYOUNG-2-900x600.avif",
        "TZUYU-2-900x600.avif"
    ];

    const rotatingImage = document.getElementById("rotatingImage");
    const rotateButton = document.getElementById("rotateButton");

    rotateButton.addEventListener("click", function () {
        rotateImages();
    });

    function rotateImages() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        rotatingImage.src = randomImage;
    }
});
