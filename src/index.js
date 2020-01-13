import './style.scss';
import $ from 'jquery';

let num = 0;
setInterval(() => {
  num += 1;
  $('#main').html(`Youve been on this page for ${num} seconds...`);
}, 1000);
