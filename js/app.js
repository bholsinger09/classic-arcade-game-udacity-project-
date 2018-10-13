/*items changed from orginal code :
changed all syntex from ecmascript 5 to 6
used class and arrow funtions 
built enemy object (which has x, y, and speed)
created update method to enemy object
enemy object method updates speed of enamy and checks for collision with player
created player object (which has x and y properties )
added keyPress method to handle player going up, down, left, and right
created variable for allEnemies with empty array
stored enemy location in const variable
created foreach method for enemies 
instantiate player object with starting position 

*/

// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {

        // variables for object to track position of enemy and speed
        this.x = x;
        this.y = y;
        this.speed = speed;

        // image of enemy added to object
        this.sprite = 'images/enemy-bug.png';
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks


  // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

        // Multiplies the speed by the dt parameter on the x axis
        this.x += this.speed * dt;

        // Once enemies are off the canvas, they reappear randomly with different speeds
        if (this.x > 510) {
            this.x = -30;
            this.speed = 100 + Math.floor(Math.random() * 200);
        };
  
            
     // Checks for collisions between the player and the enemies
        if (player.x < this.x + 80 &&
            player.x + 80 > this.x &&
            player.y < this.y + 40 &&
            40 + player.y > this.y) {
            player.x = 190;
            player.y = 385;
        };
    }

  // Renders the enemy into the game (required method)
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}






// Player class object with x and y properties for location of player
class Player {
    constructor(x, y) {

        // Variables for the player to move along x and y axis 
        this.x = x;
        this.y = y;

        //The image of the player boy 
        this.player = 'images/char-boy.png';
    }
  
   update(dt) {

    }
  
// Renders the image of player
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    }


    handleInput(keyPress) {
     if (keyPress == 'left' && this.x > 0) {
            this.x -= 102;
        };

      if (keyPress == 'right' && this.x < 385) {
            this.x += 102;
        };

        // Enables player/user to move on the y axis by 80 upward on keypress

        if (keyPress == 'up' && this.y > 0) {
            this.y -= 80;
        };

        // Enables player/user  to move on the y axis by 80 downward on keypress
        // Also enables player/user not to go off the game tiles on the bottom side

        if (keyPress == 'down' && this.y < 385) {
            this.y += 80;
        };


    
     if (this.y < 0) {
            setTimeout(() => {
                this.x = 190;
                this.y = 385;
            }, 800);
        };
  
  
  }

}



var allEnemies = [];
// Placed all enemy objects in an array called allEnemies


// Location of the 3 enemies on the y axis 
const enemyLocation = [60, 145, 225];

enemyLocation.forEach(locationY => {
    enemy = new Enemy(0, locationY, 250);
    allEnemies.push(enemy);
});

// instantiate player object with start position
var player = new Player(190, 385);

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

