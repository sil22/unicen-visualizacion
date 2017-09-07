
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var figures = [];
var figureContour = [];
var circle = new Circle(100,200,50,'red');
var circleContour = new Circle(800,500,50);
var square = new Square(250,200,100,'blue');
var squareContour = new Square(550,500,100);
var rect = new Rectangle(100,350,200,100,'green');
var rectContour = new Rectangle(600,300,200,100);
var figuresSelected = [];

figures.push(circle);
figureContour.push(circleContour,squareContour,rectContour);
console.log(figures);
for (var i = 0; i < figures.length; i++) {
	figures[i].draw();
	figureContour[i].drawContour();
	figuresSelected[i] = false;
}

canvas.onmousedown = function(event) {
	for (var i = 0; i < figures.length; i++) {
		if(figures[i].detectarPunto(event.clientX,event.clientY)){
			console.log(figures[i]);
			console.log('entro ');
			figuresSelected[i] = true;
			figures[i].x = event.clientX;
			figures[i].y = event.clientY;
		}
	}

	canvas.onmousemove = function(event) {
		for (var i = 0; i < figuresSelected.length; i++) {
			if(figuresSelected[i]){
				figures[i].posX = event.clientX;
				figures[i].posY = event.clientY;
				ctx.clearRect(0,0,canvas.width, canvas.height);
				for (var i = 0; i < figures.length; i++) {
					figures[i].draw();
				}
			}
		}
	};
}
canvas.onmouseup = function(event) {
	canvas.onmousemove = null;
	for (var i = 0; i < figures.length; i++) {
		figuresSelected[i] = false;
	}
}
