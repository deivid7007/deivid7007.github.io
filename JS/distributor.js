var rejime, canvas, context, radius,dragging,  startX, startY, endX, endY, moyseStatus, draggingClear;


$(document).ready(function () {
	canvas = document.getElementById('canvas');
	context = canvas.getContext("2d");
	radius = 10;
	dragging = false;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.lineWidth = radius*2;
	ColorPallete();
	Radius(10);
    context.fillStyle = 'white';
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
	
	$("img").click(function () {
		rejime = $(this).attr("id");
		moyseStatus = 0;
		dragging =  false;
		Distribute();
	});
	$("#clear").click(function () {
        context.clearRect(0,0, canvas.width, canvas.height); 	
    })
});

function Distribute() {
	switch(rejime)
	{
		case "pen":Pen();break;
		case "line":
				moyseStatus = 1;
				Line();
			break;
		case "sircle": 
				moyseStatus = 1;
				Circle();
			break;
		case "rect":
			moyseStatus = 1;
			Rectangle();
			break;
		case "square": 
		 	moyseStatus = 1;
			Rectangle();
			break;
		case "guma":Guma() ;break;

	}
}

function Pen(){
		var drawPen = function(e) {
		    if (dragging && rejime === "pen") {
		     	context.lineTo(e.clientX, e.clientY);
		    	context.stroke();
		    	context.beginPath();
		    	// draw point
		    	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		    	context.fill();
		    	context.beginPath();
		    	context.moveTo(e.clientX, e.clientY);
		    }
		}

		var engagePen = function (e) {
			dragging  = true;
				drawPen;
		}

		var disengagePen = function () {
			dragging  = false;
			context.beginPath()
		}

		canvas.addEventListener('mousedown', engagePen);
		canvas.addEventListener('mousemove', drawPen);
		canvas.addEventListener('mouseup', disengagePen);
}

function Line() {
		function Draw(e) {
		if (rejime === "line") {
		    context.moveTo(startX, startY);
		    context.lineTo(endX, endY);
		    context.stroke();
		    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		    context.fill();
		    context.beginPath();
			}
		}

		var engageLine = function(e) {
			startX = e.clientX;
			startY = e.clientY;	
		}

		var disengageLine = function(e) {
			endX = e.clientX;
			endY = e.clientY;
			Draw(e);

		}

			canvas.addEventListener('mousedown', engageLine);
			canvas.addEventListener('mouseup', disengageLine);
}

function Circle() {
	function Draw(e) {
		if (rejime === "sircle") {
			radiusCircle = (endX - startX) / 2;
		    context.beginPath();
		    context.arc(startX, startY, radiusCircle, 0, Math.PI*2);
		    context.stroke();
		    }
		}

		var engageLine = function(e) {
			startX = e.clientX;
			startY = e.clientY;	
		}

		var disengageLine = function(e) {
			endX = e.clientX;
			endY = e.clientY;
			Draw(e);

		}

			canvas.addEventListener('mousedown', engageLine);
			canvas.addEventListener('mouseup', disengageLine);
}

function Rectangle() {
	function Draw(e) {
			var x,y;
			if (rejime === "rect") {
				x = (endX - startX);
				y = (endY - startY);
			}
			else if (rejime === "square") {
				x = y = endX - startX;
			}


		    context.beginPath();
		    context.rect(startX, startY, x, y);
		    context.stroke();
		    
		}

		var engageLine = function(e) {
			startX = e.clientX;
			startY = e.clientY;	
		}

		var disengageLine = function(e) {
			endX = e.clientX;
			endY = e.clientY;
			if (rejime === "rect" || rejime === "square" ) { 
				Draw(e);
			}

		}

			canvas.addEventListener('mousedown',engageLine);
			canvas.addEventListener('mouseup', disengageLine);
}

function Guma() {
			
	var drawClear = function(e) {
		    if (draggingClear && rejime === "guma") {
		     	context.lineTo(e.clientX, e.clientY);
		    	context.stroke();
		    	context.beginPath();
		    	// draw point
		    	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		    	context.fill();
		    	context.beginPath();
		    	context.moveTo(e.clientX, e.clientY);
		    }
		}

		var engageClear = function (e) {
			draggingClear  = true;
			drawClear;
		}

		var disengageClear = function () {
			draggingClear  = false;
			context.beginPath()
		}

		canvas.addEventListener('mousedown', engageClear);
		canvas.addEventListener('mousemove', drawClear);
		canvas.addEventListener('mouseup', disengageClear);
}

function Radius(n) {
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
			defaultRadius = n,
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
}

function ColorPallete() {
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
		$("#guma").click(function () {
			setColor('white');
		});		
}
