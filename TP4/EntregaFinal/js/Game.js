player = new Player();
game = new Game(player);
game.player.stop();

function Game(player) {
  enemies =[];
  this.player = player;
  this.lifes = 5;
  for (let i = 0; i < 4; i++) {
    enemy = new Enemy(i);
    enemies.push(enemy);
    console.log(enemies);
  }
}

Game.prototype.startBackground = function () {

  document.getElementById('background-1').style.animationPlayState = 'running';
  document.getElementById('background-2').style.animationPlayState = 'running';

}

Game.prototype.stopBackground = function () {
  document.getElementById('background-1').style.animationPlayState = 'paused';
  document.getElementById('background-2').style.animationPlayState = 'paused';
}

Game.prototype.update = function() {
  // setInterval(this.update(), 100);
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

}

document.onkeydown = function(e) {
  switch(event.code) {
    case "ArrowRight":
    game.update();
    enemy.move();
    break;
    default:
    player.stop();
    break;
  }
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
