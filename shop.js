shopIcons = document.getElementById("shop-icons");

function openShop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moneyText.classList.remove("hidden");
  mainText.textContent = "Shop";
  mainText.classList.remove("hidden");
  shopIcons.classList.remove("hidden");
}
//   ctx.strokeStyle = "white";
//   ctx.lineWidth = 3;
//   ctx.strokeRect(125, 75, 70, 70);
//   ctx.drawImage(playerIcon, 125, 75, 65, 65);

//   //icons//
//   for (let y = 175; y <= 375; y += 100) {
//     for (let x = 125; x <= 525; x += 100) {
//       ctx.strokeStyle = "white";
//       ctx.lineWidth = 3;
//       ctx.strokeRect(x, y, 50, 50);
//     }
//   }
// }

shopBtn.addEventListener("click", openShop);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 3;
// ctx.strokeRect(125, 150, 50, 50);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 3;
// ctx.strokeRect(225, 150, 50, 50);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 3;
// ctx.strokeRect(325, 150, 50, 50);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 3;
// ctx.strokeRect(425, 150, 50, 50);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 3;
// ctx.strokeRect(525, 150, 50, 50);
