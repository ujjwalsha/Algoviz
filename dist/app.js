'use strict';

const paraContent = document.querySelectorAll('.para');
const backBtn = document.querySelector('.backbutton');
const wrapper = document.querySelector('.wrapper');
const sortingBtn = document.querySelector('.sorting');
const openerSlide = document.querySelectorAll('.opener');
const searchingBtn = document.querySelector('.searching');
const expandable = document.querySelectorAll('.expandable');

function hidden() {}

openerSlide.forEach(e => {
  e.addEventListener('mouseenter', () => {
    openerSlide.forEach(item => {
      item.classList.remove('active');
    });

    e.classList.add('active');
  });
});

backBtn.addEventListener('click', e => {
  window.history.back();
});

// redirection to another page
sortingBtn.addEventListener('click', () => {
  const url = 'sorting/sorting.html';
  window.open(url, '_self');
});

//searching button to open search section
searchingBtn.addEventListener('click', () => {
  const url = 'binary.html';
  window.open(url, '_self');
});

for (let i = 0; i < expandable.length; i++) {
  expandable[i].addEventListener('click', function () {
    // this.classList.toggle('fa-angle-up');
    // expandable[1].classList.toggle('fa-angle-up');

    this.children[1].classList.toggle('fa-angle-up');
    console.log(this.nextElementSibling);
    if (this.children[1].classList.contains('fa-angle-up')) {
      this.nextElementSibling.classList.remove('hidden');
      this.nextElementSibling.classList.add('expand');
    } else {
      this.nextElementSibling.classList.add('hidden');
    }
  });
}
