export default class InputHandler {
  constructor(player) {
    //move up down left and right with arrow and WASD
    document.addEventListener("keydown", event => {
      //alert(event.keyCode);
      switch (event.keyCode) {
        case 37: // <-
        case 65: /// A
          player.moveLeft();
          break;
        case 39: //->
        case 68: //D
          player.moveRight();
          break;
        case 38: // ARROW UP
        case 87: // W
          player.moveUp();
          break;
        case 40: // ARROWDOWN
        case 83: // S
          player.moveDown();
          break;
      }
    });

    //stop the movement if it's not pressed
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
        case 39:
        case 65:
        case 68:
          if (player.speed.x != 0) player.stopX();
          break;
        case 38:
        case 40:
        case 87:
        case 83:
          if (player.speed.y != 0) player.stopY();
      }
    });
  }
}
