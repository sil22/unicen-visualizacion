function Player() {
  this.player = document.getElementById('player');
  this.move ='';
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
  this.player.className = "player-jump";
}

Player.prototype.die = function(){
  this.player.className = "player-die";
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
