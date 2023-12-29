    // const { NekosAPI } = require("nekosapi");

    // const nekos = new NekosAPI();

    // // Fetch a random One Piece anime image
    // nekos.getRandomImage(["onepiece"]).then((image) => {
    //     console.log(image); // Log the API response
    //     const onePieceImageUrl = image.url;
    //     document.getElementById('leftImage').src = onePieceImageUrl;
    //     document.getElementById('rightImage').src = onePieceImageUrl;
    // }).catch(error => console.error(error));


    // rotateImages.js

    // rotateImages.js

document.addEventListener("DOMContentLoaded", function () {
    const onePieceImages = [
        "onePieceImages/ace.jpeg",
        "onePieceImages/akainu_color.png",
        "onePieceImages/apoo.jpeg",
        "onePieceImages/bege.jpeg",
        "onePieceImages/bepo_color.png",
        "onePieceImages/big_mama.png",
        "onePieceImages/blackbeard.png",
        "onePieceImages/boa_hanncock.jpeg",
        "onePieceImages/bon_clay.jpeg",
        "onePieceImages/brook.png",
        "onePieceImages/buggy_the_clown.png",
        "onePieceImages/burgus.png",
        "onePieceImages/caeser_clown_color.jpeg",
        "onePieceImages/camie_black_white.png",
        "onePieceImages/carrot.png",
        "onePieceImages/cat_viper.jpeg",
        "onePieceImages/cavendish.png",
        "onePieceImages/charlotte_perospero.png",
        "onePieceImages/chopper.png",
        "onePieceImages/crocodial.jpeg",
        "onePieceImages/cry_baby.png",
        "onePieceImages/diamante.png",
        "onePieceImages/doflamingo.png",
        "onePieceImages/drake.png",
        "onePieceImages/duke_dog_storm.png",
        "onePieceImages/eneru.png",
        "onePieceImages/franky.png",
        "onePieceImages/garp.png",
        "onePieceImages/gecko_moria.png",
        "onePieceImages/hattori.png",
        "onePieceImages/hawkins.png",
        "onePieceImages/hyogro_color.png",
        "onePieceImages/jack_the_drought.jpeg",
        "onePieceImages/jimbei.png",
        "onePieceImages/kaido.png",
        "onePieceImages/kalifa.png",
        "onePieceImages/kanjuro.png",
        "onePieceImages/karoo.png",
        "onePieceImages/kid.jpeg",
        "onePieceImages/kikunojo.png",
        "onePieceImages/killer.jpeg",
        "onePieceImages/kinemon.png",
        "onePieceImages/king_black_white.jpeg",
        "onePieceImages/kizaru_color.png",
        "onePieceImages/koby.jpeg",
        "onePieceImages/kozuki_topHoe.png",
        "onePieceImages/kuma.jpeg",
        "onePieceImages/kuzan.png",
        "onePieceImages/law.jpeg",
        "onePieceImages/luffy.png",
        "onePieceImages/marco.png",
        "onePieceImages/mihawk.jpeg",
        "onePieceImages/monkey_d_father.jpg",
        "onePieceImages/mr.3.png",
        "onePieceImages/nami.png",
        "onePieceImages/pappugu.png",
        "onePieceImages/pedro.png",
        "onePieceImages/pekoms.jpg",
        "onePieceImages/queen.jpeg",
        "onePieceImages/razio_of_the_mist.jpeg",
        "onePieceImages/rob_lucci.jpeg",
        "onePieceImages/robin.png",
        "onePieceImages/sabo.png",
        "onePieceImages/sanji.png",
        "onePieceImages/sengoku.png",
        "onePieceImages/shanks.png",
        "onePieceImages/shinobu.jpeg",
        "onePieceImages/smoker.jpeg",
        "onePieceImages/tashigi.png",
        "onePieceImages/usopp.png",
        "onePieceImages/vineSmoke_niji.png",
        "onePieceImages/vivi.jpeg",
        "onePieceImages/whitebeard.jpeg",
        "onePieceImages/wicka.png",
        "onePieceImages/zoro.png"
    ];

    const leftImage = document.getElementById("leftImage");
    const rightImage = document.getElementById("rightImage");

    let currentIndex = 0;

    // Set initial images
    leftImage.src = onePieceImages[currentIndex];
    rightImage.src = onePieceImages[currentIndex + 1];

    // Function to rotate images
    function rotateOnePieceImages() {
        currentIndex = (currentIndex + 1) % onePieceImages.length;
        leftImage.src = onePieceImages[currentIndex];
        rightImage.src = onePieceImages[(currentIndex + 1) % onePieceImages.length];
    }

    // Auto-rotate images every 5 seconds (adjust as needed)
    const rotationInterval = setInterval(rotateOnePieceImages, 5000);

    // If you want to stop the rotation when clicking the button, you can use the clearInterval function
    // const rotateButton = document.getElementById("rotateButton");
    // rotateButton.addEventListener("click", function () {
    //     clearInterval(rotationInterval);
    // });
});
