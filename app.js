

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
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
    smoothScroll(document.getElementById('faqsContainer'))

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
