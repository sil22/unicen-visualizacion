
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
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();
};

//Gradiente
Circle.prototype.gradiente = function () {

var gradient = ctx.createLinearGradient(10, 90, 200, 90);
gradient.addColorStop(0, 'black');
gradient.addColorStop(0.6, 'red');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(50, 300, 200, 250);
};
