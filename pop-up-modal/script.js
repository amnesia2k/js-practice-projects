'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// function to open modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  // event handler to show modal
  showModal[i].addEventListener('click', openModal);

// event handler to close modal
btnCloseModal.addEventListener('click', closeModal);

// event handler to close modal by clicking outside of modal
overlay.addEventListener('click', closeModal);

// event handler to close modal by clicking ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
