player = new Player();
game = new Game(player);
let cronometro;
let contador_s = 0;
let contador_m = 0;
game.cargarReloj();
MAX_POINTS = 35;

$('#finJuego').hide();
$('#ganaste').hide();

function iniciarJuego() {
  location.reload();
}


  idJuego = setInterval(function(){
    game.update();
  }, 100);
