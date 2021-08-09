simplyCountdown('#cuenta', {
	year: 2022,
	month: 0, 
	day: 0, 
	hours: 0, 
	minutes: 0, 
	seconds: 0, 
	words: {
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, 
	inline: false,
	enableUtc: false, //aqui dejaria true si quiero poner la hora universal, pero como quiero que sea desde cualquier lugar del mundo y las horas cambian quedaría así.
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		return; 
	}, 
	refresh: 1000, 
	sectionClass: 'simply-section', 
	amountClass: 'simply-amount',
	wordClass: 'simply-word',
	zeroPad: false,
	countUp: false
});