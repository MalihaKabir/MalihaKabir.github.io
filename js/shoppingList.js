let input = document.getElementById('input')
let button = document.getElementById('enter')
let ol = document.querySelector('ol')
// let li = document.querySelector('li')
// let li = document.getElementsByTagName('li')
let li = document.getElementsByClassName('bold')[0]
let list = ol.getElementsByTagName('li')
let btnDelete = document.getElementsByClassName('btnDelete')

// Adding items:
function inputValueLength() {
  return input.value.length
}

function createItems() {
  // let createBtn = document.li.appendChild(document.createElement('button'))
  // createBtn.innerHTML = 'Delete'
  // createBtn.onclick = removeParent

  let li = document.createElement('li')
  var btn = document.createElement("button");
  var btnEdit = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  btnEdit.appendChild(document.createTextNode("Mark as Done"));

  li.appendChild(document.createTextNode(input.value))
  li.appendChild(btn);
  li.appendChild(btnEdit);
  ol.appendChild(li)
  input.value = ""

  // var btn = document.createElement("button");
  // btn.appendChild(document.createTextNode("Delete"));
 	// li.appendChild(btn);
 	// btn.onclick = li.classList.toggle('done');
  btn.addEventListener('click', function () {
    // li.classList.toggle('done')
    li.remove()
  })

// my assignment (only editing):
  btnEdit.addEventListener('click', function () {
    li.classList.toggle('done') && li.appendChild(document.createTextNode(input.value))
  })
}

function forMouseClick() {
  if (inputValueLength() > 0) {
      createItems()
    }
}

function forEnter(event) {
    if (inputValueLength() > 0 && event.keyCode === 13) {
      createItems()
    }
}


// Deleting items:
// add event listener to first existing 7 btns in HTML file:
// for (var i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', function () {
//     li.remove()
//   })
// }
//
// for (var i = 0; i < btnDelete.length; i++) {
//   btnDelete[i].addEventListener('click', function () {
//     list.ol.removeChild(list)
//   })
// }
//
// function strikeThrough(e) {
//     if (e.target.tagName === "li") {
//         e.target.classList.toggle("done");
//     }
// }
//
// li.addEventListener('click', function () {
//   // li.classList.toggle('done')
//   li.remove()
// })
//
// for (var i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', function () {
//     li[i].classList.toggle('done')
//   })
// }

button.addEventListener('click', forMouseClick)
input.addEventListener('keypress', forEnter)
