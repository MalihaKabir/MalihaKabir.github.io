let date, hour, minute, second, clock, color;

const clockyFunction = () => {
  // built-in objects:
  date = new Date()
  hour = date.getHours()
  minute = date.getMinutes()
  second = date.getSeconds()

if (hour <= 9) {
  hour = `0${hour}`
}
if (minute <= 9) {
  minute = `0${minute}`
}
if (second <= 9) {
  second = `0${second}`
}

clock = `${hour} : ${minute} : ${second}`
color = `#${hour}${minute}${second}` // color value will change as time(digit) changes.

// document.getElementById('clock').innerHTML = clock
document.querySelector('#clock').textContent = clock
document.querySelector('body').style.background = color

// Calls a function or executes a code snippet after specified delay: fn(f: fn(), ms:number):number
// it means, setTimeout(f, ms)
setTimeout(clockyFunction, 1000) // as 1000ms = 1s.
}

clockyFunction()
