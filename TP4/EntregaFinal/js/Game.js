function Game(player) {
  this.enemies =[];
  this.player = player;
  this.lifes = 5;
  for (let i = 0; i < 4; i++) {
    let enemy = new Enemy(i);
    this.enemies.push(enemy);
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
    if(this.colition(this.player,this.enemies[i])){
      // alert('toco!');
      this.player.die();
      this.lifes = this.lifes-1;
      console.log(this.lifes);
    }
    if(this.lifes === 0) {
    // alert('perdiste' );
    }

  }
}

Game.prototype.colition = function (player,enemy) {
  if(this.player.move != 'jumping'){
    if (enemy.posX < 110 && enemy.posX > 50) {
      return true;
    }

  }
  return false
};




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
