
function init() {
    
    const miBoton = document.getElementById("mibtn");


    miBoton.addEventListener( 'click' , () => {

    let clave = document.getElementById("clave").value;
    let valor = document.getElementById("valor").value;

    localStorage.setItem(clave, valor);

});

}
