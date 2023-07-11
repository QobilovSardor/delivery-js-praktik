window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Slider section
	// Ease slider
	const sliders = document.querySelectorAll('.slider-slide'),
		prev = document.querySelector('.prev-btn'),
		next = document.querySelector('.next-btn'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total'),
		wrapper = document.querySelector(".slider-wrapper"),
		width = window.getComputedStyle(wrapper).width,
		sliderInner = document.querySelector('.slider-inner');

	sliderInner.style.display = "flex";
	sliderInner.style.width = 100 * sliders.length + '%';
	sliders.forEach(item => {
		item.style.width = width
	})
	let sliderIndex = 1,
		offset = 0;
	function totalCount() {
		if (sliders.length < 10) {
			total.textContent = `0${sliders.length}`
			current.textContent = `0${sliderIndex}`
		} else {
			total.textContent = sliders.length
			current.textContent = sliderIndex
		}
	}
	totalCount()

	// dots
	const indecators = document.createElement('div'),
		dots = [];
	indecators.classList.add('slider-indicators');
	wrapper.append(indecators);

	for(let i = 0; i < sliders.length; i++) {
		const dot = document.createElement('button')
		dot.setAttribute('data-slider-dot', i + 1)
		if (i == 0) { dot.classList.add('active') }
		indecators.append(dot);
		dots.push(dot)
	}
	function activeDots() {
		dots.forEach(item => item.classList.remove('active'));
		dots[sliderIndex - 1].classList.add('active');
	}
	next.addEventListener('click', () => {
		if (offset == +width.slice(0, width.length - 2) * (sliders.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2)
		}

		if (sliderIndex == sliders.length) {
			sliderIndex = 1;
		} else {
			sliderIndex++
		}	
		totalCount()
		sliderInner.style.transform = `translateX(-${offset}px)`;
		activeDots()
	})

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (sliders.length - 1)
		} else {
			offset -= +width.slice(0, width.length - 2)
		}

		sliderInner.style.transform = `translateX(-${offset}px)`

		if (sliderIndex == 1) {
			sliderIndex = sliders.length;
		} else {
			sliderIndex--
		}
		totalCount()
		activeDots()
	})

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideDot = e.target.getAttribute('data-slider-dot');
			sliderIndex = slideDot;
			offset = +width.slice(0, width.length - 2) * (slideDot - 1)
			sliderInner.style.transform = `translateX(-${offset}px)`;
			activeDots();
			totalCount()
			
		})
	})

	// Tab section

	// Modal section

	// Loader section

	// Data section

	// Form section
})

