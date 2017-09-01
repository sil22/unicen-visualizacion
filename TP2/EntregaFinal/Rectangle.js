//Clase Rectangulo
class Rectangle {
  constructor(x,y,c) {
    this.posX = x;
    this.posY = y;
    this.color = c;
  }
}

Rectangle.prototype.drawRect = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,200,100);
  ctx.closePath();
};
