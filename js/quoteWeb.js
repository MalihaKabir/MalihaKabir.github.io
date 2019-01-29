let today = new Date()
let day = today.getDay()
// let day = today.getDay() || 7
// day > 0 && day < 7

let quote = document.querySelector('#quote')
let footer = document.querySelector('#footer')
let greeting = document.querySelector('#greeting')
let date = document.querySelector('#date')
let bgColor = document.querySelector('#bgColor')

switch (day) {
    case 0:
      quote.innerHTML = `"Believe you can and you're halfway there."`
      footer.innerHTML = `Theodore Roosevelt`
      date.innerHTML = today
      greeting.innerHTML = `Let's begin the week with the believe. Happy <strong>Sunday</strong>!`
      bgColor.style.background = 'linear-gradient(to right, rgb(0, 128, 255), rgb(255, 255, 255))'
      break
    case 1:
      quote.innerHTML = `The individual who says it is not possible should move out of the way of those doing it.`
      footer.innerHTML = `Tricia Cunningham`
      date.innerHTML = today
      greeting.innerHTML = `Have a great <strong>Monday</strong>!`
      bgColor.style.background = 'linear-gradient(to right, rgb(255, 255, 0), rgb(255, 255, 255))'
      break
    case 2:
      quote.innerHTML = `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on."`
      footer.innerHTML = `Steve Jobs`
      greeting.innerHTML = `Have a great <strong>Tuesday</strong>!`
      date.innerHTML = today
      bgColor.style.background = 'linear-gradient(to right, rgb(128, 255, 255), rgb(0, 128, 255))'
      break
    case 3:
      quote.innerHTML = `Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.`
      footer.innerHTML = `Earl Nightingale`
      greeting.innerHTML = `Have a great <strong>Wednesday</strong>!`
      date.innerHTML = today
      bgColor.style.background = 'linear-gradient(to right, rgb(0, 128, 255), rgb(255, 255, 255))'
      break
    case 4:
      quote.innerHTML = `A year from now you may wish you had started today.`
      footer.innerHTML = `Karen Lamb`
      date.innerHTML = today
      greeting.innerHTML = `Let's make it better instead of regreting! Best wishes for the last day, (<strong>Thursday</strong>) of the week.`
      bgColor.style.background = 'linear-gradient(to right, rgb(255, 255, 255), #dc3545)'
      break
    case 5:
      quote.innerHTML = `There is no friend as loyal as a book.`
      footer.innerHTML = `Ernest Hemingway`
      date.innerHTML = today
      greeting.innerHTML = `Let's grab a book to spend a beautiful <strong>Friday</strong>.`
      // bgColor.style.background = 'linear-gradient(to right, rgb(255, 255, 255), #17a2b8)'
      bgColor.style.background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(0, 128, 255))'
      break
    case 6:
      quote.innerHTML = `It takes a great deal of bravery and courage to be happy. And this is why, happiness is not everyone's cup of tea.`
      footer.innerHTML = `Maliha kabir`
      date.innerHTML = today
      greeting.innerHTML = `Be brave everyday. Have a great <strong>Saturday</strong>!`
      // bgColor.style.background = 'linear-gradient(to right, rgb(128, 255, 0), rgb(0, 64, 0))'
      // bgColor.style.background = 'linear-gradient(to right, rgb(128, 255, 0), rgb(255, 255, 255))'
      bgColor.style.background = 'linear-gradient(to right, rgb(255, 255, 0), rgb(255, 255, 255))'
      break
    default:
      quote.innerHTML = `Sorry for the inconvenient. I am working on it. Thanks for having patience.`
      break
}

// // testNum()
// let num = testNum()
// // document.getElementById("demo").innerHTML = num
// document.querySelector('#demo').innerHTML = num
