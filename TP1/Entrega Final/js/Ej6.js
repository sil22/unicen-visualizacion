//cargar imagen
var ctx = document.getElementById("canvas").getContext("2d");
var contrast = document.getElementById("contrast");// input de tipo rango
var canvas = document.getElementById("canvas");
var img = new Image(); //crea una imagen vacia

function myDrawImageMethod(image) {
  ctx.drawImage(image,0,0);
}

function init() {
  var inputFile = document.getElementById('inputFile1');
  inputFile.addEventListener('change', mostrarImagen, false);
}

function mostrarImagen(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    img = document.getElementById('img1');
    img.src= event.target.result;
    img.onload = function(){
      //adapto las dimensioness del canvas a la img
      canvas.width = img.width;
      canvas.height = img.height;
      //llamo al metodo q dibuja la img en el canvas
      myDrawImageMethod(img);
    }
  }
  reader.readAsDataURL(file);
}

function getRed(imageData,x,y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+0];
}

function getGreen(imageData,x,y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+1];
}

function getBlue(imageData,x,y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+2];
}

function setPixel(imageData,x,y,r,g,b,a) {
  index = (x + y * imageData.width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}

function filtroByN() {
  imageData = ctx.getImageData(0,0,img.width,img.height);
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var blancoYnegro = getRed(imageData,x,y) + getGreen(imageData,x,y) + getBlue(imageData,x,y)/3;
      setPixel(imageData, x, y, blancoYnegro,blancoYnegro,blancoYnegro,255);
    }
  }
  ctx.putImageData(imageData,0,0);
}

function filtroNegativo() {
  imageData = ctx.getImageData(0,0,img.width,img.height);
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      setPixel(imageData, x, y, (255-getRed(imageData,x,y)),(255-getGreen(imageData,x,y)),(255-getBlue(imageData,x,y)),255);
    }
  }
  ctx.putImageData(imageData,0,0);
}

function filtroSepia() {
  imageData = ctx.getImageData(0,0,img.width,img.height);
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var red = (getRed(imageData,x,y) * .393) + (getGreen(imageData,x,y) * .769) + (getBlue(imageData,x,y) * .189);
      var green = (getRed(imageData,x,y) * .349) + (getGreen(imageData,x,y) * .686) + (getBlue(imageData,x,y) * .168);
      var blue = (getRed(imageData,x,y) * .272) + (getGreen(imageData,x,y) * .534) + (getBlue(imageData,x,y) * .131);
      setPixel(imageData, x, y, red, green, blue,255);
    }
  }
  ctx.putImageData(imageData,0,0);
}

function contraste(val) {

  //formula para obtener el contraste con el valor obtenido del elemento ranges
  var contrast = Math.tan(val * Math.PI / 180.0);
  imageData = ctx.getImageData(0,0,img.width,img.height);
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var red = rangeColor(128 + (getRed(imageData,x,y) - 128) * contrast);
      var green = rangeColor(128 + (getGreen(imageData,x,y) - 128) * contrast);
      var blue = rangeColor(128 + (getBlue(imageData,x,y) - 128) * contrast);
      setPixel(imageData, x, y, red, green, blue,255);
    }
  }
  ctx.putImageData(imageData,0,0);
}
// permite mantener el color en el rango 0-255
function rangeColor(pix) {
  if (pix < 0)
  pix = 0;
  if (pix > 255)
  pix = 255;

  return pix;
}

// evento que se ejecuta cada vez que aumentamos o decrementamos el contraste
contrast.addEventListener('change', function() {
  var val = parseInt(this.value);
  contraste(val);
});

function filtroBinarizacion(){
  imageData = ctx.getImageData(0,0,img.width,img.height);
  for (x = 0 ; x < img.width; x ++){
    for (y = 0; y < img.height; y ++){
      var red = (getRed(imageData,x,y));
      var green = (getGreen(imageData,x,y));
      var blue = (getBlue(imageData,x,y));
      var gray =  (0.299 * red + 0.587 * green + 0.114 * blue);

      if(rangeColor(gray) > 128) {
        r = 255;
        g = 255;
        b = 255;
      }
      else {
        r = 0;
        g = 0;
        b = 0;
      }
      setPixel(imageData,x,y,r,g,b,255);
    }
  }
  ctx.putImageData(imageData,0,0);
}


function saturar(){

imageData = ctx.getImageData(0,0,canvas.width,canvas.height);

for (x=0 ; x<canvas	.width; x++){
  for (y=0; y<canvas.height; y++){

    var r=getRed(imageData,x,y);
    var g=getGreen(imageData,x,y);
    var b=getBlue(imageData,x,y);
    var rgb=[r,g,b];
    var hsv= RGBtoHSV (rgb);
    hsv[1] *= 2.2;
    var rgb= HSVtoRGB(hsv);
    r=rgb[0];
    g=rgb[1];
    b=rgb[2];

    setPixel(imageData,x,y,r,g,b,255);
  }
}
  ctx.putImageData(imageData,0,0);
}


//descargar img
var button = document.getElementById('descargar');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
