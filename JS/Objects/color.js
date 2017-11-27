$(document).ready(function () {
	var colors = ['black', 'brown','grey','white','red','orange','yellow','green','blue','indigo','violet'];

	var swtches = document.getElementsByClassName('switch');


	for (var i = 0, n=colors.length; i < n ; i++) {
		var swatch = document.createElement('div');
		swatch.className ='switch';
		swatch.style.backgroundColor = colors[i];
		swatch.addEventListener('click', setSwatch);
		document.getElementById('colors').appendChild(swatch);
	}

	function setColor(color) {
		context.fillStyle = color;
		context.strokeStyle = color;
		var active = document.getElementsByClassName('active')[0];
		if (active) {
	active.className = 'switch';
		}
	}
	function setSwatch(e) {
		var swatch = e.target;
		setColor(swatch.style.backgroundColor);
		swatch.className += ' active';

	}
	setSwatch({target: document.getElementsByClassName('switch')[0]
	});	
});