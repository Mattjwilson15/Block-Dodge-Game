//canvas//
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const playBtn = document.getElementById("play");
const shopBtn = document.getElementById("shop");
const mainText = document.getElementById("maintext");
const moneyText = document.getElementById("money");
const scoreText = document.getElementById("score");
const highScoreText = document.getElementById("highScore");

//animate buttons//
const buttons = document.querySelectorAll("button");

// animate buttons on hover///
onButton = function (e) {
  for (i = 0; i < buttons.length; i++) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }
};

offButton = function (e) {
  for (i = 0; i < buttons.length; i++) {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
  }
};

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", onButton);
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseleave", offButton);
}

//score bord//
let currentScore = 0;
let highScore = 0;
let money = 0;
function checkscore() {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = "High Score: " + highScore;
  }
}
//game timer//

//coin opject//
let coin = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 5,
};

const numb = [0, 1, 2];
const redBlocks = [];

left = false;
right = false;
up = false;
down = false;

function startGame() {
  //reset everything//
  player.x = 350;
  player.y = 250;
  currentScore = 0;
  player.dead = false;
  player.coin = false;
  moneyText.classList.remove("hidden");
  scoreText.classList.remove("hidden");
  highScoreText.classList.remove("hidden");

  //1s timer updating score and game timer//
  scoreInterval = setInterval(function () {
    currentScore = currentScore + 1;
    scoreText.textContent = "Score: " + currentScore;
  }, 1000);

  //draw coin//

  coinIcon = new Image();
  coinIcon.src = "coinicon.png";

  function handleCoin() {
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.drawImage(coinIcon, coin.x, coin.y, 15, 15);
    ctx.fill();
  }
  //functions for when coin collected//
  function coinHit() {
    coin.x = Math.random() * canvas.width;
    coin.y = Math.random() * canvas.height;
    currentScore = currentScore + 10;
    money += 25;
    moneyText.textContent = "Coins: " + money;
  }

  //coin collison//
  function coincolliding() {
    let distX = Math.abs(coin.x - player.x - player.width / 2);
    let distY = Math.abs(coin.y - player.y - player.height / 2);

    if (distX > player.width / 2 + coin.r) {
      return false;
    }
    if (distY > player.height / 2 + coin.r) {
      return false;
    }

    if (distX <= player.width / 2) {
      return true;
    }
    if (distY <= player.height / 2) {
      return true;
    }

    let dx = distX - player.width / 2;
    let dy = distY - player.height / 2;

    return dx * dx + dy * dy <= coin.r * coin.r;
  }

  redBuilder();

  //animate game//
  gameInterval = setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // gameText("20px Courier New", "Score: " + currentScore, "white", 80, 30);
    // gameText("20px Courier New", "High Score: " + highScore, "white", 580, 30);
    player.coin = coincolliding();
    handlePlayer();
    handleCoin();
    if (player.coin) {
      coinHit();
    }
    if (player.dead) {
      endGame();
    }
    drawEnemy(redBlocks.length);
  }, 1);
}

function endGame() {
  checkscore();
  clearInterval(gameInterval);
  clearInterval(scoreInterval);
  clearInterval(blockAdder);
  clearRedBlocks(redBlocks.length);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  finalScore = currentScore;
  console.log(finalScore);
  playBtn.textContent = "Play Again";
  playBtn.classList.remove("hidden");
  shopBtn.classList.remove("hidden");
  mainText.classList.remove("hidden");
  mainText.textContent = "Game Over\r\nScore: " + finalScore;
}
ed;
