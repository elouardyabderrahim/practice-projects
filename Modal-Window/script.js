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
// for (let i = 0; i < bntOpenModal.length; i++) {
//   bntOpenModal[i].addEventListener('click', function () {
//     // document.querySelector('.hidden').style.display = 'block';
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }
for (let i = 0; i < bntOpenModal.length; i++) {
  bntOpenModal[i].addEventListener('click', openModel);
}

// btnCloseModal.addEventListener('click', () => {
//   document.querySelector('.hidden').style.display = 'none';
// });
// btnCloseModal.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

/* we use in the second eventListener the document instead of btnCloseModal,
cause the event is focussed on the document not the btnCloseModal element. 
*/
// document.addEventListener('keydown', event => {
//   console.log('event', event);
//   if (event.key === 'Escape') {
//     document.querySelector('.hidden').style.display = 'none';
//     overlay;
//   }
// });
// document.addEventListener('keydown', event => {
//   console.log('event', event);
//   if (event.key === 'Escape') {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   }
// });
document.addEventListener('keydown', event => {
  console.log('event', event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('key event', event.key);

    closeModel();
  }
});
