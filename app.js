
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

function showFaqs(i) {
  var faqsItem = document.querySelectorAll(".faqsItem")
  console.log(faqsItem[0].children[0].children[0])
    var faqEl = faqsItem[i], 
    svgPathEl = faqsItem[i].children[0].children[0];
    if(faqEl.classList.contains("active")) {
      faqEl.classList.remove("active");
      if(svgPathEl.classList.contains("rotatePath")) {
        svgPathEl.classList.remove("rotatePath");
      }
    } else {
      faqEl.classList.add("active");
      svgPathEl.classList.add("rotatePath");
    }
}
