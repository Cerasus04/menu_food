require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import  tabs from './modules/tabs.js';
import  timer from './modules/timer.js';
import  modal from './modules/modal.js';
import  cards from './modules/cards.js';
import  forms from './modules/forms.js';
import  slider from './modules/slider.js';
import  calc from './modules/calc.js';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  timer('.timer', '2021-07-30');
  modal('[data-modal]', '.modal', modalTimerId);
  cards();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prewArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  calc();
});
