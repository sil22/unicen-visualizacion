var ctx = document.getElementById("canvas").getContext("2d");


//funcion que detecta el mousedown y llama ala funcion detectarPunto del obj circle
canvas.onmousedown = function(event) {
  console.log(event);
  circle1.detectarPunto(event.clientX,event.clientY)
 };

//Clase Circulo
function Circle() {
  this.posX;
  this.posY;
  this.radio ;
  this.color;
}

function Circle(paramPosX,paramPosY,paramRadio) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
}

Circle.prototype.dibujarCirculo = function () {
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();
};

Circle.prototype.detectarPunto = function (clientX,clientY) {
  //formula p detectar la ubicacion del mouse dentro del circulo
 var a = Math.pow((clientX-this.posX),2);
 var b = Math.pow((clientY-this.posY),2);
 var c = a + b;
 var result = Math.sqrt(c);

 if (result > this.radio){
   alert('afuera');
 }
 else {
   alert('adentro');
 }
};

var circle1 = new Circle(300,200,100,'#141444');
circle1.dibujarCirculo();
