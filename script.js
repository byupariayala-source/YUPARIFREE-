const player = document.getElementById("player");

let x = 200;
let y = 200;
let speed = 10;

// CONTROLES
document.addEventListener("keydown", (e) => {

  if (e.key === "w" || e.key === "ArrowUp") {
    y -= speed;
    player.style.transform = "rotate(0deg)";
  }

  if (e.key === "s" || e.key === "ArrowDown") {
    y += speed;
    player.style.transform = "rotate(180deg)";
  }

  if (e.key === "a" || e.key === "ArrowLeft") {
    x -= speed;
    player.style.transform = "rotate(-90deg)";
  }

  if (e.key === "d" || e.key === "ArrowRight") {
    x += speed;
    player.style.transform = "rotate(90deg)";
  }

  // LIMITES DEL MAPA
  x = Math.max(0, Math.min(window.innerWidth - 80, x));
  y = Math.max(0, Math.min(window.innerHeight - 80, y));

  player.style.left = x + "px";
  player.style.top = y + "px";
});
