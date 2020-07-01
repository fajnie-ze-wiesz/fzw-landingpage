import {
  sprinkle
} from './sprinkle.js'

window.onload = () => {
  smoothScroll();
  // sprinkles();
}

function sprinkles() {
    sprinkle(document.querySelector('h1'), {
      sprinkleElements: null,
      colors: [
        // '#ef420c',
        '#10305f',
        '#ebf1f4',
        // '#9dabbc'
      ]
    });
    sprinkle(document.querySelector('#sekcja2 img'), {
      sprinkleElements: null,
      colors: [
        '#ef420c',
        '#10305f',
        // '#ebf1f4',
        '#9dabbc'
      ]
    });
    sprinkle(document.querySelector('#sekcja4'), {
      sprinkleElements: null,
      colors: [
        '#ef420c',
        '#10305f',
        '#9dabbc'
      ]
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