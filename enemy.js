const enemystats = {
  speed: 2,
  widthH: 100,
  widthL: 10,
  heightH: 100,
  heightL: 10,
};

class enemy {
  constructor(x, y, h, w, s) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.h =
      Math.random() * (enemystats.heightH - enemystats.heightL + 1) +
      enemystats.heightL;
    this.w =
      Math.random() * (enemystats.widthH - enemystats.widthL + 1) +
      enemystats.widthL;
    this.s =
      Math.random() * (enemystats.speed - -enemystats.speed + 1) +
      -enemystats.speed;
  }

  drawRed(x, y, h, w) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.h, this.w);
    if (this.x > 0 && this.x < 680 && this.y > 0 && this.y < 480) {
      this.x += this.s;
      this.y += this.s;
    } else {
      this.s = this.s - this.s * 2;
      this.x += this.s * 2;
      this.y += this.s * 2;
    }
  }

  redColliding() {
    return (
      player.x < this.x + this.w &&
      player.x + player.width > this.x &&
      player.y < this.y + this.h &&
      player.y + player.height > this.y
    );
  }
}

//draws block and sets
function redBuilder() {
  blockAdder = setInterval(function () {
    redBlocks.push(new enemy());
  }, 10000);
}

//draws enemy// x = length of array, loop repeats for length of array
function drawEnemy(x) {
  for (i = 0; i < x; i++) {
    redBlocks[i].drawRed();
    player.dead = redBlocks[i].redColliding();
    if (x >= 10) {
      clearInterval(blockAdder);
    }
  }
}

function clearRedBlocks(x) {
  for (i = 0; i < x; i++) {
    redBlocks.pop(i);
  }
}
