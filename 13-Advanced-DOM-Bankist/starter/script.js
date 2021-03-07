'use strict';

//===== select element =======
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// by these two almost can finish the select tasks
const header = document.querySelector('.header');
console.log(header);
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// when you know all the elements very well
document.getElementById('section--1');
document.getElementsByClassName('btn');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// ======== Creating and Inserting elements ===========
const message = document.createElement('div');
message.classList.add('cookie-message'); // in the css file this class exist already
message.textContent = 'we create an cookie element';
message.innerHTML =
  'we create an cookie element <button class = "btn btn-close-cookie">Got it </button>';

// DOM element is unique,they only exist in one place at a time

// # Insert
// child node

header.prepend(message); // add as first child
header.append(message); // add as last child

// by clone, an element exists mor ethan one place
header.append(message.cloneNode(true));

// siblings
header.before(message);
header.after(message);

//# delete
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message);
    message.remove(); // won't work for message cloneNode
  });

//=============== Styles, Attribute and Classes =====

//======= Modal window ======

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
