// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y + 60;
    this.sprite = 'images/enemy-bug.png';
    this.move = 100;
    this.boundary = this.move * 5;
    this.resetPosition = -this.move;
    this.speed = speed;
};

//sets boundaries and speed of enemies
Enemy.prototype.update = function(dt) {
    if (this.x < this.boundary) {
        this.x += this.speed * dt;
    } else {
        this.x = this.resetPosition;
    }
};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
class PlayerOne {
    constructor() {
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
const firstBug = new Enemy(-100, 160, 200);
const secondBug = new Enemy(-100, 80, 300);
const thirdBug = new Enemy(-100, 0, 150);
const fourthBug = new Enemy(-100, 0, 200);
const allEnemies = [];
allEnemies.push(firstBug, secondBug, thirdBug, fourthBug);

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