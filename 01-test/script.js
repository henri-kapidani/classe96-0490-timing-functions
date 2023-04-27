const endTime = new Date().getTime() + 30 * 1000;

document.querySelector('#btn1').addEventListener('click', function() {
	while (new Date().getTime() < endTime) {}
	console.log('finito il ciclo');
});

document.querySelector('#btn2').addEventListener('click', function() {
	document.querySelector('h1').style.backgroundColor = 'salmon';
	console.log('finita esecuzione codice bottone 2');
});

console.log('finito codice principale'); // primo console