
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("onmouseover", pintarFondo); //sin parentesis, esta llamando a la funcion, si tuviese los parentesis, le estaria asignando el result a onclick.

function pintarFondo() {
  canvas.style.backgroundColor="#fff";
}
