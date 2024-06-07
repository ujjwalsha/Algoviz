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

// welcomeDisplay.classList.add('hidden');
moreDetail.classList.add('hidden');
userDisplay.classList.add('hidden');

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
  welcomeDisplay.classList.add('hidden');
  randomDisplay.classList.remove('hidden');
  refresh.classList.remove('hidden');
  userDisplay.classList.add('hidden');
});

knowMore.addEventListener('click', () => {
  moreDetail.classList.remove('hidden');
  animation();
});

function animation() {
  moreDetail.style.transition = 'animation 1.5s ease-in-out';
  moreDetail.style.animation = 'pop 0.5s 1 linear';
}

cancelBtn.addEventListener('click', () => {
  console.log('hii');
  moreDetail.classList.add('hidden');
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

var temp = [];
var childOne = blocksContainer.childNodes;
linearSearch.addEventListener('click', () => {
  console.log('hello there');
  welcomeDisplay.classList.add('hidden');
  let item = userTarget.value;

  performLinearSearch(childOne, item);
  performRandomLinearSearch(target);
});

async function performRandomLinearSearch(target) {
  var child = blockContainer.childNodes;
  performLinearSearch(child, target);
}

document.querySelector('.check').addEventListener('click', () => {
  blocksContainer.innerHTML = '';
  let data = userValue.value;
  temp = data.split(',');
  console.log('this is ujjwal kumar');

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
  }
});

userInput.addEventListener('click', () => {
  welcomeDisplay.classList.add('hidden');
  console.log('hi there');
  randomDisplay.classList.add('hidden');
  userDisplay.classList.remove('hidden');
});

userInput.addEventListener('input', e => {
  console.log(e);
});

async function performLinearSearch(child, target) {
  let n = child.length;
  await sleep(1000);

  for (let i = 0; i < n; i++) {
    child[i].classList.add('low');
    let block = child[i];
    operation.innerHTML = block.innerHTML + ` !== ${target}`;
    block.style.transition = 'all 1s ';
    block.style.animation = 'animateitem 1s 1';
    if (child[i].innerHTML === target) {
      child[i].classList.add('high');
      child[i].classList.remove('low');
      operation.innerHTML = block.innerHTML + ` == ${target}`;

      block.style.transition = 'all 1s ';
      block.style.animation = 'animateitem 1s 1';
      document.querySelector('.time-complexity').innerHTML =
        'Time Complexity:- O(n)';
      break;
    }
    await sleep(900);
    child[i].classList.remove('low');
  }
}
