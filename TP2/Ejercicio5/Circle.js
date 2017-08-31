// Ejercicio 2
// 2) Genereunconjuntodefigurasbidimensionales.
// a. Dibujar en distintas posiciones al azar
// b. Aplicarles distintas formas
// c. Dibujar con distinto color
// d. Llenar con distintos patrones


//Clase Circulo
function Circle() {
  this.posX;
  this.posY;
  this.radio ;
  this.color;
}

function Circle(paramPosX,paramPosY,paramRadio,paramColor) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = paramColor;
}

Circle.prototype.dibujarCirculo = function () {
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();

};
