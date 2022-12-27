
/*
1-Pedir Nombre
2-Cartel de bienvenido {Nombre}
3-Preguntar Ganancia por hora
4-Preguntar Horas Trabajadas por mes
5-Preguntar si trabaja en blanco o negro

Incorporar objetos, un array con filtrado y busqueda, se puede usar class constructor y funcion de orden superior

Selección de opciones, Crear Usuario o elegir usuario-
Calcular sueldo o seleccionar sueldo-
Preguntar futura accion al terminar el programa-
*/

//-----------------------------------------------------------------------------------------------------------------------
let usuarios = [];
let sueldos = [];
let name = "";
inicializarApp();
opcionesSueldos();


function inicializarApp(){
    let option= 0;
    let repetir=true;
    while(repetir=true){
    let seleccion= Number(prompt(
    `Bienvenidos a la calculadora de sueldos, porfavor seleccione la opcion deseada
    -Crear usuario(1)
    -Elegir usuario(2)`))
    console.log(seleccion);
    if (seleccion===1||2){
        repetir=false;
        option=seleccion;
    }else{
        alert("Por favor seleccione una opcion valida");
    }
    }if(option===1){
    crearUsuario();
    }else{
    elegirUsuario();
    }
}

function opcionesSueldos(){
        let option= 0;
        let repetir=true;
    while(repetir=true){
        let seleccion= Number(prompt(
        `Bienvenidos a la calculadora de sueldos, porfavor seleccione la opcion deseada
        -Calcular Sueldo(1)
        -Ver Sueldo(2)`))
        if (seleccion===1||2){
            repetir=false;
            option=seleccion;
        }else{
            alert("Por favor seleccione una opcion valida");
        }
    }if(option===1){
        crearSueldo(name);
    }else{
        verSueldo();
    }
    }



function crearUsuario(){
    let nombre=prompt("ingresa tu nombre aquí");
    let apellido=prompt("ingresa tu apellido aquí");
    let id=1
    if(usuarios.length>0)
    {
        id = usuarios[usuarios.length-1].id+1
    } ;
    let usuario= new Usuario (id,nombre,apellido);
    usuarios.push(usuario);
    alert("Bienvenido " + nombre);
    name=nombre;
}

function elegirUsuario(){
    if (usuarios.length=0){
        alert("En este momento no hay usuarios existentes, porfavor cree uno nuevo");
    }else{
        console.log(usuarios);
        let idUsuario = Number(prompt("Ingrese el id del usuario que desea seleeccionar"));
        const result = usuarios.find(({ id }) => id === idUsuario);
        name=result.name;
    }
}

function crearSueldo(nombre){
let ganancia=gananciaPorHora(nombre);
let tiempoTrabajado=horasPorMes();
let trabajo=condicionLaboral();
let salario=calculoHoras(ganancia, tiempoTrabajado, trabajo);
let condicion=" ";
let id=1
    if(usuarios.length>0)
    {
        id = usuarios[usuarios.length-1].id+1
    } ; 
if (trabajo=1){
    condicion="Negro";
}
else{
    condicion="Blanco";
}
alert(`Si tu ganancia por hora es de ${ganancia}, tus horas por mes son ${tiempoTrabajado} y trabajas en ${condicion}, tu salario es $${salario}`);
let sueldo= new Sueldo (id,ganancia,tiempoTrabajado,salario,condicion);   
}

function verSueldo(){
    if (sueldos.length=0){
        alert("En este momento no hay sueldos existentes, porfavor cree uno nuevo");
    }else{
        console.log(sueldos);
        let idSueldo = Number(prompt("Ingrese el id del sueldo que desea seleeccionar"));
        const result = sueldos.find(({ id }) => id === idSueldo);
        console.log("Sueldo seleccionado: ", result);
    }

}

function calculoHoras(ganancia, tiempoTrabajado, trabajo){

    const horas= ganancia*tiempoTrabajado;
    const total= horas*trabajo;
    return total;
}

function gananciaPorHora(nombre){
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

