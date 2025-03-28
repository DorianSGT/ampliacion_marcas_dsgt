"use strict";

function elDoble(nn) {
  return nn + nn;
}

function incrementa3(n) {
  return n + 3;
}

for (var index = 0; index < 3; index++) {
  console.log(elDoble(34));
  var num2 = incrementa3(3);
  console.log(num2);
  var num3 = incrementa3(incrementa3(1));
  console.log(num3);
}

function incrementarN(numero, incremento) {
  return numero + incremento;
}

console.log(incrementarN(15, 4));