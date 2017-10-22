// Enemies our player must avoid

/* x is the speed, y is the row. y = 60 (first row), 230(second row), 145 (third row)*/

var Enemy = function(x,y,speed) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100 ; // to randomize the position of the enemies
    this.y = (y * 83) - 23; //y is the row number
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  (this.x) = (this.x) +  (this.speed) ; 
  /*When the player crosses the canvas, I am deducting the width, so that
  it reappears from the beginning*/
  
  if(this.x > 505){
       (this.x) = (this.x - 400)*dt;
   }
  
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
   window.ctx.drawImage(Resources.get(this.sprite),(this.x),(this.y));
};

// Now instantiate your objects.
var enemy1 = new Enemy(10,1,1);
var enemy2 = new Enemy(30,2,2);
var enemy3 = new Enemy(40,3,3);
var enemy4 = new Enemy(40,1,4);


// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3,enemy4];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        80 : 'paused',
        32 : 'space bar'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

//Player class along with player image.
// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.xloc = 202;
    this.yloc = 402;
};

// Place the player object in a variable called player
var player = new Player();

// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(direction){   
    this.GameOver(); //when the player reaches water, its game over. comparing the y coordinates
};


Player.prototype.render = function(){
    //if(!test){ 
        if((this.yloc > -50) && (this.yloc<450)){ //greater than to cut the impressions above the canvas and less than to cut the impressions below the canvas 
            window.ctx.drawImage(Resources.get(this.sprite),(this.xloc),(this.yloc));
        }
    //}
};

/* 
The first condition(direction) is to translate the key pressed by the player and change the coordinates accordingly.
The second conditions are to make sure that the player does not step out of the canvas area.
*/


Player.prototype.handleInput = function(x){
       
           if(x == "up" && player.yloc > 50 ){
            this.yloc = this.yloc - 83;
            }
            else if(x == "down" && player.yloc < 320){
                this.yloc = this.yloc + 83;
            }
            else if(x == "left" && player.xloc > 100){
                this.xloc = this.xloc - 101;
            }
            else if(x == "right" && player.xloc < 304){
                this.xloc = this.xloc + 101;
            }
            /* Game is paused and an alert is displayed when the user presses the key "p" or the space bar
            Clicking on "ok" starts the game back again */
            else if(x == "paused" || x == "space bar"  ){
            alert("Game is paused"); 
            }
};

Player.prototype.GameOver = function(){
    if(this.yloc < 0){ //when the player reaches the water, its game over. player has won the game.
        alert("You win");
    }
};

