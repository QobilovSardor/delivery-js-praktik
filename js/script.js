window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Slider section
	// Ease slider
	const sliders = document.querySelectorAll('.slider-slide'),
		prev = document.querySelector('.prev-btn'),
		next = document.querySelector('.next-btn'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total');

	let slideIndex = 1,
		count = 1;
	showSlides(slideIndex)

	if (sliders.length < 10) {
		total.textContent = `0${sliders.length}`
	} else {
		total.textContent = sliders.length
	}

	function showSlides(idx) {
		if (idx > sliders.length) {
			slideIndex = 1;
		} else if (idx < 1) {
			slideIndex = sliders.length;
		}
		sliders.forEach(item => item.style.display = 'none');
		sliders[slideIndex - 1].style.display = 'block';

		if (sliders.length < 10) {
			current.textContent = `0${slideIndex}`
		} else {
			current.textContent = slideIndex
		}
	}

	function plusSlide(idx) {
		showSlides(slideIndex += idx);
	}

	next.addEventListener('click', () => {
		plusSlide(1)
	})
	prev.addEventListener('click', () => {
		plusSlide(-1)
	})

	// Tab section

	// Modal section

	// Loader section

	// Data section

	// Form section
})