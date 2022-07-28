

// iffe
(function (document) {
  var introText = document.querySelector("section#firstSection h1#introText"), introImage = document.querySelector("section#firstSection img")
 
  // introText.classList.add("animate__fadeIn animate__delay-2s")




  // image slider
  var startingX, movingX;
  var slider = document.querySelector("#slider");
  slider.addEventListener("touchstart", (e) => touchstart(e));
  slider.addEventListener("touchend", (e) => touchend(e));
  slider.addEventListener("touchmove", (e) => touchmove(e));
  function touchstart(evt) {
    startingX = evt.touches[0].clientX;
  }
  function touchmove(evt) {
    movingX = evt.touches[0].clientX;
  }
  function touchend() {
    if (startingX + 100 < movingX) {
      if (initialValue === 0) return;
      sliderImages[initialValue].classList.remove(className);
      initialValue--;
      sliderImages[initialValue].classList.add(className);
      paginateDot(sliderImages);
    } else if (startingX - 100 > movingX) {
      if (initialValue >= sliderImages.length - 1) return;
      initialValue++;
      sliderImages[initialValue - 1].classList.remove(className);
      sliderImages[initialValue].classList.add(className);
      paginateDot(sliderImages);
    }
  }
  var sliderImages = document.querySelectorAll(".sliderImage");
  var initialValue = 0,
    className = "activeImage";
  sliderImages[initialValue].classList.add(className);

  function paginateDot(sliderImages) {
    var dots = document.querySelectorAll(".dots");

    for (var i = 0; i < sliderImages.length; i++) {
      if (sliderImages[i].classList.contains("activeImage")) {
        dots[i].classList.add("activeDot");
      } else {
        dots[i].classList.remove("activeDot");
      }
    }
  }

  paginateDot(sliderImages);
})(document);

// video loop function
window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);
function videoScroll() {
  if (document.querySelectorAll("video").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
var faqsItem = document.querySelectorAll(".faqsItem");

faqsItem.forEach((faqItem, i) => {
  faqItem.addEventListener("click", () => {
    var faqsItemActive = document.querySelector(".faqsItem.active");

    faqsItem.forEach((faqEl) => {
      const pathEl = faqEl.children[0].children[0];
      faqEl.classList.remove("active");
      pathEl.classList.remove("rotatePath");
    });

    const path = faqItem.children[0].children[0];

    faqItem.classList.add("active");
    path.classList.add("rotatePath");
    showFaqs(faqsItem);

    // remove active class from active element on second click
    if (faqsItemActive === null) return;
    var pathElActive = faqsItemActive.children[0].children[0];
    faqsItemActive.classList.remove("active");
    pathElActive.classList.remove("rotatePath");
    showFaqs(faqsItem);
  });
});

function showFaqs(faqsItem) {
  var faqAnswerEl = document.querySelectorAll(".faqAnswers");
  var paraTwo = faqAnswerEl[0].children[1].classList.add("colored");

  if (faqsItem[0].classList.contains("active")) {
    faqAnswerEl[1].classList.remove("showFaq");
    faqAnswerEl[2].classList.remove("showFaq");
    faqAnswerEl[0].classList.add("showFaq");
    paraTwo;
  } else if (faqsItem[1].classList.contains("active")) {
    faqAnswerEl[0].classList.remove("showFaq");
    faqAnswerEl[2].classList.remove("showFaq");
    faqAnswerEl[1].classList.add("showFaq");
  } else if (faqsItem[2].classList.contains("active")) {
    faqAnswerEl[0].classList.remove("showFaq");
    faqAnswerEl[1].classList.remove("showFaq");
    faqAnswerEl[2].classList.add("showFaq");
  } else {
    faqAnswerEl[0].classList.remove("showFaq");
    faqAnswerEl[1].classList.remove("showFaq");
    faqAnswerEl[2].classList.remove("showFaq");
  }
}
