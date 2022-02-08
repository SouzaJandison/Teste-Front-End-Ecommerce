import Swiper, { Navigation } from 'swiper';
import 'swiper/css'

import '../lib/fontawesome-all.min.js'

const handlePosition = document.querySelectorAll('#handle-position');
const cepNumber = document.querySelector('#cep-number');
const sizeOptions = document.querySelectorAll('.option');
const calculateShipping = document.querySelector('#shipping-submit');
const handleDescription = document.querySelector('#handle-description');
const description = document.querySelector('.description-text');
const handleComments = document.querySelector('#handle-comments');
const comments = document.querySelector('.comments-text');

handlePosition.forEach((item, index) => {
  item.addEventListener('click', () => {
    const slideBox = document.querySelector('.slide-show-box');
    const size = slideBox.offsetWidth;

    slideBox.scroll(size * index, 0);
  })
});

sizeOptions.forEach(item => {
  item.addEventListener('click', () => {
    sizeOptionsRemoveActive();
    item.classList.add('active');
  })
});

cepNumber.addEventListener('input', event => {
  var text = event.target.value
    .replace(/\D/g, '')
    .match(/(\d{0,5})(\d{0,3})/);

  event.target.value = !text[2] ? text[1] : 
    `${text[1]}-${text[2]}`;
});

calculateShipping.addEventListener('submit', event => {
  event.preventDefault();
});

handleDescription.addEventListener('click', () => {
  if (!description.classList.contains('close')) {
    description.classList.add('close');
    handleDescription.classList.add(`open`);
  } else {
    description.classList.remove('close');
    handleDescription.classList.remove(`open`);
  }
});

handleComments.addEventListener('click', () => {
  if (!comments.classList.contains('close')) {
    comments.classList.add('close');
    handleComments.classList.add(`open`);
  } else {
    comments.classList.remove('close');
    handleComments.classList.remove(`open`);
  }
});

function sizeOptionsRemoveActive() {
  sizeOptions.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation],
  slidesPerView: 5,
  slidesPerGroup: 1,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    499: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 5
    }
  }
});