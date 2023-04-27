/*
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
*/

let counter = 10;

const idInterval = setInterval(() => {
	if (counter == 0) {
		// fermare il setinterval
		clearInterval(idInterval);
		console.log('Buon anno!');
	} else {
		console.log(counter--);
	}
}, 1 * 1000); // 1 secondo espresso in millisecondi

// non va bene perche' non viene eseguito ogni secondo ma e' molto piu' veloce
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

document.querySelector('button').addEventListener('click', function() {
	document.body.style.backgroundColor = getRandomHexColor();
})

function getRandomHexColor() {
	const values = '0123456789abcdef';

	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += values[getRandomInteger(0, 15)];
	}

	return color;

	function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
}