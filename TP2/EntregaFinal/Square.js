//Clase Cuadrado
class Square {
  constructor(x,y,c) {
    this.posX = x;
    this.posY = y;
    this.color = c;
  }
}

Square.prototype.drawSquare = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,100,100);
  ctx.closePath();
};
