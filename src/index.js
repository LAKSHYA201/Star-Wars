import style from "./style.css";
import menu from "./images/menu.png";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import leftBtn from "./images/leftButton.png";
import rightBtn from "./images/rightButton.png";
import background from "./images/background.jpg";
import darthWader from "./images/darthWader.png";

import {
  imgIds,
  imgCount,
  rightArrowClick,
  leftArrowClick,
} from "./imageCarousel.js";

import visible from "./dropDown.js";

/************************Code for the drop-down menu********************* */
let listItem = document.querySelectorAll("li.menu-item");
let menuItemArray = [];
for (const item of listItem) {
  menuItemArray.push(item.textContent);
}
console.log(menuItemArray);
let menuItemObj = new visible();

let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  if (menuItemObj.visible == false) menuItemObj.repopulate(menuItemArray);
  else menuItemObj.hide();
});
/************************************************************************ */

/***********************Code for the image carousel********************** */

let leftArrowBtn = document.querySelector(".leftArrowBtn");
let rightArrowBtn = document.querySelector(".rightArrowBtn");

rightArrowBtn.addEventListener("click", () => rightArrowClick());
leftArrowBtn.addEventListener("click", () => leftArrowClick());

/************************************************************************ */

let musicBtn = document.querySelector(".player");
let audioElement = document.querySelector(".audio");

musicBtn.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
