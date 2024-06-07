let imgIds = ["zero", "one", "two", "three", "four"];
let imgCount = 0;
let slider = document.querySelector(".slider");
let imgDiv = "";
let sliderHtml = slider.innerHTML;
function rightArrowClick() {
  imgCount++;
  if (imgCount == 5) {
    imgCount = 4;
  }
  slider.innerHTML = sliderHtml;
  imgDiv = document.querySelector(`#${imgIds[imgCount]}`).innerHTML;
  slider.innerHTML = "";
  slider.innerHTML = imgDiv;

  console.log(imgCount);
}

function leftArrowClick() {
  imgCount--;
  if (imgCount == -1) {
    imgCount = 0;
  }
  slider.innerHTML = sliderHtml;
  imgDiv = document.querySelector(`#${imgIds[imgCount]}`).innerHTML;
  slider.innerHTML = "";
  slider.innerHTML = imgDiv;

  console.log(imgCount);
}
export { imgIds, imgCount, rightArrowClick, leftArrowClick };
