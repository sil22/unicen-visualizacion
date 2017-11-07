function Enemy(id){
  this.id = id;
  this.posX = 1000 +(id * 350);
  this.posY = 250;
  this.radio = 60;
  this.enemy = document.getElementById(id);
  this.enemy.style.left = this.posX + 'px';
  this.enemy.style.top = this.posY + 'px';
}

Enemy.prototype.move = function () {
  if(player.move === 'stopped'){
    this.posX = this.posX-5;
  }
  else {
    this.posX = this.posX-10;
  }
  if((this.posX+this.radio) < 0){
    this.posX = 1000 + Math.floor((Math.random() * 10));

  }
  this.enemy.style.left = this.posX + 'px';

};

Enemy.prototype.methodName = function () {

};



// update(){
// // mofico x y
// // cada update resto x
// }
//
// //arr de enemies (cada enemy con su pos)
// //cada vez que hago el update,  resto el x
// // por ejemplo, enemy x=200; en cada update x=199 bla bla
// // y va apareciendo.
