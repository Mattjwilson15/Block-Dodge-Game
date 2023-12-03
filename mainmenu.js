//home screen buttons//
let gameStart = false;

playBtn.addEventListener("click", function () {
  playBtn.classList.add("hidden");
  shopBtn.classList.add("hidden");
  mainText.classList.add("hidden");
  startGame();
});

shopBtn.addEventListener("click", function () {
  playBtn.classList.add("hidden");
  shopBtn.classList.add("hidden");
  mainText.classList.add("hidden");
});
