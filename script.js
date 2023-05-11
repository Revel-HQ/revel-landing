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

$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".playBtn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
