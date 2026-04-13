let coins = 1000;
let inventory = [];

function actualizar() {
  document.getElementById("coins").innerText = coins;
}

function mostrar(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function jugar() {
  alert("🔥 Entrando a partida...");
}

function comprar() {
  if (coins >= 200) {
    coins -= 200;
    inventory.push("Arma 🔫");
    actualizar();
    actualizarInventario();
    alert("Compraste un arma");
  } else {
    alert("No tienes dinero");
  }
}

function actualizarInventario() {
  let lista = document.getElementById("items");
  lista.innerHTML = "";
  inventory.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  });
}

function cambiarSkin() {
  let img = document.getElementById("char");
  img.src = img.src.includes("2922510")
    ? "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    : "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
}
