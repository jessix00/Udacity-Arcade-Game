// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
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
            this.y = 390;
            this.goLeftRight = 100;
            this.goUpDown = 80;
            this.sprite = 'images/char-cat-girl.png';
        }
        //renders image/sprite and places it on the startX and StartY Axis   
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //checks for player collision with bugs by comparing the x & y possitions of both the enemy and player

    update() {
        for (let enemy of allEnemies) {
            if (this.y === enemy.y && (enemy.x + enemy.move / 2 > this.x && enemy.x < this.x + this.goLeftRight / 2)) {
                this.reset();
                //checks is player has reached the water
            } else if (this.y === -10) {
                window.alert("You Won!");
                this.reset();
            }
        }
    }

    //resets the player possition
    reset() {
        this.x = 200;
        this.y = 390;
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
}
// Place the player object in a variable called player
const player = new PlayerOne();
//creates a bug object with provided possition and speed
const bug1 = new Enemy(-100, 230, 150);
const bug2 = new Enemy(-100, 150, 300);
const bug3 = new Enemy(-100, 150, 200);
const bug4 = new Enemy(-100, 70, 225);

//Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});