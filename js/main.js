/* Calculadora de sueldos */



//Usuarios > id, Nombre, Apellido
const userAdmin = new Usuario(1, "Admin", "Admin");
const user1 = new Usuario(2, "Raul", "Gonzalez");
const user2 = new Usuario(3, "Matias", "Gecke");
const user3 = new Usuario(4, "Christian", "Belessi");
let usuarios = [];

//prestamo > id,ganancia,horas,sueldoTotal,condicion
const consulta1 = new Sueldo(1, 150, 60, 9000, "negro");
const consulta2 = new Sueldo(2, 350, 58, 20300, "blanco");
const consulta3 = new Sueldo(3, 500, 90, 45000, "negro");
let sueldos = [];

localStorage.getItem("usuarios") ? (usuarios = JSON.parse(localStorage.getItem("usuarios"))) : (usuarios = [user1, user2, user3]);

localStorage.getItem("sueldos") ? (usuarios = JSON.parse(localStorage.getItem("sueldos"))) : (usuarios = [consulta1, consulta2, consulta3]);

inicializarApp();

function inicializarApp(){
  createTitle();
  createMenu();
}





//let usuarios = [];
//let sueldos = [];
//let name = "";
//let repeat = true;
//while (repeat === true) {
//  inicializarApp();
//  opcionesSueldos(name);
//  finalizar(name);
//}

function finalizar(name) {
  let repetir = true;
  while (repetir === true) {
    let respuesta = Number(
      prompt(`${name} Que deseas hacer a continuacion?
    -Continuar el programa(1)
    -Finalizar la ejecucion(2)`)
    );
    if (respuesta === 2) {
      repetir = false;
      repeat = false;
      return repeat;
    } else if (respuesta === 1) {
      repetir = false;
      break;
    } else {
      alert("Ingrese una opcion valida");
    }
  }
}

/*function inicializarApp() {
  let option = 0;
  let repetir = true;
  while (repetir === true) {
    let seleccion = Number(
      prompt(
        `Bienvenidos a la calculadora de sueldos, porfavor seleccione la opcion deseada
    -Crear usuario(1)
    -Elegir usuario(2)`
      )
    );
    if (seleccion === 1 || seleccion === 2) {
      option = seleccion;
      repetir = false;
      break;
    } else {
      alert("Por favor seleccione una opcion valida");
    }
  }

  if (option === 1) {
    crearUsuario();
  } else {
    elegirUsuario();
  }
}*/

function opcionesSueldos() {
  let option = 0;
  let repetir = true;
  while (repetir === true) {
    let seleccion = Number(
      prompt(
        `Bienvenidos a la calculadora de sueldos, porfavor seleccione la opcion deseada
        -Calcular Sueldo(1)
        -Ver Sueldo(2)`
      )
    );
    if (seleccion === 1 || seleccion === 2) {
      repetir = false;
      option = seleccion;
      break;
    } else {
      alert("Por favor seleccione una opcion valida");
    }
  }
  if (option === 1) {
    crearSueldo(name);
  } else {
    verSueldo();
  }
}

function crearUsuario() {
  let nombre = prompt("ingresa tu nombre aquí");
  let apellido = prompt("ingresa tu apellido aquí");
  let id = 1;
  if (usuarios.length > 0) {
    id = usuarios[usuarios.length - 1].id + 1;
  }
  let usuario = new Usuario(id, nombre, apellido);
  usuarios.push(usuario);
  alert("Bienvenido " + nombre);
  name = nombre;
}

function elegirUsuario() {
  repetir = true;
  while (repetir === true) {
    if (usuarios.length < 1) {
      alert("En este momento no hay usuarios existentes, porfavor cree uno nuevo");
      repetir = false;
      crearUsuario();
      break;
    } else {
      console.log(usuarios);
      let idUsuario = Number(prompt("Ingrese el id del usuario que desea seleeccionar"));
      let map = usuarios.map((obj) => {
        if (obj.id === idUsuario) {
          return idUsuario;
        } else {
          return false;
        }
      });
      let includes = map.includes(false);
      console.log("includes:", includes);
      if (includes === true) {
        alert("el id ingresado es inexistente, por favor intente nuevamente");
      } else {
        const result = usuarios.find(({ id }) => id === idUsuario);
        name = result.name;
        repeat = false;
        break;
      }
    }
  }
}

function crearSueldo(nombre) {
  let ganancia = gananciaPorHora(nombre);
  let tiempoTrabajado = horasPorMes();
  let trabajo = condicionLaboral();
  let salario = calculoHoras(ganancia, tiempoTrabajado, trabajo);
  let condicion = " ";
  let id = 1;
  if (usuarios.length > 0) {
    id = usuarios[usuarios.length - 1].id + 1;
  }
  if ((trabajo = 1)) {
    condicion = "Negro";
  } else {
    condicion = "Blanco";
  }
  alert(`Si tu ganancia por hora es de ${ganancia}, tus horas por mes son ${tiempoTrabajado} y trabajas en ${condicion}, tu salario es $${salario}`);
  let sueldo = new Sueldo(id, ganancia, tiempoTrabajado, salario, condicion);
}

function verSueldo() {
  repetir = true;
  while (repetir === true) {
    if (sueldos.length < 1) {
      alert("En este momento no hay sueldos existentes, porfavor cree uno nuevo");
      crearSueldo(name);
      repetir = false;
      break;
    } else {
      console.log(sueldos);
      let idSueldo = Number(prompt("Ingrese el id del usuario que desea seleeccionar"));
      let map = usuarios.map((obj) => {
        if (obj.id === idSueldo) {
          return idSueldo;
        } else {
          return false;
        }
      });
      let includes = map.includes(false);
      console.log("includes:", includes);
      if (includes === true) {
        alert("el id ingresado es inexistente, por favor intente nuevamente");
      } else {
        const result = usuarios.find(({ id }) => id === idUsuario);
        console.log("Sueldo seleccionado: ", result);
        repeat = false;
        break;
      }
    }
  }
}

function calculoHoras(ganancia, tiempoTrabajado, trabajo) {
  const horas = ganancia * tiempoTrabajado;
  const total = horas * trabajo;
  return total;
}

function gananciaPorHora(nombre) {
  let repetir = true;
  while (repetir === true) {
    const ganancia = Number(prompt(nombre + " " + "Ingresa cuanto ganas por hora"));
    if (isNaN(ganancia)) {
      alert("Ingresá un valor valido");
    } else if (ganancia < 0) {
      alert("El número no puede ser menor a 0");
    } else {
      repetir = false;
      return ganancia;
    }
  }
}

function horasPorMes() {
  let repetir = true;
  while (repetir === true) {
    const horasTrabajadas = Number(prompt("Ingresa cuantas horas trabajas por mes"));
    if (isNaN(horasTrabajadas)) {
      alert("Ingresá un valor valido");
    } else if (horasTrabajadas < 0) {
      alert("El número no puede ser menor a 0");
    } else {
      repetir = false;
      return horasTrabajadas;
    }
  }
}

function condicionLaboral() {
  let repetir = true;
  let impuesto = 0;
  while (repetir === true) {
    const condicionLaboral = prompt("¿Trabajas en blanco o en negro? Responder solo blanco o negro");
    if (condicionLaboral.toLowerCase() === "blanco") {
      impuesto = 0.81;
      repetir = false;
      return impuesto;
    } else if (condicionLaboral.toLowerCase() === "negro") {
      impuesto = 1;
      repetir = false;
      return impuesto;
    } else {
      alert("Ingresá un valor valido");
    }
  }
}
