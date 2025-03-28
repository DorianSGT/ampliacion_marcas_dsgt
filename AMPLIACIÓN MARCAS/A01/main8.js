let numObjetivo = 12;
let maxOpor = 3;
var numJugador;

for (let i = 0; i < 3; i++) {
  numJugador = prompt("intento número " + (i + 1) + " :dime un número");
  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    break;
  }
}

let i = 0;
while (i < 3) {
  numJugador = prompt("intento número " + (i + 1) + " :dime un número");
  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    break;
  }
  i++;
}

//sin usar break
let seguir = true;
for (let i = 0; (i < 3 && seguir) ; i++) {
  numJugador = prompt("intento número " + (i + 1) + " :dime un número");
  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    seguir = false;
  }
}
