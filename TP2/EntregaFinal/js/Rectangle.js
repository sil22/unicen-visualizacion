//Clase Rectangulo
class Rectangle {
  constructor(x,y,c) {
    this.posX = x;
    this.posY = y;
    this.color = c;
    this.tipo = 1;
  }
}

Rectangle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,200,100);
  ctx.closePath();
};

Rectangle.prototype.drawContour = function () {
  ctx.rect(this.posX,this.posY,200,100);
  ctx.stroke();
};

Rectangle.prototype.equals = function(figura) {
  return figura.tipo = this.tipo;
};

Rectangle.prototype.detectarPunto = function (ctx,clientX,clientY) {
  console.log(ctx.isPointInPath(clientX,clientY));
  return ctx.isPointInPath(clientX,clientY);
}
