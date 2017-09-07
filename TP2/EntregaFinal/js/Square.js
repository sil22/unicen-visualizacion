//Clase Cuadrado
class Square {
  constructor(x,y,l,c) {
    this.posX = x;
    this.posY = y;
    this.lado = l;
    this.color = c;
    this.figura = 3;
    this.x = 0;
    this.y = 0;
  }
}

Square.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,this.lado,this.lado);
  ctx.closePath();
};

Square.prototype.drawContour = function () {
  ctx.rect(this.posX,this.posY,this.lado,this.lado);
  ctx.stroke();
};

Square.prototype.isTheSame = function(tipo) {
  return this.figura = this.tipo;
};

Square.prototype.detectarPunto = function (clientX,clientY) {
  var r = canvas.getBoundingClientRect();
  var mx = clientX - r.left;
  var my = clientY - r.top;

  return  (this.posX < mx) && (this.lado + this.posX > mx) && (this.posY < my) && (this.lado + this.posY > my);

}
