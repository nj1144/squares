let speed = 0.02;
let phase = 0;
maxsize = 20;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  let x = width / 2;
  let y = height / 2 + sin(phase) * 50;

  // tell the shape to move while changing its size
  phase = frameCount * speed;
  let sizeoffset = (cos(phase) + 1) * 0.5;
  let shapesize = sizeoffset * maxsize;

  //make a shape
  // fill(random(255),255,random(255),255);
  // rect(x, y, shapesize, shapesize);

  // for() to create more
  fill(random(255), 255, random(255), 255);
  for (let x = 3; x < 15 + 3; x++) {
    rect(x * 30, y, shapesize, shapesize)
  }
  fill(random(255), 255, 255, random(255));
  for (let y = 3; y < 15 + 3; y++) {
    rect(x, y * 30, shapesize, shapesize)
  }


}