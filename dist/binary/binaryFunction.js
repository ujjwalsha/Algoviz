'use strict';
const randomNum = document.querySelector('.randomNum');
const upperNum = document.querySelector('.upper');
const welcomeDisplay = document.querySelector('.welcome-display');
const knowMore = document.querySelector('.know-more');
const cancelBtn = document.querySelector('.cancel-btn');
const moreDetail = document.querySelector('.more-detail');
const linearSearch = document.querySelector('.linear-search');
const userInput = document.querySelector('.userInput');
const userDisplay = document.querySelector('.user-input-display');
const userValue = document.querySelector('.user-input');
const blocksContainer = document.querySelector('.extra-block-container');
const userTarget = document.querySelector('.user-target');

function hideDisplay() {
  userDisplay.classList.add('hidden');
}

hideDisplay();

userValue.addEventListener('input', e => {
  if (e.data === 'a') {
    e.preventDefault();
  }
});

function removePrevious(s, e, mid) {
  let n = blockContainer.childNodes.length;
  let child = blockContainer.childNodes;
  child[s].remove();
  child[e].remove();
  child[mid].remove();
}

function onlynumber(arr) {
  let output = [];

  arr.forEach(e => {
    if (parseInt(e)) {
      output.push(Number(e));
    }
  });
  return output;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

randomNum.addEventListener('click', () => {
  randomDisplay.classList.remove('hidden');
  refresh.classList.remove('hidden');
  userDisplay.classList.add('hidden');
});

userInput.addEventListener('click', () => {
  randomDisplay.classList.add('hidden');
  enabledFunction();
  userDisplay.classList.remove('hidden');
});

//for shortcut key
document.addEventListener('keydown', e => {
  // console.log(e);
  if (e.keyCode === 82) {
    welcomeDisplay.classList.add('hidden');
    randomDisplay.classList.remove('hidden');
    refresh.classList.remove('hidden');
    userDisplay.classList.add('hidden');
  } else if (e.keyCode === 85) {
    welcomeDisplay.classList.add('hidden');
    userDisplay.classList.remove('hidden');
    randomDisplay.classList.add('hidden');
  }
});

var tempArray = [12, 45, 23, 89, 15, 78];
var commaSeparated = tempArray.join(',');

userValue.value = commaSeparated;

var temp = [];
var childOne = blocksContainer.childNodes;

linearSearch.addEventListener('click', async () => {
  let item = userTarget.value;
  var value = targetNum.value;
  disabledBinary();

  if (randomDisplay.classList.contains('hidden')) {
    await performLinearSearch(childOne, item);
  } else {
    console.log(value);
    await performLinearSearch(block, value);
  }

  enabledBinary();
});

let userArrayElement = [];

document.querySelector('.check').addEventListener('click', () => {
  blocksContainer.innerHTML = '';
  let data = userValue.value;
  temp = data.split(',');

  for (let i = 0; i < temp.length; i++) {
    var block = document.createElement('div');
    block.innerHTML = temp[i];
    block.classList.add('animate');
    block.style.border = '2px solid blanchedalmond';
    block.style.width = '2.8em';
    block.style.padding = '20px';
    block.style.borderRadius = '50%';
    block.style.transition = 'all 1s ease-in-out';
    block.style.animation = 'animate 1s 1';
    blocksContainer.appendChild(block);
    userArrayElement.push(block);
  }
});

async function performLinearSearch(child, usertarget) {
  let n = child.length;
  await sleep(1000);

  // let target = parseInt(targetNum.value);
  // console.log(usertarget);

  for (let i = 0; i < n; i++) {
    child[i].classList.add('low');
    let block = child[i];
    if (userDisplay.classList.contains('hidden')) {
      operation.innerHTML = block.innerHTML + ` !== ${usertarget}`;
    } else {
      userOperation.innerHTML = block.innerHTML + ` !== ${usertarget}`;
    }
    block.style.transition = 'all 1s ';
    block.style.animation = 'animateitem 1s 1';
    if (child[i].innerHTML === usertarget) {
      child[i].classList.add('high');
      child[i].classList.remove('low');

      if (userDisplay.classList.contains('hidden')) {
        operation.innerHTML = block.innerHTML + ` == ${usertarget}`;
      } else {
        userOperation.innerHTML = block.innerHTML + ` == ${usertarget}`;
      }
      console.log('element is found');
      block.style.transition = 'all 1s ';
      block.style.animation = 'animateitem 1s 1';

      if (randomDisplay.classList.contains('hidden')) {
        document.querySelector('.time-complexity').innerHTML =
          'Time Complexity:- O(n)';
      } else {
        document.querySelector('.time-complexity-random').innerHTML =
          'Time Complexity:- O(n)';
      }

      break;
    }
    await sleep(900);
    child[i].classList.remove('low');
  }
}
