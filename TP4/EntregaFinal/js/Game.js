function Game(player) {
  this.enemies =[];
  this.player = player;
  this.lifes = 5;
  this.points = 0;
  for (let i = 0; i < 4; i++) {
    let enemy = new Enemy(i);
    this.enemies.push(enemy);
  }
  player.stop();
}

Game.prototype.startBackground = function () {
  document.getElementById('background-1').style.animationPlayState = 'running';
  document.getElementById('background-2').style.animationPlayState = 'running';
}

Game.prototype.stopBackground = function () {
  document.getElementById('background-1').style.animationPlayState = 'paused';
  document.getElementById('background-2').style.animationPlayState = 'paused';
}

Game.prototype.update = function(e) {

  document.onkeydown = function(e) {
    switch(event.code) {
      case "ArrowRight":
      player.run();
      game.startBackground();
      break;
      case "ArrowUp":
      player.jump();
      game.startBackground();
      break;
      case "ArrowLeft":
      player.stop();
      game.stopBackground();
      break;
      default:
      // player.run();
      break;
    }
  }

  for(let i = 0; i < this.enemies.length; i++){
    this.enemies[i].move();
    if(this.enemies[i].state != "inhabilitado" && this.colition(this.player,this.enemies[i])){
      game.countLifes();
      this.enemies[i].state = "inhabilitado";
    }
    else {
      this.enemies[i].action = "pasado";
    }
    if(this.lifes <= 0){
      this.loose();
    }
    if(this.points >= 10){
      this.win();
    }
  }
}

Game.prototype.loose = function () {
  clearInterval(idJuego);
  game.detenerReloj();
  this.player.die();
  game.stopBackground();
  document.getElementById('vidas').innerHTML = '0';
  document.getElementById('finJuego').style.display = 'block';

};

Game.prototype.win = function () {
  clearInterval(idJuego);
  game.detenerReloj();
  game.stopBackground();
  this.player.stop();
  document.getElementById('ganaste').style.display = 'block';
  document.getElementById('puntosganados').innerHTML = this.points;
};

Game.prototype.countLifes = function () {
  this.lifes = this.lifes-1;
  document.getElementById('vidas').innerHTML = this.lifes;
}

Game.prototype.sumarPuntos = function () {
  this.points = this.points+1;
  document.getElementById('puntos').innerHTML = this.points;
}

Game.prototype.colition = function (player,enemy) {
  if(this.player.move != 'jumping'){
    if (enemy.posX < 250 && enemy.posX > 200) {
      return true;
    }
  }
  else if(enemy.posX < 250 && enemy.posX > 200 && enemy.action === 'pasado') {
      game.sumarPuntos();
    }
    return false;

};

Game.prototype.cargarReloj = function() {
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

  Game.prototype.detenerReloj = function() {
    console.log('detenerReloj');
  	clearInterval(cronometro);
  }


// class Game {
//   var player;
//   var enemy;
//
//   constructor() {
//
//   }
//
//   function init() { //set x, y
//
//   }
//
//   function update() {
//     //set interval
//     // foreach(enemy) {
//     // enemy.update(); //porque va apareciendo, tengo que actualizar el x e y
//     // if (Player.colision(enemies)) {
//     // die;
//     // }
//     // contarPuntos;
//   }
//
//   function keyDown(e) {
//     player.setJumping();
//
//   }
//
//   }
//
// }
