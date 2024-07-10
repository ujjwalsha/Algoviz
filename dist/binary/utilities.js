// 'use strict';
const homePage = document.querySelector('.homePage');

homePage.addEventListener('click', () => {
  randomDisplay.classList.add('hidden');
  userDisplay.classList.add('hidden');
  welcomeDisplay.classList.remove('hidden');
  refresh.classList.add('hidden');
});

function addMid(mid, child) {
  child[mid].classList.add('mid');
}

function removeMid(mid, child) {
  child[mid].classList.remove('mid');
}

function addLow(index, child) {
  child[index].classList.add('low');
}

function removeLow(index, child) {
  child[index].classList.remove('low');
}

function addHigh(index, child) {
  child[index].classList.add('high');
}

function removeHigh(index, child) {
  console.log(index);
  console.log(child);
  child[index].classList.remove('high');
}

function addAnimation(index, child) {
  child[index].style.transition = 'all 1s ';
  child[index].style.animation = 'animateitem 1s 1';
}

function targetFound(index, child) {
  child[index].classList.add('found');
}

function removeElementsBefore(arrayElements, index, right) {
  for (let i = 0; i < index; i++) {
    arrayElements[i].remove();
  }
  right -= index;
}

// Function to remove elements after the given index
function removeElementsAfter(arrayElements, index, left) {
  for (let i = arrayElements.length - 1; i > index; i--) {
    arrayElements[i].remove();
  }
  left += arrayElements.length - index;
}

//contributed  by abhishesk singh
function removeElements(left, right) {
  for (let i = left; i <= right; i++) {
    arrayElements[i].remove();
  }
}

function disabledLinear() {
  linearSearch.disabled = true;
  linearSearch.style.cursor = 'not-allowed';
}

function enabledLinear() {
  linearSearch.disabled = false;
  linearSearch.style.cursor = 'default';
}

function disabledFunction() {
  randomNum.disabled = true;
  randomNum.style.cursor = 'not-allowed';
}

disabledFunction();

function enabledFunction() {
  randomNum.disabled = false;
  randomNum.style.cursor = 'default';
}

let listItem = document.querySelectorAll('.required-field');

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('keyup', function (e) {
    // console.log(e);

    if (e.keyCode === 13) {
      e.preventDefault();
      if (this.parentElement.nextElementSibling.querySelector('input')) {
        this.parentElement.nextElementSibling.querySelector('input').focus();
      }
    }
  });
}
