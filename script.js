"use strict";

const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");
const btnRandom = document.querySelector(".random");
const image = document.querySelector(".image");
const btnDark = document.querySelector(".btnDark");
const btnOff = document.querySelector(".btnOff");
const btnOn = document.querySelector(".btnOn");
const background = document.querySelector("body");
const title = document.querySelector("h1");

btnRandom.addEventListener("click", function () {
  let random = Math.trunc(Math.random() * 5) + 1;
  // console.log(random);
  image.src = `animal-${random}.jpg`;
});

let i = 1;

btnNext.addEventListener("click", function () {
  if (i < 5) {
    i++;
    console.log(i);
    image.src = `animal-${i}.jpg`;
  }
});

btnPrevious.addEventListener("click", function () {
  if (i > 1) {
    i--;
    console.log(i);
    image.src = `animal-${i}.jpg`;
  }
});

let darkMode = false;
btnDark.addEventListener("click", function () {
  if (darkMode === false) {
    btnOff.classList.add("hidden");
    btnOn.classList.remove("hidden");
    background.classList.add("darkBody");
    title.classList.add("darkFont");
    // console.log("dark mode ON");
    darkMode = true;
  } else if (darkMode === true) {
    btnOff.classList.remove("hidden");
    btnOn.classList.add("hidden");
    background.classList.remove("darkBody");
    // console.log("dark mode is OFF");
    darkMode = false;
  }
});
