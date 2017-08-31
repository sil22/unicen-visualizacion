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
