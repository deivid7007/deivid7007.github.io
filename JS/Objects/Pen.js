$(document).ready(function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	var radius = 10;
	var dragging = false;
	


	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	context.lineWidth = radius*2;
		function Drawing(e) {
		    if (dragging) {
		    	context.lineTo(e.clientX, e.clientY);
		    	context.stroke();
		    	context.beginPath();
		    	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		    	context.fill();
		    	context.beginPath();
		    	context.moveTo(e.clientX, e.clientY)
		    }
		}

		var engage = function (e) {
			dragging  = true;
			Drawing(e);
		}

		var disengage = function () {
			dragging  = false;
			context.beginPath()
		}



		canvas.addEventListener('mousedown', engage);
		canvas.addEventListener('mousemove', Drawing);
		canvas.addEventListener('mouseup', disengage);




		// custom pen 

		var setRadius = function (newRadius) {
			if (newRadius < minR) {
				newRadius = minR;
			}
			else if(newRadius > maxR){
				newRadius = maxR;
			}
			radius = newRadius;
			context.lineWidth = radius*2;
			defR.innerHTML = radius;

		}


		var minR = 0.5,
			maxR = 100,
			defaultRadius = 10,
			interval = 5,
			defR = document.getElementById('defR'),
			backR = document.getElementById('backR'),
			nextR = document.getElementById('nextR');


		backR.addEventListener('click', function () {
			setRadius(radius - interval);
		});

		nextR.addEventListener('click', function () {
			setRadius(radius + interval);
		});


		//  color palete 
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

		$("#clear").click(function () {
			setColor("white");
			setRadius(10);
		});
});
