// navbar code:

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.navbar').addClass('bg-dark shadow')
	} else {
		$('.navbar').removeClass('bg-dark shadow')
	}
});

$('.navbar-toggler').on('click', () => {
	$('.navbar').addClass('bg-dark shadow')
})

// end of navbar code.

// Starting of type writing JS-(ES6 Class)
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerHTML = `<span>${this.txt}</span>`;

		// Initial Type Speed
		let typeSpeed = 100;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}
// end of type writing.

// SCROLL EFFECT- FadeIn:
let numberOfScrollAppear = 1;

const isVisible = (element) => {
	let elementBox = element.getBoundingClientRect().top;
	let distanceFromTop = window.innerHeight / 1.2;

	if (elementBox < distanceFromTop) {
		return true;
	} else {
		return false;
	}
};

const scrollAppearFunc = (element) => {
	let sectionList = document.querySelectorAll('.onScroll');
	sectionList.forEach((section) => {
		if (isVisible(section)) {
			section.classList.add('scrollAppear');
		}
	});

	// console.log(numberOfScrollAppear);
	numberOfScrollAppear++;
};

// without _Lodash use this:
// const throttle = (fn, wait) => {
// 	let time = Date.now();
// 	return () => {
// 		if (time + wait - Date.now() < 0) {
// 			fn();
// 			time = Date.now();
// 		}
// 	};
// };
// document.addEventListener('scroll', throttle(scrollAppearFunc, 100));

// with lodash:
document.addEventListener('scroll', _.throttle(scrollAppearFunc, 100));
// end of Scroll effect
