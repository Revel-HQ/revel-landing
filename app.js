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

document.querySelector("#nav-barx").style.display = "none";
    document.onreadystatechange = function () {
      document.querySelector("body").style.visibility = "hidden";
      if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";

        document.querySelector("#loader").style.visibility = "visible";
      } else {
        document.querySelector("#loader").style.display = "none";

        document.querySelector("body").style.visibility = "visible";
      }
    };

    function openMenu() {
      document.querySelector("#brandName").style.visibility = "hidden";
      document.querySelector("#nav-barx").style.display = "block";
      document.querySelector("#menu").style.left = "0%";
      document.querySelector("#nav-bar").style.display = "none";
    }
    function closeMenu() {
      document.querySelector("#menu").style.left = "100%";
      document.querySelector("#brandName").style.visibility = "visible";
      document.querySelector("#nav-barx").style.display = "none";
      document.querySelector("#nav-bar").style.display = "block";
    }

const imageSourcesArray = [
  "./img/showcaseimages/desk1.png",
  "./img/showcaseimages/desk2.png",
  "./img/showcaseimages/desk3.png",
  "./img/showcaseimages/desk4.png",
  "./img/showcaseimages/desk5mob1.png",
  "./img/showcaseimages/desk6.png",
  "./img/showcaseimages/desk7mob2.png",
  "./img/showcaseimages/desk8mob3.png",
  "./img/showcaseimages/desk9mob4.png",
  "./img/showcaseimages/desk10.png",
  "./img/showcaseimages/desk11mob5.png",
  "./img/showcaseimages/desk12mob6.png",
  "./img/showcaseimages/desk13.png",
  "./img/showcaseimages/desk14mob7.png",
  "./img/showcaseimages/desk15mob8.png",
  "./img/showcaseimages/desk16mob9.png",
  "./img/showcaseimages/desk17.png",
  "./img/showcaseimages/desk18mob10.png",
  "./img/showcaseimages/desk19.png",
  "./img/showcaseimages/desk20.png",
  "./img/showcaseimages/desk21.png",
  "./img/showcaseimages/hero22.png",
  "./img/showcaseimages/hero23.png",
  "./img/showcaseimages/hero24.png",
  "./img/showcaseimages/hero25.png",
  "./img/showcaseimages/hero26.png",
  "./img/showcaseimages/hero27.png",
  "./img/showcaseimages/hero28.png",
  "./img/showcaseimages/hero29.png",
  "./img/showcaseimages/hero30.png",
  "./img/showcaseimages/hero31.png",
  "./img/showcaseimages/hero32.png",
  "./img/showcaseimages/hero33.png",
];

// Create an array of image sources
const imageSources = Array.from(
  document.querySelectorAll("img.showcaseimg")
).map((img) => img.getAttribute("src"));
const images = Array.from(document.querySelectorAll(".showcaseimg"));
// // Keep track of which images have been shown
const usedImages = [];

function getRandomImageSrc() {
  let imageSrc =
    imageSourcesArray[Math.floor(Math.random() * imageSourcesArray.length)];
  while (usedImages.includes(imageSrc)) {
    imageSrc =
      imageSourcesArray[Math.floor(Math.random() * imageSourcesArray.length)];
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
