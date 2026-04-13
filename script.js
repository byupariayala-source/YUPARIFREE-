const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");

let x = 200;
let y = 200;
let speed = 10;

// DIRECCION DEL DISPARO
let direction = "up";

// MOVIMIENTO
document.addEventListener("keydown", (e) => {

  if (e.key === "w" || e.key === "ArrowUp") {
    y -= speed;
    direction = "up";
  }

  if (e.key === "s" || e.key === "ArrowDown") {
    y += speed;
    direction = "down";
  }

  if (e.key === "a" || e.key === "ArrowLeft") {
    x -= speed;
    direction = "left";
  }

  if (e.key === "d" || e.key === "ArrowRight") {
    x += speed;
    direction = "right";
  }

  // DISPARO
  if (e.code === "Space") {
    disparar();
  }

  // LIMITES
  x = Math.max(0, Math.min(window.innerWidth - 80, x));
  y = Math.max(0, Math.min(window.innerHeight - 80, y));

  player.style.left = x + "px";
  player.style.top = y + "px";
});

// FUNCION DISPARAR
function disparar() {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");

  let bx = x + 35;
  let by = y + 35;

  bullet.style.left = bx + "px";
  bullet.style.top = by + "px";

  gameArea.appendChild(bullet);

  let intervalo = setInterval(() => {

    if (direction === "up") by -= 10;
    if (direction === "down") by += 10;
    if (direction === "left") bx -= 10;
    if (direction === "right") bx += 10;

    bullet.style.left = bx + "px";
    bullet.style.top = by + "px";

    // ELIMINAR SI SALE DE PANTALLA
    if (bx < 0 || bx > window.innerWidth || by < 0 || by > window.innerHeight) {
      bullet.remove();
      clearInterval(intervalo);
    }

  }, 30);
}
