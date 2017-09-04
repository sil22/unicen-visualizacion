
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var circlesSelected = [];

circle1 = new Circle(100,200,40,'gray');
circle2 = new Circle(100,100,40,'red');
circle3 = new Circle(100,300,40,'yellow');
circle4 = new Circle(100,400,40,'blue');

circles.push(circle1,circle2,circle3,circle4);


for (var i = 0; i < circles.length; i++) {
  circles[i].dibujarCirculo();
  circlesSelected[i] = false;
}

canvas.onmousedown = function(event) {
  for (var i = 0; i < circles.length; i++) {
    if(circles[i].detectarPunto(event.clientX,event.clientY)){
      console.log(circles[i].x);
      circlesSelected[i] = true;
      circles[i].x = event.clientX;
      circles[i].y = event.clientY;
    }
  }

  canvas.onmousemove = function(event) {

    for (var i = 0; i < circlesSelected.length; i++) {
      console.log('here');
      if(circlesSelected[i]){
        circles[i].posX = event.clientX;
        circles[i].posY = event.clientY;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for (var i = 0; i < circles.length; i++) {
          circles[i].dibujarCirculo();
        }

      }
    }
  };
}
canvas.onmouseup = function(event) {
  canvas.onmousemove = null;
  for (var i = 0; i < circles.length; i++) {
    circlesSelected[i] = false;
  }
}
