

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





function firstPlus(){
  document.getElementsByClassName("secondSectionSecondDiv")[0].style.display="flex";
  document.getElementsByClassName("secondSectionFirstDiv")[0].style.visibility="hidden";
}


function secondPlus(){
  document.getElementsByClassName("fourthSectionSecondDiv")[0].style.display="flex";
  document.getElementsByClassName("fourthSectionFirstDiv")[0].style.visibility="hidden";
}

function thirdPlus(){
  document.getElementsByClassName("fifthSectionSecondDiv")[0].style.display="flex";
  document.getElementsByClassName("fifthSectionFirstDiv")[0].style.visibility="hidden";
}






function firstX(){
  document.getElementsByClassName("secondSectionSecondDiv")[0].style.display="none";
  document.getElementsByClassName("secondSectionFirstDiv")[0].style.visibility="visible";
}


function secondX(){
  document.getElementsByClassName("fourthSectionSecondDiv")[0].style.display="none";
  document.getElementsByClassName("fourthSectionFirstDiv")[0].style.visibility="visible";
}

function thirdX(){
  document.getElementsByClassName("fifthSectionSecondDiv")[0].style.display="none";
  document.getElementsByClassName("fifthSectionFirstDiv")[0].style.visibility="visible";
}