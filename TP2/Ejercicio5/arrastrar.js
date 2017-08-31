
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var arrastrar = false;
var delta = new Object();
var X = canvas.width / 2;
var Y = canvas.height / 2;

var circle1 = new Circle(400,250,100);

function oMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return { // devuelve un objeto
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top)
  };
}
    canvas.addEventListener("mousedown", function(evt) {
      var mousePos = oMousePos(canvas, evt);
      circle1.dibujarCirculo();
      if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
        arrastrar = true;
        delta.x = X - mousePos.x;
        delta.y = Y - mousePos.y;

      }
    }, false);

    canvas.addEventListener("mousemove", function(evt) {
      var mousePos = oMousePos(canvas, evt);
      console.log(arrastrar);
      if (arrastrar) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        X = mousePos.x + delta.x,
        Y = mousePos.y + delta.y

        circle1.dibujarCirculo();
      }
    }, false);

    canvas.addEventListener("mouseup", function(evt) {
      arrastrar = false;
    }, false);
