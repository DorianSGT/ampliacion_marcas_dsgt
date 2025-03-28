
//número aleatorio entre 1 y 13 incluidos
let num_aleatorio = Math.floor(Math.random() * 13) + 1;
let num_aleatorio2 = Math.floor(Math.random() * 13) + 1;

if (num_aleatorio > 10 || num_aleatorio2 > 10)
{
    num_aleatorio = 10;
    num_aleatorio2 = 10;
}

console.log("Tus cartas son "+num_aleatorio+","+num_aleatorio2);




//esto es el Prompt
let palabro = prompt("Carta más(c) o Plantarse(p)");

if (palabro== 'p')
{
    console.log("El jugador se planta");
}
else if (palabro=='c')
{
    console.log("el jugador continua");
}
else
{
    console.log("Por favor, introduce: Carta más(c) o Plantarse(p) ");
}




