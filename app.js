//images

const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: "./assets/clownfish.webp",
    alt: "A Clown Anemonefish in a Bubble-head Anemone.",
  },
  {
    src: "./assets/coral-reef.webp",
    alt: "Coral reel life form, reminiscent of mushrooms.",
  },
  {
    src: "./assets/pufferfish.webp",
    alt: "A Pufferfish resting on the bottom of the sea.",
  },
  {
    src: "./assets/starfish.webp",
    alt: "A small starfish sitting on a rock.",
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

//buttons

// const leftBtn = document.getElementById("leftBtn");
// const rightBtn = document.getElementById("rightBtn");

// //create index function
// function selectNextImage(index) {
//   currentImageIndex + -index;

//   if (currentImageIndex >= images.length) currentImageIndex = 0;
//   if (currentImageIndex < 0) currentImageIndex = images.length - 1;
//   updateDisplayTime(images[currentImageIndex]);
// }

// leftBtn.addEventListener("click", function () {
//   selectNextImage(1);
// });

// rightBtn.addEventListener("click", function () {
//   selectNextImage(-1);
// });
