
//Clase Circulo
class Circle {
  constructor(paramPosX,paramPosY,paramRadio,paramColor,f,image) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
    this.figura = f;
    this.x = 0;
    this.y = 0;
    this.img = image;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(this.img,this.posX - this.radio, this.posY - this.radio,this.radio * 2 , this.radio * 2);
    this.drawContour(ctx);
  }


  drawContour(ctx){
    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.stroke();
    ctx.closePath();
  }

  detectPoint(event){
    var rect = canvas.getBoundingClientRect();
    var mx =   event.clientX - rect.left;
    var my =   event.clientY - rect.top;
    var a = Math.pow((mx - this.posX),2);
    var b = Math.pow((my - this.posY),2);
    var result = Math.sqrt(a+b);
    return this.radio >= result;
  }

  isTheSame(tipo){
    return tipo === this.figura;
  }

}
