let player = {
  x: 350,
  y: 250,
  speedpos: 2,
  speedneg: -2,
  vxl: 0,
  vxr: 0,
  vyu: 0,
  vyd: 0,
  height: 30,
  width: 30,
  dead: false,
  coin: false,
};

aniCycleLeft = ["Peg left D.png", "Peg left U.png"];
aniCycleRight = ["Peg right D.png", "Peg right U.png"];
let currentloop = 0;

playerIcon = new Image();
playerIcon.src = "Peg right D.png";
animatePlayer = setInterval(function () {
  if (player.vxl === player.speedneg || player.vyu === player.speedneg) {
    playerIcon.src = aniCycleLeft[currentloop];
    currentloop++;
    if (currentloop >= aniCycleLeft.length) {
      currentloop = 0;
    }
  } else if (player.vxr === player.speedpos || player.vyd === player.speedpos) {
    playerIcon.src = aniCycleRight[currentloop];
    currentloop++;
    if (currentloop >= aniCycleRight.length) {
      currentloop = 0;
    }
  }
}, 100);

// }

addEventListener("keydown", function (e) {
  if (e.code == "ArrowLeft" && player.x > 0) {
    player.vxl = player.speedneg;
  }
  if (e.code == "ArrowRight") {
    player.vxr = player.speedpos;
  }
  if (e.code == "ArrowUp") {
    player.vyu = player.speedneg;
  }
  if (e.code == "ArrowDown") {
    player.vyd = player.speedpos;
  }
});

addEventListener("keyup", function (e) {
  if (e.keyCode == 37) {
    player.vxl = 0;
  }
  if (e.keyCode == 39) {
    player.vxr = 0;
  }
  if (e.keyCode == 38) {
    player.vyu = 0;
  }
  if (e.keyCode == 40) {
    player.vyd = 0;
  }
});

function handlePlayer() {
  if (player.x > 0) {
    player.x += player.vxl;
  } else {
    player.x + 1;
  }
  if (player.x < 670) {
    player.x += player.vxr;
  } else {
    player.x - 1;
  }
  if (player.y > 0) {
    player.y += player.vyu;
  } else {
    player.y + 1;
  }
  if (player.y < 480) {
    player.y += player.vyd;
  } else {
    player.y - 1;
  }

  ctx.fillStyle = "blue";
  ctx.drawImage(playerIcon, player.x, player.y, player.height, player.width);
}
