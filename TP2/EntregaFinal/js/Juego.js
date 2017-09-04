
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var figures = [];
var circle = new Circle(700,100,50,'red');
var circleContour = new Circle(100,200,50,'red');
var square = new Square(650,190,'blue');
var squareContour = new Square(250,50,'blue');
var rect = new Rectangle(650,350,'green');
var rectContour = new Rectangle(300,200,'green');
var figuresSelected = [];

circle.draw();
square.draw();
rect.draw();

circleContour.drawContour();
rectContour.drawContour();
squareContour.drawContour();

figures.push(circle,square,rect,circleContour,squareContour,rectContour);

for (var i = 0; i < figures.length; i++) {
	figures[i].draw();
	figuresSelected[i] = false;
}

canvas.onmousedown = function(event) {
	for (var i = 0; i < figures.length; i++) {
		if(figures[i].detectarPunto(ctx,event.clientX,event.clientY)){
			figuresSelected[i] = true;
			figures[i].x = event.clientX;
			figures[i].y = event.clientY;
		}
	}

	canvas.onmousemove = function(event) {
		for (var i = 0; i < figuresSelected.length; i++) {
			console.log('here');
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
