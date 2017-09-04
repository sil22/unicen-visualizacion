//Clase Cuadrado
class Square {
  constructor(x,y,c) {
    this.posX = x;
    this.posY = y;
    this.color = c;
    this.figura = 3;
  }
}

Square.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,100,100);
  ctx.closePath();
};


Square.prototype.drawContour = function () {
  ctx.rect(this.posX,this.posY,100,100);
  ctx.stroke();
};

Square.prototype.equals = function(figura) {
  return figura.tipo = this.tipo;
};

Square.prototype.detectarPunto = function (ctx,clientX,clientY) {
  return ctx.isPointInPath(clientX,clientY);
}
