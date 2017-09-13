//Clase Rectangulo
class Rectangle {
  constructor(px,py,w,h,c,f,image) {
    this.posX = px;
    this.posY = py;
    this.color = c;
    this.width = w;
    this.height = h;
    this.figura = f;
    this.x = 0;
    this.y = 0;
    this.img = image;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height);
    ctx.fillRect(this.posX,this.posY,this.width,this.height);
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
  }

  drawContour() {
    ctx.beginPath();
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.stroke();
    ctx.closePath();
  }

  isTheSame(tipo) {
    return tipo === this.figura;
  }

  detectPoint(event) {
    var r = canvas.getBoundingClientRect();
    var mx = event.clientX - r.left;
    var my = event.clientY - r.top;

    return  (this.posX < mx) && (this.width + this.posX > mx) && (this.posY < my) && (this.height + this.posY > my);
  }

}
