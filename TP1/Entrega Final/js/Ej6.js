//cargar imagen
var ctx = document.getElementById("canvas").getContext("2d");
var contrast = document.getElementById("contrast");// input de tipo rango
var canvas = document.getElementById("canvas");
var img = new Image(); //crea una imagen vacia
var imgOriginal = new Image();

function myDrawImageMethod(image) {
  ctx.drawImage(image,0,0);
}

function imageOriginal() {
  myDrawImageMethod(imgOriginal);
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
    imgOriginal.src = img.src;

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
      var bn = (getRed(imageData,x,y) + getGreen(imageData,x,y) + getBlue(imageData,x,y)/3);
      setPixel(imageData, x, y, bn, bn, bn, 255);
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

// Filtro Saturacion
function filtroSaturacion(){
  imageData = ctx.getImageData(0,0,img.width,img.height);

  for (x = 0 ; x < img.width; x++){
    for (y = 0; y < img.height; y++){

      var r=getRed(imageData,x,y);
      var g=getGreen(imageData,x,y);
      var b=getBlue(imageData,x,y);
      //guardo las tres variables en un arr
      var rgb=[r,g,b];
      //convierto rgb en hsv
      var hsv= rgbToHsv(rgb);
      hsv[1] *= 2.2; //en saturacion le multiplico un valor predeterminado
      //vuelvo hsv a rgb
      var rgb= hsvToRgb(hsv);
      r=rgb[0];
      g=rgb[1];
      b=rgb[2];
      setPixel(imageData,x,y,r,g,b,255);
    }
  }
    ctx.putImageData(imageData,0,0);
}

function rgbToHsv(color) {
        var red,green,blue,hue,saturation,value;
        red= color[0];
        green= color[1];
        blue= color[2];
        min = Math.min(red, green, blue);
        max = Math.max(red, green, blue);
        delta = max - min;

        if(max != 0){
            saturation = delta / max;
          }
        else {
            saturation = 0;
            hue = -1;
            return [hue, saturation, undefined];
        }
        if(red === max) {
            hue = (green - blue) / delta;
          }      // between yellow & magenta
        else if( green === max )
            hue = 2 + (blue - red) / delta;  // between cyan & yellow
        else
            hue = 4 + (red - green) / delta;  // between magenta & cyan
            hue = hue * 60;                // degrees
        if( hue < 0 ){
            hue += 360;
          }
        if (isNaN(hue)) {
            hue = 0
        }
        value = max;

        return [hue,saturation,value];
    }

    function hsvToRgb(color) {
        var i,hue,saturation,value,red,green,blue;
        hue= color[0];
        saturation= color[1];
        value= color[2];
        if(saturation === 0 ) {
            // achromatic (grey)
            red = green = blue = value;
            return [red,green,blue];
        }
        hue = hue/60;
        i = Math.floor(hue);
        f = hue - i;
        p = value * ( 1 - saturation );
        q = value * ( 1 - saturation * f );
        t = value * ( 1 - saturation * ( 1 - f ) );
        switch(i) {
            case 0:
                red = value;
                green = t;
                blue = p;
                break;
            case 1:
                red = q;
                green = value;
                blue = p;
                break;
            case 2:
                red = p;
                green = value;
                blue = t;
                break;
            case 3:
                red = p;
                green = q;
                blue = value;
                break;
            case 4:
                red = t;
                green = p;
                blue = value;
                break;
            default:        // case 5:
                red = value;
                green = p;
                blue = q;
                break;
        }
        return [red,green,blue];
    }

//descargar img
var button = document.getElementById('descargar');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
