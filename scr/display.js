export default class Display {
  constructor(gameScreen, bgColor = "rgb(0,0,0)") {
    //declare the context of canvas 2d
    this.canvas = gameScreen;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.style.backgroundColor = bgColor;
  }
  //function to handle the risize
  resize() {
    this.width = window.innerWidth - 32;
    this.height = window.innerHeight - 32;
    //to have a square everytime
    if (this.height <= this.width) {
      this.canvas.style.height = this.height + "px";
      this.canvas.style.width = this.height + "px";
    } else {
      this.canvas.style.height = this.width + "px";
      this.canvas.style.width = this.width + "px";
    }

    //redraw when resize
    this.ctx.drawImage(
      this.canvas,
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
  }
}
