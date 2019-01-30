let css = document.querySelector('p')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let body = document.getElementById('bodyGradient')

// // tests:
// left.addEventListener('input', function (event) {
// //   body.style.background = event.target.value
// // })
//
// right.addEventListener('input', function () {
//   body.style.background = event.target.value
// })

// // Our function:
// left.addEventListener('input', function () {
//   // body.style.background = "linear-gradient(to right, " + left.value + ", " + right.value + ")"
//   body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`
//   css.textContent = `${body.style.background};`
// })
//
// right.addEventListener('input', function () {
//   body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`
//   css.textContent = body.style.background
// })

// DRY = Don't Repeat Yourself
function selectColor() {
  body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`
  css.textContent = body.style.background
}

// left.addEventListener('input', selectColor)
// right.addEventListener('input', selectColor)
// // We won't call the above functions initially. We'll wait for user's call. This is why we are not calling these functions right now, instead waiting for user's call.
