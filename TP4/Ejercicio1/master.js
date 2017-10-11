window.setInterval(rotate, 3000);
var angle = 0;
function rotate() {
  angle+=3;
  document.getElementById('image').style.transform = "translate(200px, 100px) rotate("+angle+"deg)";
  document.getElementById('inner').style.transform = "translate(800px, 0px)";
  document.getElementById('inner').style.color = 'red';
  document.getElementById('inner').innerHTML = "Buena Buenaaaa";

}

function rotate2() {
  document.getElementById('image2').style.transform = "translate(400px, 0px)";
}
