'use strict';

// --------- focus on how to use class in HTML
// aggregate different effects into different classes, instead of manipulating CSS style and change the value, just manipulate the class is easier.

// be careful to use querySelectorAll and querySelector！！！
// querySelector only show the satisfied first element
// so instead use querySelectAll if want to select all elements.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(
    'click',
    openModal
    //    function () {
    //     // console.log('button clicked');

    //     // modal.style.display = 'block';
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    //   }
  );
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// event happening in keyboard: in the whole document
// keydown, keyup, keypress
// when event happens, information about the event can be retrieved
document.addEventListener('keydown', function (event) {
  //   console.log('a key is pressed');
  //   console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

  //   if (event.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }
});
