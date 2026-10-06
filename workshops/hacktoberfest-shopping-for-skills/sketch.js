let typewriterText = "Shop for skills. Ship PRs. Level up.";
let currentChar = 0;
let frameCount = 0;
let typeSpeed = 3;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("p5-canvas");
  canvas.style("width", "100%");
  canvas.style("height", "auto");
  textFont("monospace");
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // Draw neo-brutalist SVG-like elements
  push();
  strokeWeight(4);
  stroke(0);
  noFill();

  // Red diagonal bars
  for (let i = 0; i < 5; i++) {
    line(i * 120 + 50, 50, i * 120 - 100, 350);
  }

  // Yellow rectangles
  fill(255, 249, 93, 150);
  noStroke();
  rect(100, 80, 120, 60);
  rect(400, 260, 100, 80);

  // Blue square
  fill(95, 155, 255, 150);
  noStroke();
  rect(450, 100, 80, 80);

  // Red square
  fill(255, 95, 95, 150);
  noStroke();
  rect(80, 240, 90, 90);
  pop();

  // Draw bold border
  push();
  stroke(0);
  strokeWeight(8);
  noFill();
  rect(4, 4, width - 8, height - 8);
  pop();

  // Typewriter text
  push();
  textSize(32);
  textStyle(BOLD);
  fill(0);
  let displayText = typewriterText.substring(0, currentChar);
  text(displayText + (frameCount % 40 < 20 ? "_" : ""), width / 2, height / 2);

  if (frameCount % typeSpeed == 0 && currentChar < typewriterText.length) {
    currentChar++;
  }
  pop();

  frameCount++;
}