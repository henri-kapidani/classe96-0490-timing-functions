/*
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/

const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnSegna = document.querySelector('#segna');
const btnReset = document.querySelector('#reset');

let counter = 0;
let idInterval;

btnStart.addEventListener('click', function () {
	console.log('start');
	// far partire il cronometro
	idInterval = setInterval(() => {
		counter++;
		console.log(counter);
	}, 1000);
	// console.log('id interval: ', idInterval);
});

btnStop.addEventListener('click', function () {
	// bloccare il cronometro
	clearInterval(idInterval);
	console.log('stop');
});

btnReset.addEventListener('click', function () {
	// resettare a zero il contatore
	counter = 0;
	console.log('reset');
});

btnSegna.addEventListener('click', function () {
	// bloccare il cronometro
	console.log('time: ', counter);
});