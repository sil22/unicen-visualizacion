// Ejercicio 2
// 2) Genereunconjuntodefigurasbidimensionales.
// a. Dibujar en distintas posiciones al azar
// b. Aplicarles distintas formas
// c. Dibujar con distinto color
// d. Llenar con distintos patrones

var ctx = document.getElementById("canvas").getContext("2d");

//Clase Circulo
function Circle() {
  this.posX;
  this.posY;
  this.radio ;
  this.color;
}

function Circle(paramPosX,paramPosY,paramRadio,paramColor) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = paramColor;
}

Circle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};


var circle1 = new Circle(400,250,100,'#141444');
var circle2 = new Circle(250,250,100,'#141444');
var circle3 = new Circle(500,250,70,'#000000');
var circle4 = new Circle(100,250,60,'#14ff44');

circle1.dibujar();
circle2.dibujar();
circle3.dibujar();
circle4.dibujar();

//Clase Rectangulo
function Rectangulo() {
  this.posX;
  this.posY;
  this.radio;
  this.color;
}

function Rectangulo(x,y,c) {
  this.posX = x;
  this.posY = y;
  this.color = c;
}

Rectangulo.prototype.dibujarRect = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,200,100);
  ctx.closePath();
};

Rectangulo.prototype.putImage = function () {
  ctx.rect(100, 100, 200, 100);
  ctx.fillStyle = img;
  ctx.fill();
};

var rect1 = new Rectangulo(40,10,'red');
var rect2 = new Rectangulo(300,60,'blue');
var rect3 = new Rectangulo(600,30,'green');

rect1.dibujarRect();
rect2.dibujarRect();
rect3.dibujarRect();

//Clase Triangulo
function Triangulo() {
  this.posX;
  this.posY;
  this.color;
}

function Triangulo(x,y,c) {
  this.posX = x;
  this.posY = y;
  this.color = c;
}

Triangulo.prototype.dibujarTriangulo = function () {
  ctx.beginPath();
  ctx.moveTo(this.posX,this.posY);
  ctx.lineTo(200,600);
  ctx.lineTo(600,600);
  ctx.fillStyle = this.color;
  ctx.closePath();

};

var t1 = new Triangulo(400,400,'blue');
t1.dibujarTriangulo();

// Gradiente
var gradient = ctx.createLinearGradient(10, 90, 200, 90);
gradient.addColorStop(0, 'black');
gradient.addColorStop(0.6, 'red');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(50, 300, 200, 250);

//Imagen
var image = new Image();
image.src = "foco";
image.onload = function() {
img = ctx.createPattern(image,"repeat");
rect1.putImage(image);
// ctx.rect(0, 0, 150, 100);
// ctx.fillStyle = image;
// ctx.fill();
}
