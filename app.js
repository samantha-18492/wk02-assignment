//images

const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: "./assets/clownfish.webp",
    alt: "A Clown Anemonefish in a Bubble-head Anemone.",
  },
  {
    src: "./assets/starfish.webp",
    alt: "A small starfish sitting on a rock.",
  },
  {
    src: "./assets/pufferfish.webp",
    alt: "A Pufferfish resting on the bottom of the sea.",
  },
  {
    src: "./assets/coral-reef.webp",
    alt: "Coral reel life form, reminiscent of mushrooms.",
  },
  {
    src: "./assets/mandarinfish.webp",
    alt: "A Mandarinfish at the Cairns Aquarium shows of its gorgeous colours and pattern, against a backdrop of white coral.",
  },
];

//create thumbnail function
function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    imageElement.src = image.src;

    imageElement.addEventListener("click", function () {
      createBigImage(image);
    });

    thumbnails.appendChild(imageElement);
  });
}
//function invoke
createThumbnails();

//create larger image function
function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";
  const bigImage = document.createElement("img");

  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;

  displayContainer.appendChild(bigImage);
}

//create load function for larger image
function loadImage() {
  const bigImage = document.createElement("img");
  bigImage.src = images[0].src;
  bigImage.alt = images[0].alt;
  displayContainer.appendChild(bigImage);
}
//function invoke
loadImage();

// buttons
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let currentImageIndex = 0;

leftBtn.addEventListener("click", function () {
  //move to next image +1 action;
});

rightBtn.addEventListener("click", function () {
  // move to previous image -1 action;
});
