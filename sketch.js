function setup() {
    createCanvas(600, 600); 
    background("white");
}
  
function draw() {
  stroke("black");
  fill("plum");
  
  //console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
      circle(mouseX, mouseY, 25, 85);
    }
}
  