/*
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

const remainingTime = parseInt(prompt('Quanti secondi mancano alla pasta?'));

// setTimeout(() => alert('La pasta e\' pronta!'), remainingTime * 1000);

// setTimeout(function () {
// 	alert('La pasta e\' pronta!');
// }, remainingTime * 1000);

setTimeout(avvisaPasta, remainingTime * 1000);


function avvisaPasta() {
	alert('La pasta e\' pronta!');
}