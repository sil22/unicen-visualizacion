
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

  var circle = new Circle(50,100,50,'red');
  var square = new Square(150,50,'blue');
  var rect = new Rectangle(300,50,'green');

  circle.drawCircle();
  square.drawSquare();
  rect.drawRect();

	
