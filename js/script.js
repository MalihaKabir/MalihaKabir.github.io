// typed js code:
var options = {
  // strings: ["A Front-End Developer", "&amp;", "A Javascript Developer"],
  strings: ["A Front-End Developer", "A Javascript Developer"],
  typeSpeed: 100
}

var typed = new Typed(".blink", options);

// navbar code:
let navFadeOnScroll = window.pageYOffset
let documentId = document.getElementById('navId')

let onScrollFunction = function () {
  let currentScrollPosition = window.pageYOffset
  if (navFadeOnScroll > currentScrollPosition) {
    documentId.style.top = '0'
  } else {
    documentId.style.top = '-100px'
  }
  navFadeOnScroll = currentScrollPosition
}

window.onscroll = onScrollFunction
