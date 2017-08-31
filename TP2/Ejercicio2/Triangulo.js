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
  ctx.fillStyle =this.color;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(this.posX,this.posY);
  ctx.lineTo(200,600);
  ctx.lineTo(600,600);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();

};
