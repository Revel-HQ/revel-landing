// Loader section
document.onreadystatechange = function () {
  document.querySelector("body").style.visibility = "none";
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "none";

    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";

    document.querySelector("body").style.visibility = "visible";
    document
      .querySelector("#introText")
      .classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__delay-2s"
      );
    document
      .querySelector("#logoImg")
      .classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__slideInUp",
        "animate__delay-2s"
      );
  }
};



// Create an array of image sources
const imageSources = Array.from(
  document.querySelectorAll("img.showcaseimg")
).map((img) => img.getAttribute("src"));
const images = Array.from(document.querySelectorAll(".showcaseimg"));
// // Keep track of which images have been shown
const usedImages = [];

function getRandomImageSrc() {
  let imageSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
  while (usedImages.includes(imageSrc)) {
    imageSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
  }
  usedImages.push(imageSrc);
  return imageSrc;
}

function showRandomImage() {
  if (usedImages.length === images.length) {
    // Reset the usedImages array
    usedImages.length = 0;

  }
  const randomIndex = Math.floor(Math.random() * images.length);
  // choose a random image

  const randomImage = images[randomIndex];
  addAnimation(randomImage);

  const imageSrc = getRandomImageSrc();
  randomImage.setAttribute("src", imageSrc);
}




setInterval(showRandomImage, 1000);



function addAnimation(element) {
  setTimeout(() => {
    element.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-10s"
    );
  }, 900);
  setTimeout(() => {
    element.classList.remove(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }, 3000);
}
function firstPlus() {
  document.getElementsByClassName("secondSectionSecondDiv")[0].style.display =
    "flex";
  document.getElementsByClassName("secondSectionFirstDiv")[0].style.visibility =
    "hidden";
}

function secondPlus() {
  document.getElementsByClassName("fourthSectionSecondDiv")[0].style.display =
    "flex";
  document.getElementsByClassName("fourthSectionFirstDiv")[0].style.visibility =
    "hidden";
}

function thirdPlus() {
  document.getElementsByClassName("fifthSectionSecondDiv")[0].style.display =
    "flex";
  document.getElementsByClassName("fifthSectionFirstDiv")[0].style.visibility =
    "hidden";
}

function firstX() {
  document.getElementsByClassName("secondSectionSecondDiv")[0].style.display =
    "none";
  document.getElementsByClassName("secondSectionFirstDiv")[0].style.visibility =
    "visible";
}

function secondX() {
  document.getElementsByClassName("fourthSectionSecondDiv")[0].style.display =
    "none";
  document.getElementsByClassName("fourthSectionFirstDiv")[0].style.visibility =
    "visible";
}

function thirdX() {
  document.getElementsByClassName("fifthSectionSecondDiv")[0].style.display =
    "none";
  document.getElementsByClassName("fifthSectionFirstDiv")[0].style.visibility =
    "visible";
}
