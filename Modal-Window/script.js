'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(bntOpenModal);
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < bntOpenModal.length; i++) {
  bntOpenModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', event => {
  console.log('event', event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('key event', event.key);

    closeModel();
  }
});
