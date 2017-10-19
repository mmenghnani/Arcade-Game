// Enemies our player must avoid
var Enemy = function(x,y) { //x is the speed, y is the row. y = 60 (first row), 230(second row), 145 (third row)
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x * 110; // to randomize the position of the enemies
    this.y = y;
};
Enemy.prototype.CollisionDetection = function(){

    if(player.xloc == this.x && player.yloc == this.y){
    console.log("collision");
}
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   this.x = this.x + 900 * dt * Math.random();
   if(this.x>505){
       this.x = (this.x - 505)*dt;
   }
   this.CollisionDetection();
  // console.log(this.x);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
   window.ctx.drawImage(Resources.get(this.sprite),(this.x),(this.y));
   this.CollisionDetection();
    //console.log("collision")
   };

// Now instantiate your objects.
var enemy1 = new Enemy(Math.random(),60);
var enemy2 = new Enemy(Math.random(),230);
var enemy3 = new Enemy(Math.random(),145);
var enemy4 = new Enemy(Math.random(),60);
var enemy5 = new Enemy(Math.random(),230);
var enemy6 = new Enemy(Math.random(),145);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3];//,enemy4,enemy5,enemy6];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

//Player class along with player image.
// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.xloc = 101;
    this.yloc = 405;
};

// Place the player object in a variable called player
var player = new Player();

// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(direction){   
};

Player.prototype.render = function(){
    if((this.yloc > -50)&&(this.yloc<450)){ //greater than to cut the impressions above the canvas and less than to cut the impressions below the canvas 
        window.ctx.drawImage(Resources.get(this.sprite),(this.xloc),(this.yloc));
     }
     this.GameOver(); //when the player reaches water, its game over. comparing the y coordinates
};

Player.prototype.handleInput = function(x){
    if(x == "up"){
        this.yloc = this.yloc - 83;
    }
    else if(x == "down"){
        this.yloc = this.yloc + 83;
    }
    else if(x == "left"){
        this.xloc = this.xloc - 101;
    }
    else if(x == "right"){
        this.xloc = this.xloc + 101;
        
    }
};

Player.prototype.GameOver = function(){
    if(this.yloc<0){
        
    }
};

