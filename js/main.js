// _.throttle ====================

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCounter = 0;

const throttledCallback = _.throttle(event => {
  mouseMoveCounter += 1;

  coordsOutputRef.textContent = `Кол-во вызовов mousemove: ${mouseMoveCounter},
  X: ${event.clientX},
  Y: ${event.clientY}`;
}, 500);

// function throttledCallback(event) {
//   mouseMoveCounter += 1;

//   coordsOutputRef.textContent = `Кол-во вызовов mousemove: ${mouseMoveCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// }

window.addEventListener("mousemove", throttledCallback);

// _.debounce

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");

let inputCounter = 0;

const debounceCallback = _.debounce(event => {
  inputCounter += 1;

  outputRef.textContent = `Кол-во вызовов input: ${inputCounter},
    Значение: ${event.target.value}`;
}, 500);

// function debounceCallback(event) {
//   inputCounter += 1;

//   outputRef.textContent = `Кол-во вызовов input: ${inputCounter},
//     Значение: ${event.target.value}`;
// }

inputRef.addEventListener("input", debounceCallback);
