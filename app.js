const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

window.smoothScroll = function (target, val=1) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  let newTargetY = val > 1 ? targetY + val : targetY
  scroll(scrollContainer, scrollContainer.scrollTop, newTargetY, 0);
};

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
    smoothScroll(document.getElementById("faqsContainer"), 160);

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

// form
var baseUrl = "https://waitlist.revelhq.co";
var industryList = document.querySelector("#industryList"),
  submitBtn = document.querySelector("#submitBtn"),
  waitListEmail = document.querySelector("#waitListEmail"),
  waitListForm = document.querySelector("#waitListForm"),
  failedWaitlist = document.querySelector("#failedWaitlist"),
  successWaitlist = document.querySelector("#successWaitlist");
async function getIndustries() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/industries`);
    if (data?.status) {
      data?.data?.map((item) => {
        const option = document.createElement("option");
        const text = document.createTextNode(item?.name);
        option.appendChild(text);
        option.setAttribute("value", item?.id);
        option.appendChild(text);
        industryList.appendChild(option);
      });
    }
  } catch (err) {
    console.log(err);
  }
}
getIndustries();

function handleChange() {
  submitBtn.classList.remove("formComplete");
  if (waitListEmail.value === "") return;
  if (industryList.value === "Select your job industry") return;
  submitBtn.classList.add("formComplete");
}
async function handleSubmit(e) {
  e.preventDefault();
  if (waitListEmail.value === "") return;
  if (industryList.value === "Select your job industry") return;
  submitBtn.children[0].classList.remove("hideForm");
  submitBtn.setAttribute("disabled", true)
  try {
    const { data } = await axios.post(`${baseUrl}/api/waitlist/join`, {
      industry_id: industryList.value,
      email: waitListEmail.value,
    });
    console.log(data);
    if (data?.status) {
      waitListForm.classList.add("hideForm");
      successWaitlist.classList.add("showNewElement");
      setTimeout(() => {
        waitListForm.classList.remove("hideForm");
        submitBtn.setAttribute("disabled", false)
        waitListForm.reset();
        successWaitlist.classList.remove("showNewElement");
        submitBtn.children[0].classList.add("hideForm");
        handleChange();
      }, 10000);
    }
  } catch (err) {
    if (err.message === "Request failed with status code 400") {
      waitListForm.classList.add("hideForm");
      failedWaitlist.classList.add("showNewElement");
      setTimeout(() => {
        submitBtn.setAttribute("disabled", false)
        handleChange();
        waitListForm.reset();
        waitListForm.classList.remove("hideForm");
        failedWaitlist.classList.remove("showNewElement");
        submitBtn.children[0].classList.add("hideForm");
      }, 10000);

      console.log(err.message);
    }
    submitBtn.children[0].classList.add("hideForm");
  }
}

submitBtn.addEventListener("click", (e) => handleSubmit(e));
