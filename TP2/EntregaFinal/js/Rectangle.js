//Clase Rectangulo
class Rectangle {
  constructor(x,y,w,h,c) {
    this.posX = x;
    this.posY = y;
    this.color = c;
    this.width = w;
    this.height = h;
    this.figura = 1;
    this.x = 0;
    this.y = 0;
  }
}

Rectangle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX,this.posY,this.width,this.height);
  ctx.closePath();
};

Rectangle.prototype.drawContour = function () {
  ctx.rect(this.posX,this.posY,this.width,this.height);
  ctx.stroke();
};

Rectangle.prototype.isTheSame = function(tipo) {
  return this.figura = this.tipo;
};

Rectangle.prototype.detectarPunto = function (clientX,clientY) {
   var r = canvas.getBoundingClientRect();
   var mx =   clientX - rect.left;
   var my =   clientY - rect.top;
   return  (this.posX < mx) && (this.width + this.posX > mx) && (this.posY < my)
   && (this.height + this.posY > my);

}
