player = new Player();
game = new Game(player);
let cronometro;
let contador_s = 0;
let contador_m = 0;
game.cargarReloj();

document.getElementById('finJuego').style.display = 'none';
document.getElementById('ganaste').style.display = 'none';

function iniciarJuego() {
  location.reload();
}


  idJuego = setInterval(function(){
    game.update();
  }, 100);
