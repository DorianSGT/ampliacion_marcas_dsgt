let suma1 = 12;
let suma2 = 5;
let suma3 = 6;
let suma4 = 20;

if (suma1 > suma2 && suma1 > suma3 && suma1 > suma4){
    console.log("El jugador 1 es el que va mejor");
}
else if (suma2 > suma3 && suma2 > suma4){
    console.log("El jugador 2 es el que va mejor");
}
else if (suma3 > suma4){
    console.log("El jugador 3 es el que va mejor");
}
else{
    console.log("El jugador 4 es el que va mejor");
}


//mayor(n1,n2)

function mayor2(n1,n2){
    if (n1 > n2){
        return n1;
    }    
    else{
        return n2;
    }
    
    
}
console.log(mayor2(3,5));

//mayor(n1,n2,n3)
function mayor3(n1,n2,n3){
    if (n1 > n2 && n1 > n3){
        return n1;
    }    
    else if (n2 > n3){
        return n2;
    }
    else{
        return n3;
    }
    
    
}

console.log(mayor3(10,14,2));


//mayor(n1,n2,n3,n4)


function mayor4(n1,n2,n3,n4){
    if (n1 > n2 && n1 > n3 && n1 > n4){
        return n1;
    }    
    else if (n2 > n3 && n2 > n4){
        return n2;
    }
    else if (n3 > n4){
        return n3;
    }
    else{
        return n4;
    }
    
}

console.log(mayor4(10,20,14,2));


///mayor de un array 

let Num = [9,99,999,10000];

let mayor = -99999;

for (let i = 0; i < Num.length; i++){
    if (Num[i] > mayor){
        mayor = Num[i];

    }
}

console.log("El mayor es " + mayor);


//funciones menor que 4 y menor que 16 

function menor2(a,b) {
    if (a < b) return a;
    else return b;
}

console.log(menor2(3,5));

function menor4(a,b,c,d) {

    let m1 = menor2(a,b);
    let m2 = menor2(c,d);

    return menor2(m1,m2);    

    // return menor2(menor2(a,b),menor2(c,d));
}

console.log(menor4(1,-5,7,9));

function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,p);

    return menor4(m1,m2,m3,m4);

}

console.log(menor16(1,-100,7,9,10,11,12,13,14,15,16,17,18,19,20,21));


/*menor que 15*/

function menor3 (a,b,c) {
    let r1 = menor2(a,b);
    return menor2(r1,c);
}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m3,m,n,o);

    return menor4(m1,m2,m3,m4);   
}
console.log(menor15(1,2,3,4,5,6,7,8,-99,10,11,12,13,14,15));


/*EJRCICIO 6 matriz 3x3*/

let matriz = [ [1,2,3],
               [3,3,7],
               [4,3,9]
            ];

console.log(matriz[1]);

console.log(matriz[1][2]);


/*EJERCICIO 7*/

let alumno = {

    nombre: "Begoña",
    nLista: 13,
    asignatura: "ISO",
    notas: [5, 6, 7, 8],
}
console.log(alumno);

/*EJERCICIO 8 Funcion dado de 10 caras*/

function dado() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(dado());


/*EJERCICIO 9*/
function iniciar() {
    const miBotonX = document.getElementById("miBoton");


miBotonX.addEventListener("click", () => {
    
    let parra= document.getElementById("miParrafo");

    parra.style.color = "green";

});
}







