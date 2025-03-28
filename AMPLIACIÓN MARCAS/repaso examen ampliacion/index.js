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