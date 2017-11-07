player = new Player();
game = new Game(player);
game.player.stop();
game.update();

  idjugar = setInterval(function(){
    game.update();
  }, 100);
