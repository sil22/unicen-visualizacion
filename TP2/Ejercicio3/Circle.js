//Clase Circulo
function Circle() {
  this.posX;
  this.posY;
  this.radio ;
  this.color;
}

function Circle(paramPosX,paramPosY,paramRadio) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
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

//Imagen
Circle.prototype.dibujarImagen = function (ctx,imgSrc,repeat) {
  ctx.beginPath();
  var image = new Image();
  image.src = imgSrc;
  image.onload = function() {
    image.width = canvas.width;
    image.height = canvas.height;
    var p = ctx.createPattern(image,repeat);
    ctx.fillStyle = p;
  };
  ctx.arc(this.posX,this.posY,this.radio,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
};
