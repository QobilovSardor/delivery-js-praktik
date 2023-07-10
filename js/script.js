window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Slider section
	// Ease slider
	const sliders = document.querySelectorAll('.slider-slide'),
		prev = document.querySelector('.prev-btn'),
		next = document.querySelector('.next-btn'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total');

	let sliderIndex = 1;
	showSlider(sliderIndex);
	if(sliders.length < 10) {
		total.textContent = `0${sliders.length}`
	} else {
		total.textContent = sliders.length
	}
	function showSlider(idx) {
		if(idx > sliders.length) {
			sliderIndex = 1;
		} else if(idx < 1) {
			sliderIndex = sliders.length
		}
		console.log(sliderIndex);
		sliders.forEach(slider => slider.style.display = 'none');
		sliders[sliderIndex - 1].style.display = 'block';
		if (sliders.length < 10) {
			current.textContent = `0${sliderIndex}`
		} else {
			current.textContent = sliderIndex
		}
	}

	function plusSlider(idx){
		showSlider(sliderIndex += idx)
	}

	next.addEventListener('click', () => {
		plusSlider(1)
	})

	prev.addEventListener('click', () => {
		plusSlider(-1)
	})
	// Tab section

	// Modal section

	// Loader section

	// Data section

	// Form section
})