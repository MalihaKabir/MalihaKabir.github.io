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
