export default class Player {
  constructor(gameWidth, gameHeight) {
    // importing screen size
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    //avatar speed and max speed
    this.speed = { x: 0, y: 0 };
    this.maxSpeed = { x: 5, y: 5 };
    //object size
    this.width = this.gameWidth / 20;
    this.height = this.gameHeight / 20;

    //positioning the avatar
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height - 5
    };
  }

  //movementn on input
  moveLeft() {
    this.speed.x = -this.maxSpeed.x;
  }

  moveRight() {
    this.speed.x = this.maxSpeed.x;
  }

  moveUp() {
    this.speed.y = -this.maxSpeed.y;
  }

  moveDown() {
    this.speed.y = this.maxSpeed.y;
  }

  stopX() {
    this.speed.x = 0;
  }
  stopY() {
    this.speed.y = 0;
  }

  //drawing function
  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //movement function
  update(deltaTime) {
    //movement
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //wall collision
    //right wall collitio
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    //left wall collition
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    //left wall collition
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    //bottom wall collition
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
    }
  }
}
