//Clase Cuadrado
class Square {
  constructor(px,py,l,c,f) {
    this.posX = px;
    this.posY = py;
    this.lado = l;
    this.color = c;
    this.figura = f;
    this.x = 0;
    this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.fillRect(this.posX,this.posY,this.lado,this.lado);
    ctx.closePath();
  }

  drawContour() {
    ctx.rect(this.posX,this.posY,this.lado,this.lado);
    ctx.stroke();
  }

  isTheSame(tipo){
    return tipo == this.figura;
  }

  detectPoint(event) {
    var r = canvas.getBoundingClientRect();
    var mx = event.clientX - r.left;
    var my = event.clientY - r.top;

    return  (this.posX < mx) && (this.lado + this.posX > mx) && (this.posY < my) && (this.lado + this.posY > my);

  }
}

// Square.prototype.draw = function () {
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
//   ctx.fillRect(this.posX,this.posY,this.lado,this.lado);
//   ctx.closePath();
// };
//
// Square.prototype.drawContour = function () {
//   ctx.rect(this.posX,this.posY,this.lado,this.lado);
//   ctx.stroke();
// };
//
// Square.prototype.isTheSame = function(tipo) {
//   return this.figura = this.tipo;
// };
//
// Square.prototype.detectarPunto = function (clientX,clientY) {
//   var r = canvas.getBoundingClientRect();
//   var mx = clientX - r.left;
//   var my = clientY - r.top;
//
//   return  (this.posX < mx) && (this.lado + this.posX > mx) && (this.posY < my) && (this.lado + this.posY > my);
//
// }
