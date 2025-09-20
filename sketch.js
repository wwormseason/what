function setup() {
  createCanvas(600, 400);
}

let sunY = 600;
let moonY = 130;
let red = 0;
let green = 0;
let blue = 0;
let i = 0;
let stars = [];
let starO = 255;
let sunrise = false;
let sunset = true;

function draw() {
  background(red, green, blue);
  noStroke();

  // stars
  while (i < 50) {
    starsMake();
    i++;
  }
  for (let s of stars) {
    fill(255, 255, 255, starO);
    circle(s.x, s.y, s.size);
  }

  // sun
  fill(255, 100, 0, 100);
  circle(300, sunY, 180);
  fill(255, 100, 0, 100);
  circle(300, sunY, 140);

  // moon
  fill(255, 255, 255, 255);
  circle(300, moonY, 80);
  fill(255, 255, 255, 100);
  circle(300, moonY, 100);

  //pyramids
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

  if (keyIsPressed === true) {
    if (keyCode === 77) {
      sunrise = true;
      sunset = false;
    }
  }

  if (keyIsPressed === true) {
    if (keyCode === 78) {
      sunrise = false;
      sunset = true;
    }
  }

  if (sunrise) {
    if (moonY <= 600 && sunY >= 130) {
      moonY += 2;
      starO -= 2;
      sunY -= 2;
    }

    if (sunY < 480) {
      if (red < 225) {
        red += 4;
      }
      if (green < 175) {
        green += 1;
      }
    }

    fill(0, 0, 0);
    text("Press n to make the sun set.", 10, 12);
  }

  if (sunset) {
    if (moonY >= 132 && sunY <= 600) {
      moonY -= 2;
      starO += 2;
      sunY += 2;
    }

    if (sunY > 250) {
      if (red > 0) {
        red -= 4;
      }
      if (green > 0) {
        green -= 3;
      }
    }
    fill(225, 175, 0);
    text("Press m to make the sun rise.", 10, 12);
  }
}

function starsMake() {
  stars.push({
    x: random(0, 600),
    y: random(0, 400),
    size: random(0, 10),
  });
}

function mouseReleased() {
  if (sunY <= 130) {
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
  }
}

function keyPressed() {
  if (key === "m") {
  }
  if (key === "n") {
    if (moonY < 600) {
    }
  }
}
