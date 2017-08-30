
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//canvas.addEventListener("onmouseover", pintarFondo); //sin parentesis, esta llamando a la funcion, si tuviese los parentesis, le estaria asignando el result a onclick.

canvas.onmouseover = function (event) {
  pintarFondo('green');
}
canvas.onmouseleave = function (event) {
  pintarFondo('red');
}

canvas.onmouseup = function (event) {
  pintarFondo('black');
}


function pintarFondo(color) {
  document.getElementById('canvas').style.backgroundColor=color;
}
