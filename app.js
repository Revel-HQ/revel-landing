/* 
a. Revel's use of short-form videos as the primary means of displaying skill makes it easier for both 
white and blue collar job seekers to showcase what they can do. This also works for people 
looking to recruit talent in either sector.

Also

b. Applying for any job on Revel is as easy asswiping right on the job post. This would instantly 
send your portfolio to the employer for review.


*/

/*
2.Revel is unique in the sense that it is equally effective for both white and blue collar jobs. So a makeup
artist can look for lucrative job offers as easily as a HR manager on our app. Such homogeny 
cannot be found on any other job platform out there.
 */

/* 3. Revel is currently in development and will be released on android and iOS platforms by the end of
2022. If you want to get notified the moment we launch, please sign up and join our
waiting list. */

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
    faqsItem.forEach((faqEl) => {
      const pathEl = faqEl.children[0].children[0];
      faqEl.classList.remove("active");
      pathEl.classList.remove("rotatePath");
    });
    showFaqs(i)
    const path = faqItem.children[0].children[0];

    faqItem.classList.add("active");
    path.classList.add("rotatePath");
    return () => {
      faqItem.classList.remove("active");

      path.classList.remove("rotatePath");
    };
  });
});

function showFaqs(i) {
  var faqAnswerEl = document.querySelector(".faqAnswers")
  console.log(i)
  faqAnswerEl.classList.add("showFaq")
 
  switch (i) {
    case 0:
      var paraOne = document.createElement("p")
      var paraTwo = document.createElement("p")
      var paraThree = document.createElement("p")
      var textOne = document.createTextNode("Revel's use of short-form videos as the primary means of displaying skill makes it easier for both white and blue collar job seekers to showcase what they can do. This also works for people looking to recruit talent in either sector.")
      var textTwo = document.createTextNode("Also")
      var textThree = document.createTextNode("Applying for any job on Revel is as easy asswiping right on the job post. This would instantly send your portfolio to the employer for review.")
      paraOne.appendChild(textOne)
      paraTwo.appendChild(textTwo)
      paraTwo.classList.add("colored")
      paraThree.appendChild(textThree)
      faqAnswerEl.appendChild(paraOne)
      faqAnswerEl.appendChild(paraTwo)
      faqAnswerEl.appendChild(paraThree)
      break;
    case 1:
      var paraFour = document.createElement("p")
      var textFour = document.createTextNode("Revel is unique in the sense that it is equally effective for both white and blue collar jobs. So a makeup artist can look for lucrative job offers as easily as a HR manager on our app. Such homogeny cannot be found on any other job platform out there.")
      paraFour.appendChild(textFour)
      faqAnswerEl.appendChild(paraFour)
      break;
    case 1:
      var paraFive = document.createElement("p")
      var textFive = document.createTextNode("Revel is currently in development and will be released on android and iOS platforms by the end of 2022. If you want to get notified the moment we launch, please sign up and join our waiting list.")
      paraFive.appendChild(textFive)
      faqAnswerEl.appendChild(paraFive)
      break;
    
    default:
      faqAnswerEl.classList.remove("showFaq")
  }
}
