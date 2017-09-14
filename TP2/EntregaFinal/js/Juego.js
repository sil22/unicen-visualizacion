$("document").ready(function() {
	$('#myModal').on('show.bs.modal', function (e) {
		if (!data) return e.preventDefault() // stops modal from being shown
	})
	$('.wait').show();
})


//imagenes de figuras
let image1 = new Image();
image1.src = "images/zorro.png";
image1.onload = function () {
}
let image2 = new Image();
image2.src = "images/cerdito.png";
image2.onload = function () {
}
let image3 = new Image();
image3.src = "images/cocodrilo.png";
image3.onload = function () {
}

//espera un segundo para que terminen de cargar las img
setTimeout(comenzarJuego, 1000);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let figures = [];
let figuresContour = [];
let figureSelected = null;
let inserts = [];
let color = 'white';
let cronometro;

let circle1 = new Circle(100,200,50,color,1,image1); //nivel 1
let circle2 = new Circle(480,80,50,color,1,image2); // nivel 2
let circle3 = new Circle(50,450,50,color,1,image3); // nivel 3

let circleContour1 = new Circle(800,380,50,'',1);
let circleContour2 = new Circle(500,260,50,'',1);
let circleContour3 = new Circle(850,160,50,'',1);

let square1 = new Square(250,200,100,color,2,image3);
let square2 = new Square(50,20,100,color,2,image2);
let square3 = new Square(300,500,100,color,2,image1);

let squareContour1 = new Square(500,400,100,'',2);
let squareContour2 = new Square(930,200,100,'',2);
let squareContour3 = new Square(950,480,100,'',2);

let rect1 = new Rectangle(150,350,200,100,color,3,image2);
let rect2= new Rectangle(200,50,200,100,color,3,image3);
let rect3 = new Rectangle(50,530,200,100,color,3,image1);

let rectContour1 = new Rectangle(600,200,200,100,'',3);
let rectContour2 = new Rectangle(900,350,200,100,'',3);
let rectContour3 = new Rectangle(650,470,200,100,'',3);


function comenzarJuego() {
	$('.wait').hide();
	figures.push(circle1,square1,rect1);
	figuresContour.push(circleContour1,squareContour1,rectContour1);
	dibujarFiguras();
	cargarReloj();

	canvas.onmousedown = function(event) {

		for (let i = 0; i < figures.length; i++) {
			if(figures[i].detectPoint(event)) {
				figureSelected = figures[i];
				figures[i].x = event.clientX - figures[i].posX;
				figures[i].y = event.clientY - figures[i].posY;
			}
		}
		canvas.onmousemove = function(event) {
			if(figureSelected != null){
				figureSelected.posX = event.clientX - figureSelected.x;
				figureSelected.posY = event.clientY - figureSelected.y;
				dibujarFiguras();

			}
			canvas.onmouseup = function(event) {
				canvas.onmousemove = null;
				for (let i = 0; i < figuresContour.length; i++) {
					if(figuresContour[i].detectPoint(event) && figuresContour[i].isTheSame(figureSelected.figura) ){
						inserts.push(figureSelected);
						if (inserts.length === figures.length) {
							detenerReloj();
							$('.wait').hide();
							$('#modal' ).show();

							// ctx.clearRect(0,0,canvas.width, canvas.height);
							// for (let i = 0; i < figures.length; i++) {
							// 	figuresContour[i].drawContour(ctx);
							//
							// 	figures[i].posX = event.clientX - figures[i].posX;
							// 	figures[i].posY = event.clientY - figures[i].posY;
							// 	figures[i].draw(ctx);
							// }
						}
					}
				}
				figureSelected = null;
			}
		}
	}
}

function detenerReloj() {
	clearInterval(cronometro);
}

function cargarReloj() {
	contador_s = 0;
	contador_m = 0;
	s = document.getElementById("segundos");
	m = document.getElementById("minutos");
	cronometro = setInterval(
		function(){
			if(contador_s==60) {
				contador_s=0;
				contador_m++;
				m.innerHTML = contador_m;
				if(contador_m==60) {
					contador_m=0;
				}
			}
			s.innerHTML = contador_s;
			contador_s++;
			
		},1000);

	}

	function dibujarFiguras() {
		ctx.clearRect(0,0,canvas.width, canvas.height);
		for (let i = 0; i < figures.length; i++) {
			figuresContour[i].drawContour(ctx);
		}
		for (var i = 0; i < figuresContour.length; i++) {
			figures[i].draw(ctx);
		}
	}

	function nivel2() {
		detenerReloj();
		cargarReloj();
		figures.push(circle1,square1,rect1,circle2,square2,rect2);
		figuresContour.push(circleContour1,squareContour1,rectContour1,circleContour2,squareContour2,rectContour2);
		dibujarFiguras();
		$('.n1').prop("disabled",true);
		$('.n3').prop("disabled",true);

	}

	function nivel3() {
		detenerReloj();
		cargarReloj();
		figures.push(circle1,square1,rect1,circle2,square2,rect2,circle3,square3,rect3);
		figuresContour.push(circleContour1,squareContour1,rectContour1,circleContour2,squareContour2,rectContour2,circleContour3,squareContour3,rectContour3);
		dibujarFiguras();
		$('.n1').prop("disabled",true);
		$('.n2').prop("disabled",true);
	}

	function refresh() {
		$('.n1').prop("disabled",false);
		$('.n2').prop("disabled",false);
		$('.n3').prop("disabled",false);
		figures.length = 0;
		figuresContour.length = 0;
		comenzarJuego();
	}
