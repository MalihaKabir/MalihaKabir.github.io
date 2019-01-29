let keyList = 'abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*'
let temporaryPass = ''

function generatePass(passLength) {
  temporaryPass = ''

  for (var i = 0; i < passLength; i++) {
    temporaryPass += keyList.charAt(Math.floor(Math.random()*keyList.length))
  }
  return temporaryPass
}

function populateForm(enterLength) {
  document.passGen.output.value = generatePass(enterLength)
}
