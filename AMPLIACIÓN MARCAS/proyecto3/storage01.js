
localStorage.setItem("nombre", "Móvil de Raul");

localStorage.setItem("nombre2", "Album de Brito");


/*  alert(localStorage.getItem("nombre2")); */

let aFrutas = ["kiwi","movil de Raul","fruta del dragón"];

localStorage.setItem('arrayFrutas', JSON.stringify(aFrutas));


let otrasFrutas = JSON.parse(localStorage.getItem('arrayFrutas'));

console.log(aFrutas)
console.log(otrasFrutas);


//EJERCICIO 


