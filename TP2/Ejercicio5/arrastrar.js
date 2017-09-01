
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	width = canvas.width,
	height = canvas.height,

	 circle1 = new Circle(100,200,40,'gray');

	canvas.onmousedown = function(event) {
  //  console.log(event);
	circle1.setPosX(event.clientX);
 	circle1.setPosY(event.clientY);
 	circle1.setRadio(10);
	circle1.dibujarCirculo();

	canvas.onmousemove = function(event) {
  // 	console.log('mousemove');
  // 	console.log('client: (' + event.clientX + ', ' + event.clientY + ')');
 	circle1.setPosX(event.clientX);
 	circle1.setPosY(event.clientY);
 	circle1.setRadio(10);
 	ctx.clearRect(0,0,canvas.width, canvas.height);
 	circle1.dibujarCirculo();
  };
}
	canvas.onmouseup = function(event) {

 }
