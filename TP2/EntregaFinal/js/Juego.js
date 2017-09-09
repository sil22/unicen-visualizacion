
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let figures = [];
let figuresContour = [];
let figureSelected = null;
let inserts = [];

let circle = new Circle(100,200,50,'red',1);
let circleContour = new Circle(850,450,50,'',1);
let square = new Square(250,200,100,'blue',2);
let squareContour = new Square(550,400,100,'',2);
let rect = new Rectangle(100,350,200,100,'green',3);
let rectContour = new Rectangle(650,250,200,100,'',3);

figures.push(circle,square,rect);
figuresContour.push(circleContour,squareContour,rectContour);

for (let i = 0; i < figures.length; i++) {
	figures[i].draw();
	figuresContour[i].drawContour();
}

canvas.onmousedown = function(event) {
	for (let i = 0; i < figures.length; i++) {
		if(figures[i].detectPoint(event)) {
			figureSelected = figures[i];
			figures[i].x = event.clientX - figures[i].posX;
			figures[i].y = event.clientY - figures[i].posY;
		}
	}

	canvas.onmousemove = function(event) {
		if(figureSelected != null){
			figureSelected.posX = event.clientX - figureSelected.x;
			figureSelected.posY = event.clientY - figureSelected.y;
			ctx.clearRect(0,0,canvas.width, canvas.height);
			for (let i = 0; i < figures.length; i++) {
				figures[i].draw();
				figuresContour[i].drawContour();
			}
		}

		canvas.onmouseup = function(event) {
			canvas.onmousemove = null;
			for (let i = 0; i < figuresContour.length; i++) {
				if(figuresContour[i].detectPoint(event) && figuresContour[i].isTheSame(figureSelected.figura) ){
					inserts.push(figureSelected);
					if (inserts.length === figures.length) {
						alert('ganaste!!!');
					}
				}
			}
			figureSelected = null;
		}
	}
}
