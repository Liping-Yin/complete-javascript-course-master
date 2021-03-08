'use strict';
/*
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
// #style
// in line style not stored in css file
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // won't show anything
console.log(message.style.backgroundColor);

//style stored in css file or even not exists in css file
// in css file
console.log(getComputedStyle(message).display);
// not in css file
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px'; // get number out of a string

// change css file
document.documentElement.style.setProperty('--color-primary', 'orange');

// #Attribute
const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
// inline change
logo.alt = 'beautiful logo I designed';
//not standard attributes
console.log(logo.designer); // undefined, since not standard attribute for this element
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// compare two ways of access attributes
console.log(logo.src); //absolute url
console.log(logo.getAttribute('src')); // relative url

// data attributes
console.log(logo.dataset.versionNumber);

// #classes
logo.classList.add('c', 'd');
logo.classList.remove('d');
logo.classList.toggle('d');
logo.classList.contains('d');
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

*/

/******************** Bankist Project ***************/
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(x/y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});
