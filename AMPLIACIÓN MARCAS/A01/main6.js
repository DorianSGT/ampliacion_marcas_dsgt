var nNum = 30;
console.log("el valor es "+nNum);

nNum = nNum +1;
console.log("el valor es "+nNum);

nNum = nNum +5;
console.log("el valor es "+nNum);

nNum++; //es lo mismo que nNum = nNum +1;
console.log("el valor es "+nNum);

nNum = nNum -1;
console.log("el valor es "+nNum);

nNum--;  //es lo mismo que nNum = nNum -1;
console.log("el valor es "+nNum);

// objeto o registro

let objetoAlumno = {
    nombre: 'Bego',
    cod_alumno: 45760
};

console.log(objetoAlumno);
console.log(" el nombre del alumno es "+objetoAlumno.nombre);
console.log(" el código del alumno es "+objetoAlumno.cod_alumno);

//objeto aula
let objetoAula = {
    numero_mesas: 30,
    color: 'celeste',
    nombre: "ASIR1",
    numero_perchas: 15 
};

//sumar en una variable las mesas más las perchas

var mo = objetoAula.numero_mesas + objetoAula.numero_perchas;

console.log(" mo es "+mo)