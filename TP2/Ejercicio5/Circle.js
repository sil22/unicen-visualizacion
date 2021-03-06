
//Clase Circulo
class Circle {
  constructor(paramPosX,paramPosY,paramRadio,paramColor) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
    this.x = 0;
    this.y = 0;
  }
}

Circle.prototype.setPosX = function (x) {
  this.posX = x;
};

Circle.prototype.setPosY = function (y) {
  this.posY = y;
};

Circle.prototype.dibujarCirculo = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};

Circle.prototype.detectarPunto = function (clientX,clientY) {
  //formula p detectar la ubicacion del mouse dentro del circulo
 var a = Math.pow((clientX-this.posX),2);
 var b = Math.pow((clientY-this.posY),2);
 var c = a + b;
 var result = Math.sqrt(c);
 return this.radio > result;

 // if (result > this.radio){
 //   console.log('afuera del circulo');
 // }
 // else {
 //   console.log('adentro del circulo');
 // }
};
