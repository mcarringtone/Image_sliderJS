const container = document.querySelector('.images');
const backBtn = document.querySelector('.preview');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
backBtn.addEventListener('click', nextSlide);

function nextSlide(){
	container.animate(
		[
			{ opacity: '0.1' },
			{ opacity: '1.0' }
		],
		{ duration: 1000, fill: 'forwards' }
	);
	if (counter === 4) {
		counter = -1;
	}

	counter++;

	container.style.backgroundImage = `url(img/bgc-${counter}.png`;
}
function backSlide(){
	container.animate(
		[
			{ opacity: '0.1' },
			{ opacity: '1.0' }
		],
		{ duration: 1000, fill: 'forwards' }
	);
	if (counter === 0) {
		counter = 5;
	}

	counter++;

	container.style.backgroundImage = `url(img/bcg-${counter}png)`;
}
