
/*
1-Pedir Nombre
2-Cartel de bienvenido {Nombre}
3-Preguntar Ganancia por hora
4-Preguntar Horas Trabajadas por mes
5-Preguntar si trabaja en blanco o negro
*/
let nombre=prompt("ingresa tu nombre aquí");
let bienvenida=alert("Bienvenido " + nombre);
let ganancia=gananciaPorHora();
let tiempoTrabajado=horasPorMes();
let trabajo=condicionLaboral();
let salario=calculoHoras();
let condicion=" ";
if (trabajo=1){
    condicion="Negro";
}
else{
    condicion="Blanco";
}
alert(`Si tu ganancia por hora es de ${ganancia}, tus horas por mes son ${tiempoTrabajado} y trabajas en ${condicion}, tu salario es $${salario}`);


function calculoHoras(){

    const horas= ganancia*tiempoTrabajado;
    const total= horas*trabajo;
    return total;
}

function gananciaPorHora(){
    let repetir=true;
    while(repetir=true) {
        const ganancia=Number(prompt(nombre + " " + "Ingresa cuanto ganas por hora" ));
        if (isNaN(ganancia)){
            alert("Ingresá un valor valido");
        }
        else if (ganancia<0){
            alert("El número no puede ser menor a 0");
        }
        else{
            repetir=false;
            return ganancia;
        } 

    }
}

function horasPorMes(){
    let repetir=true;
    while(repetir=true) {
        const horasTrabajadas=Number(prompt("Ingresa cuantas horas trabajas por mes"));
        if (isNaN(horasTrabajadas)){
            alert("Ingresá un valor valido");
        }
        else if (horasTrabajadas<0){
            alert("El número no puede ser menor a 0");
        }
        else{
            repetir=false;
            return horasTrabajadas;
        } 

    }
}

function condicionLaboral(){
    let repetir=true;
    let impuesto=0;
    while(repetir=true) {
        const condicionLaboral=prompt("¿Trabajas en blanco o en negro? Responder solo blanco o negro");
        if (condicionLaboral.toLowerCase()==="blanco"){
            impuesto=0.81;
            repetir=false;
            return impuesto;
        }
        else if (condicionLaboral.toLowerCase()==="negro"){
            impuesto=1;
            repetir=false;
            return impuesto;
        }
        else{
            alert("Ingresá un valor valido");
        } 

    }
}

