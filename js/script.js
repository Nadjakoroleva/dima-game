let pops = 30;
let x = 100;
let y = 250;
let d = 200;
let c = 0;
let time; //Timer
let wait = 800;

function setup() {
	createCanvas(800, 800);
	time = millis();
}

function draw() {
  background(0);
  if (pops == 0) {
    textSize(50); 
    text("Игра окончена", 200, 100); 
    d = 0; 
    delay(10);
  }
  if (pops < 0) {
    pops = 0;
  }
  
  ellipse(x, y, d, d);
  text(pops, 600, 600);
  textSize(50); 
  text(c, 100, 100);
  if (millis() - time >= wait) {
    pops = pops - 1;
    time = millis();
  }
}
function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y - d && mouseY < y + d) {
      c = c + 1;
      pops = pops + 1;
      x = random(100, 700); 
      y = random(100, 700); 
      d = random(50, 200); 
      fill(x, y, d);
    }
  }
}