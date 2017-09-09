
//Clase Circulo
class Circle {
  constructor(paramPosX,paramPosY,paramRadio,paramColor,f) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
    this.figura = f;
    this.x = 0;
    this.y = 0;
  }

  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.shadowBlur = 40;
    ctx.shadowColor = 'black';
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  drawContour(){
    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
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
//
//
// Circle.prototype.draw = function () {
//   ctx.fillStyle = this.color;
//   ctx.beginPath();
//   ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
//   ctx.fill();
//   ctx.closePath();
// };
//
// Circle.prototype.drawContour = function () {
//   ctx.beginPath();
//   ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
//   ctx.lineWidth = 5;
//   ctx.strokeStyle = 'black';
//   ctx.stroke();
//   ctx.closePath();
// };
//
// Circle.prototype.detectarPunto = function (clientX,clientY) {
//   //formula p detectar la ubicacion del mouse dentro del circulo
//   var a = Math.pow((clientX-this.posX),2);
//   var b = Math.pow((clientY-this.posY),2);
//   var result = Math.sqrt(a+b);
//   console.log(result);
//   return this.radio > result;
// }
//
// Circle.prototype.isTheSame = function(tipo) {
//   return this.figura = this.tipo;
// };
