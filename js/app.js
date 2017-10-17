// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x * 110;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x,y) {
   window.ctx.drawImage(Resources.get(this.sprite),(this.x),(this.y));
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(1,60);
var enemy2 = new Enemy(2,230);
var enemy3 = new Enemy(3,145);
var allEnemies = [enemy1,enemy2,enemy3];

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
};

// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(){
    window.ctx.drawImage(Resources.get(this.sprite),101,300);

};

Player.prototype.render = function(){
    window.ctx.drawImage(Resources.get(this.sprite),101,400);
   // console.log("hello");
};

Player.prototype.handleInput = function(x){
    if(x == "up"){

    }
    else if(x == "down"){


    }
    else if(x == "left"){

    }
    else if(x == "right"){

    }
};

var player = new Player();
//player.render();