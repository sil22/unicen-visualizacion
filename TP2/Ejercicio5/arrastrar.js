
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

circle1 = new Circle(100,200,40,'gray');
circle1.dibujarCirculo();

canvas.onmousedown = function(event) {
	if(circle1.detectarPunto(event.clientX,event.clientY)){
		circle1.setPosX(event.clientX);
		circle1.setPosY(event.clientY);

		canvas.onmousemove = function(event) {
			circle1.setPosX(event.clientX);
			circle1.setPosY(event.clientY);
			ctx.clearRect(0,0,canvas.width, canvas.height);
			circle1.dibujarCirculo();
		};
		canvas.onmouseup = function(event) {
			canvas.onmousemove = null;
		}
	}
}
