// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy is not passed boundry
    //move forward
    //increment x by speed * dt
    //else
    // reset possition to start

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//player class
class PlayerOne {
    constructor() {
            //properties  
            this.x = 200;
            this.y = 380;
            this.goLeftRight = 100;
            this.goUpDown = 83;
            this.sprite = 'images/char-cat-girl.png';
        }
        //renders image/sprite and places it on the startX and StartY Axis   
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //Keyboard input: Uses only the allowed keys(up,down,right and left arrow keys) to move player. 
    //If statements prevent player from moving outside of boundaries.
    handleInput(input) {
            switch (input) {
                case 'left':
                    if (this.x > 0) {
                        this.x -= this.goLeftRight;
                    }
                    break;
                case 'up':
                    if (this.y > 0) {
                        this.y -= this.goUpDown;
                    }
                    break;
                case 'right':
                    if (this.x < this.goLeftRight * 4) {
                        this.x += this.goLeftRight;
                    }
                    break;
                case 'down':
                    if (this.y < this.goUpDown * 4) {
                        this.y += this.goUpDown;
                    }
                    break;
            }
        }
        //TODO:
        //Update Possition
        //check collision here
        //did player x/y collide with enemy?
        //check win here
        //did player x/y reach final tile?
        //Reset player
        //set x and y to starting possition

}
const player = new PlayerOne();


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});