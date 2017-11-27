$(document).ready(function () {
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
});