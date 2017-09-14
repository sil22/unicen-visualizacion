//Clase Cuadrado
class Square {
  constructor(px,py,l,c,f,image) {
    this.posX = px;
    this.posY = py;
    this.lado = l;
    this.color = c;
    this.figura = f;
    this.x = 0;
    this.y = 0;
    this.img = image;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX,this.posY,this.lado,this.lado);
    ctx.drawImage(this.img,this.posX,this.posY,this.lado,this.lado);
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.closePath();
    this.drawContour(ctx);
  }

  drawContour(ctx) {
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
