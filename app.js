"use strict";

const rangeSlider = document.getElementById("range-slider"),
  fillSlider = document.querySelector(".bar__fill"),
  priceText = document.querySelector(".trial__top-price");
// $ 0<span class="trial__top-title">/month</span>

function changing() {
  let rangeValue = rangeSlider.value;
  let fillWodth = rangeValue * 3.125;
  fillSlider.style.width = fillWodth + "%";
  priceText.innerHTML = `$ ${rangeValue}<span class="trial__top-title">/month</span>`;
}

document.addEventListener("input", changing);
