function Player() {
  this.player = document.getElementById('player');
  this.move ='stopped';
}

Player.prototype.run = function(){
  this.move = 'running';
  this.player.className = "player-run";
}

Player.prototype.stop = function(){
  this.move = 'stopped';
  this.player.className = "player-stop";
}

Player.prototype.jump = function(){
  this.move = 'jumping';
  this.player.className = "player-jump";
  document.onkeyup = function (e) {
    if(e.code === "ArrowUp"){
    player.stop();
    game.stopBackground();
    }
  }
}

Player.prototype.die = function(){
  this.move = 'die';
  this.player.className = "player-die";
  game.stopBackground();
  
}


//   function setJumping() { // tecla para arriba
//     //player.isJumping = true;
//     // anim = document.getElementsByClassName('anim';
//     // player.div.animation = anim;
//     // anim.addEventListener('animationEnd', function() {
//     //   Player.anim = 'run';
//     //   Plyer.isJumping = false;
//     // });
//
//   }
//
