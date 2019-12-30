var canvasWidth = 600
var x = canvasWidth / 2
var y = canvasWidth / 2
var x1 = x + 80
var y1 = y
var score = 0
var hunger = 10
var move = 0
var score1 = 0
var hunger1 = 10
var move1 = 0
var xpos = []
var ypos = []

function setup() {
  createCanvas(canvasWidth, canvasWidth);
}

function grid() {
  for (var y1 = 80; y1 < canvasWidth; y1 += 20){  
    for (var x1 = 80; x1 < canvasWidth; x1 += 20) {
      xpos.push(x1)
      ypos.push(y1)
    }
  }
}


function draw() {
  clear()
  background(135, 206, 235);
  fill(0, 255, 0)
  square(0, 0, 120)
  fill(0)
  text("Marsh", 40, 60) 
  fill(44,164,0)
  circle(x, y, 40)
  fill(0)
  text("Frog\nScore " + score + "\nHunger " + hunger, x - 15, y - 60);
  fill(244,164,96)
  circle(x1, y1, 20)
  fill(0)
  text("Bug\nScore " + score1 + "\nHunger " + hunger1, x1 - 15, y1 - 50);
  if (hunger == 0) {
    alert("You died from starvation.")
    score = 0
    hunger = 10
    move = 0
    home()
  }
  var dist = sqrt(x1 - x * x1 - x + y1 - y * y1 - y)
  if (dist < 41) {
    home()
  }
}

function home() {
  score1 = 0
  hunger1 = 10
  move1 = 0
  x = 400
  y = 400
  x1 = 480
  y1 = 400
}

function keyPressed() {
  if (keyCode == UP_ARROW && y > 40) {
    y -= 40
  } else if (keyCode == DOWN_ARROW && y < 560) {
    y += 40
  }
  if (keyCode == RIGHT_ARROW && x < 560) {
    x += 40
  } else if (keyCode == LEFT_ARROW && x > 40) {
    x -= 40
  }
  move += 1
  if (move % 6 == 0) {
    hunger -= 1
  }
  var dists = []
  for (var i = 0; i < xpos.length; i += 1) {
    var x2 = x - xpos[i]
    var y2 = y - ypos[i]
    dists.push(sqrt(x2 * x2 + y2 * y2))
  }
  i = dists.indexOf(max(dists))
  var dist = sqrt(x1 - x * x1 - x + y1 - y * y1 - y)
  if (dist < 160) {
    if (xpos[i] < x1 && x1 > 40) {
      x1 -= 20
    } else if (xpos[i] > x1 && x1 < 560) {
      x1 += 20
    }
    if (ypos[i] < y1 && y1 > 40) {
      y1 -= 20
    } else if (ypos[i] > y1 && y1 < 560) {
      y1 += 20
    }
  } else {
    if (0 < x1 && x1 > 40) {
      x1 -= 20
    } else if (0 > x1 && x1 < 560) {
      x1 += 20
    }
    if (0 < y1 && y1 > 40) {
      y1 -= 20
    } else if (0 > y1 && y1 < 560) {
      y1 += 20
    }
  }
  dist = sqrt(0 - x * 0 - x + 0 - y * 0 - y)
  if (dist > 60) {
    hunger1 += 1
  }
  move1 += 1
  if (move1 % 4 == 0) {
    hunger1 -= 1
  }
  if (hunger1 == 0) {
    hunger1 = 10
    home()
  }
}