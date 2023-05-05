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

const imageSourcesList = [
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
];


// Create an array of image sources
// const imageSources = Array.from(document.querySelectorAll("img.showcaseimg")).map(
//   (img) => img.getAttribute("src")
// );
const images = Array.from(document.querySelectorAll(".showcaseimg"))
// // Keep track of which images have been shown
// const usedImages = new Set();

// function getRandomImageSrc() {
//   let imageSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
//   while (usedImages.has(imageSrc)) {
//     imageSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
//   }
//   usedImages.add(imageSrc);
//   return imageSrc;
// }

// function showRandomImage() {
//   const randomIndex = Math.floor(Math.random() * images.length);
//   // choose a random image

//   const randomImage = images[randomIndex];
//   addAnimation(randomImage);
  
//   const imageSrc = getRandomImageSrc();
//   randomImage.setAttribute("src", imageSrc);
// }
function showRandomImage() {
  // Check if all images have been used
  if (usedImages.length === images.length) {
    // Reset the usedImages array
    usedImages.length = 0;
  }
  
  let randomImage;
  let imageSrc;
  
  do {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage = images[randomIndex];
    imageSrc = randomImage.getAttribute("src");
  } while (usedImages.includes(imageSrc));

  addAnimation(randomImage);

  // Add the used image to the usedImages array
  usedImages.push(imageSrc);

  const newImageSrc = images[Math.floor(Math.random() * images.length)].getAttribute("src");
  randomImage.setAttribute("src", newImageSrc);
}

setInterval(showRandomImage, 1000);


// // function to display a random image every second
// function showRandomImage() {
//   const randomIndex = Math.floor(Math.random() * images.length);
//   // choose a random image

//   const randomImage = images[randomIndex];
//   addAnimation(randomImage);
//   const imageSrc =
//     images[Math.floor(Math.random() * images.length)].getAttribute("src");
  
//     randomImage.setAttribute("src", imageSrc)
  
// }

// setInterval(showRandomImage, 1000);

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
