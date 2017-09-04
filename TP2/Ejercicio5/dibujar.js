
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

circle1 = new Circle(100,200,10,'gray');

canvas.onmousedown = function(event) {
  circle1.setPosX(event.clientX);
  circle1.setPosY(event.clientY);
  circle1.dibujarCirculo();


  canvas.onmousemove = function(event) {
    circle1.setPosX(event.clientX);
    circle1.setPosY(event.clientY);
    circle1.dibujarCirculo();
  };
}
canvas.onmouseup = function(event) {
  canvas.onmousemove = null;
}
