
// Nivel 1
function nivel1() {
    let dado1 = Math.floor(Math.random() *12) + 1;
    let dado2 = Math.floor(Math.random() *12) + 1;
    let suma = dado1 + dado2;

    if (suma > 15)
    {
        console.log("El dado 1 a caído en: "+dado1+" ; El dado 2 ha caído en: "+dado2+" ; La suma es: "+suma);
        console.log("¡ENHORABUENA DE LA BUENA, HAS PASADO EL NVEL 1!");
        return true;
    }
    else
    {
        console.log("Dedícate a otra cosa")
        return false;
    }

}


// Nivel 2
function nivel2() {
    let num_aleatorio = Math.floor(Math.random() *5) + 1;
    let adivinanza1 = parseInt(prompt("Estás dentro del nivel 2, tienes 2 oportunidades para adivinar el número oculto que te ha tocado entre 1 y 5 :"));
    let adivinanza2 = parseInt(prompt("Estás dentro del nivel 2, tienes 1 oportunidad para adivinar el número oculto que te ha tocado entre 1 y 5 :"));


    if  (adivinanza1 === num_aleatorio || adivinanza2 === num_aleatorio)
    {
        console.log("Bien hecho, tu número oculto era: "+num_aleatorio);
        return true;
    }
    else
    {
        console.log("Perdistes, Eres malill@");
        return false;
    }

}

// Nivel 3
function nivel3() {
    let clave = 101;
    let adivinanza1 = parseInt(prompt ("Estás dento del nivel 3, tienes 3 intentos para adivinar una clave binaria de 3 bits: "));
    let adivinanza2 = parseInt(prompt ("Estás dento del nivel 3, tienes 2 intentos para adivinar una clave binaria de 3 bits: "));
    let adivinanza3 = parseInt(prompt ("Estás dento del nivel 3, tienes 1 intento para adivinar una clave binaria de 3 bits: "));

    if (adivinanza1 === clave || adivinanza2 === clave || adivinanza3 === clave )
    {
        console.log("!ENHORABUENA DE LA BUENA!, has adivinado la clave : "+clave);
        return true;
    }
    else
    {
        console.log("Eres buenecill@");
        return false;
    }
}

// Nivel 4
function nivel4() {
    let pregunta = parseInt(prompt("Has llegado a la pelea contra el Boss, tienes solo 1 oportunidad para responder con un número cualquiera: "));

    if (pregunta === 7)
    {
        console.log("You are the Best")
        return true;

    }
    else
    {
        console.log("Eres grande");
        return false;
    }
}


function las4pruebasdeAsmerix() {
    
    if (nivel1()) {
      if (nivel2()) {
        if (nivel3()) {
          nivel4();
        }
      }
    }  
  }

 las4pruebasdeAsmerix();