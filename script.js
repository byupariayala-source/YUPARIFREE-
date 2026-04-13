let coins = 500;
let diamonds = 10;

function actualizarUI() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("diamonds").innerText = diamonds;
}

function cambiarSeccion(seccion) {
  let texto = document.getElementById("texto");

  if (seccion === "tienda") {
    texto.innerText = "🛒 Bienvenido a la tienda";
  }

  if (seccion === "personajes") {
    texto.innerText = "👤 Selecciona tu personaje";
  }

  if (seccion === "armas") {
    texto.innerText = "🔫 Escoge tu arma";
  }
}

function iniciarJuego() {
  alert("🔥 Entrando a la batalla...");
}

function ganarRecompensa() {
  let premio = Math.floor(Math.random() * 100);

  coins += premio;
  diamonds += 1;

  actualizarUI();

  alert("🎁 Ganaste " + premio + " monedas y 1 diamante");
}
