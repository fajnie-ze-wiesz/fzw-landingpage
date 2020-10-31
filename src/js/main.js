import {
  sprinkle
} from './sprinkle.js'

window.onload = () => {
  smoothScroll();
  sprinkle(document.querySelector('.logoBox'), [document.querySelector('#logo')], {
    sprinkleElements: null,
    colors: [
      '#ef420c',
      '#10305f',
      // '#ebf1f4',
      // '#9dabbc',
  ],
    animate: false,
    rotate: true
  });
  sprinkle(document.querySelector('#sekcja2 img'), [], {
    sprinkleElements: null,
    colors: [
      '#ef420c',
      '#10305f',
      // '#ebf1f4',
      // '#9dabbc',
  ],
    animate: false,
    rotate: true
  });
  sprinkle(document.querySelector('#sekcja4 .box'), [document.querySelector('#sekcja4 .text-box')], {
    sprinkleElements: null,
    colors: [
      '#ef420c',
      '#10305f',
      // '#ebf1f4',
      // '#9dabbc',
  ],
    animate: false,
    rotate: true
  });

}

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}