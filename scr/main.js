import Display from "/scr/display.js";
import Player from "/scr/player.js";
import InputHandler from "/scr/input.js";

//pick the GameScreen
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d"); //2D contest

//passing the canvas to display
let display = new Display(document.getElementById("gameScreen"));
//resize the screen on the first loading
display.resize();
//resize the creen if the window size change
window.addEventListener("resize", resize);
function resize() {
  display.resize();
}
//risoluzione dell schermo canvas
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;
//inizialize the time
let lastTime = 0;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(player);

// creating the frame rate
function gameLoop(timeStamp) {
  //calculate how much time is past
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  //clear the screen after every frame
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  //animate
  player.update(deltaTime);

  //draw the player avatar
  player.draw(ctx);

  //update the frame tha is passing
  requestAnimationFrame(gameLoop);
}
//run the frame
requestAnimationFrame(gameLoop);
