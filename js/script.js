// navbar code:
let navFadeOnScroll = window.pageYOffset;
let documentId = document.getElementById('navId');

let onScrollFunction = () => {
	let currentScrollPosition = window.pageYOffset;
	//  && deviceWidth >= 769
	if (navFadeOnScroll > currentScrollPosition) {
		documentId.style.top = '0';
	} else {
		documentId.style.top = '-100px';
	}
	navFadeOnScroll = currentScrollPosition;
};

window.onscroll = onScrollFunction;
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
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

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

// Fade in effect on Scroll:
let numberOfScrollAppear = 1;

const isVisible = (element) => {
	let elementBox = element.getBoundingClientRect().top;
	let distanceFromTop = window.innerHeight;

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

	console.log(numberOfScrollAppear);
	numberOfScrollAppear++;
};

const throttle = (fn, wait) => {
	let time = Date.now();
	return () => {
		if (time + wait - Date.now() < 0) {
			fn();
			time = Date.now();
		}
	};
};

document.addEventListener('scroll', throttle(scrollAppearFunc, 100));
// end of Scroll effect
