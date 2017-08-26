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

function Rectangulo(x,y,r,c) {
  this.posX = x;
  this.posY = y;
  this.radio = r;
  this.color = c;
}

Rectangulo.prototype.dibujarRect = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,this.radio,100);
  ctx.closePath();
};

var rect1 = new Rectangulo(40,10,100,'red');
var rect2 = new Rectangulo(300,60,100,'blue');
var rect3 = new Rectangulo(600,30,100,'green');

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
  ctx.lineTo(25,25);
  ctx.lineTo(25,105);
  ctx.fill();
  ctx.closePath();

};

var t1 = new Triangulo(40,10,'red');
var t2 = new Triangulo(30,60,'blue');
var t3 = new Triangulo(600,30,'green');

t1.dibujarTriangulo();
t2.dibujarTriangulo();
t3.dibujarTriangulo();
