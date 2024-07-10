'use strict';

//popup load while window loading
window.addEventListener('load', () => {
  setTimeout(function open(e) {
    popup.style.display = 'block';
  }, 50);
});

// for slider
let mySlider = document.querySelector('#input');
let mySlider2 = document.querySelector('#range');
let value = document.querySelector('.result');
let value1 = document.querySelector('.resultSpeed');
let block = document.querySelector('.bar');
let containerBox = document.querySelector('.flex-container');
let randomArray = document.getElementById('random-array');
let bubble_btn = document.getElementById('bubble-sort');
let selection_btn = document.getElementById('selection-sort');
let insertion_btn = document.getElementById('insertion-sort');
document.querySelector('video').playbackRate = 2.5;
let Popup_close = document.querySelector('#close');
let popup = document.querySelector('.popup');
let closeError = document.querySelector('.close');
let popupError = document.querySelector('.better-view');
let backBtn = document.querySelector('.back');
let min = 2;
let max = mySlider.value;

backBtn.addEventListener('click', () => {
  window.history.back();
});

let numOfBars = mySlider.value;
console.log('value of slider' + numOfBars);
let unsorted_array = new Array(numOfBars);

//this rendering on display on everytime you are refeshing the page
createRandomArray();
renderBars(unsorted_array);

Popup_close.addEventListener('click', () => {
  popup.style.display = 'none';
  popup.style.transform = 'translateY(10%)';
});

//responsive for popup error for slider
let x = window.matchMedia('(max-width: 480px)');
mySlider.addEventListener('input', () => {
  value.innerText = mySlider.value;
  if (x.matches && mySlider.value > 10) {
    popupError.classList.remove('hidden');
  } else {
    popupError.classList.add('hidden');
  }
});

// for responsive window
if (x.matches) {
  popupError.classList.add('hidden');
} else {
  popupError.classList.add('hidden');
}

closeError.addEventListener('click', () => {
  popupError.classList.add('hidden');
  value.innerText = 10;
});

function disableSortingBtn() {
  bubble_btn.disabled = true;
  selection_btn.disabled = true;
  insertion_btn.disabled = true;
}

function enableSortingBtn() {
  bubble_btn.disabled = false;
  selection_btn.disabled = false;
  insertion_btn.disabled = false;
}

function disableSizeSlider() {
  mySlider.disabled = true;
}

function enableSizeSlider() {
  mySlider.disabled = false;
}

function disableNewArray() {
  randomArray.disabled = true;
}

function enableNewArray() {
  randomArray.disabled = false;
}

//generate random number
function randomNum(min, max) {
  max = mySlider.value;
  return Math.floor(Math.random() * (max - min)) + min;
}

//create random array
function createRandomArray() {
  numOfBars = mySlider.value;
  for (let i = 0; i <= numOfBars; i++) {
    unsorted_array[i] = randomNum(min, max);
  }
}
// render the bars on the display
function renderBars(array) {
  // let size = mySlider.value;
  array.length = mySlider.value;
  for (let i = 0; i < array.length; i++) {
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.width = '2em';
    bar.innerHTML = array[i];
    bar.style.cssText =
      'color: blanchedalmond; padding: 0.5em; font-size:1.2em; transition: height 0.6s ease-in-out; @media screen (max-width:480px){font-size: 0.5em;}';
    bar.style.border = '2px solid blanchedalmond';
    bar.style.height = array[i] * 20 + 'px';
    containerBox.appendChild(bar);
  }
  // array.length = mySlider.value;
}

const media = () => {
  let q = matchMedia('(max-width: 480px)');

  if (q.matches) {
    document.querySelector('.bar').style.width = '1em';
  } else {
    document.querySelector('.bar').style.width = '2em';
  }
};

onload = media;

// create event on clicking new array button
randomArray.addEventListener('click', function (array) {
  enableSortingBtn();
  enableSizeSlider();
  createRandomArray();
  containerBox.innerHTML = '';
  renderBars(unsorted_array);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitforme(millisec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, millisec);
  });
}

let delay = 100;

mySlider2.addEventListener('input', () => {
  value1.innerText = mySlider2.value;
  delay = 60 - parseInt(mySlider2.value);
});

bubble_btn.addEventListener('click', async function (array) {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArray();
  await bubbleSort(unsorted_array);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});

insertion_btn.addEventListener('click', async function (array) {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArray();
  await insertionSort(unsorted_array);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});

selection_btn.addEventListener('click', async function (array) {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArray();
  await selectionSort(unsorted_array);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});
