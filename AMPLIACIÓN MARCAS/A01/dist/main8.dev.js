"use strict";

var numObjetivo = 12;
var maxOpor = 3;
var numJugador;

for (var _i = 0; _i < 3; _i++) {
  numJugador = prompt("intento número " + (_i + 1) + " :dime un número");

  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    break;
  }
}

var i = 0;

while (i < 3) {
  numJugador = prompt("intento número " + (i + 1) + " :dime un número");

  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    break;
  }

  i++;
} //sin usar break


var seguir = true;

for (var _i2 = 0; _i2 < 3 && seguir; _i2++) {
  numJugador = prompt("intento número " + (_i2 + 1) + " :dime un número");

  if (numJugador == numObjetivo) {
    console.log("Enhorabuena de la buena");
    seguir = false;
  }
}