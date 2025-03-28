function elDoble(nn) {
  return nn + nn;
}


function incrementa3(n) {
  return n + 3;
}



for (let index = 0; index < 3; index++) {
  console.log(elDoble(34));
  let num2 = incrementa3(3);
  console.log(num2);
  let num3 =incrementa3(incrementa3(1));
  console.log(num3);
}


function incrementarN(numero,incremento) {
   return numero + incremento
}
console.log(incrementarN(15,4));

