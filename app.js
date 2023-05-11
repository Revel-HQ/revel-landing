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
