function createTitle() {
    const titleH1 = document.createElement("h1");
    const titleH2 = document.createElement("h2");
    titleH1.innerHTML = "Preentrega 3 Javascript";
    titleH2.innerHTML = "Calculadora de Sueldos";

    document.body.appendChild(titleH1);
    document.body.appendChild(titleH2);
}

function createMenu() {
    let opciones = ["Registrar Nuevo Usuario", "Listar Usuarios Registrados", "Calcular Sueldo", "Listar Sueldos"];
    opciones.forEach((opcion) => {
      const boton = document.createElement("button");
      boton.innerHTML = opcion;
  
      if (opcion === "Registrar Nuevo Usuario") {
        boton.addEventListener("click", () => {
          nuevoUsuario();
          //listarUsuarios(usuarios);
        });
      } else if (opcion === "Listar Usuarios Registrados") {
        boton.addEventListener("click", () => {
          //listarUsuarios(usuarios);
        });
      } else if (opcion === "Calcular Sueldo") {
        boton.addEventListener("click", () => {
          //calcularSueldo()
        });
      } else if (opcion === "Listar Sueldos") {
        boton.addEventListener("click", () => {
          //listarSueldos()
        });
      }
      document.body.appendChild(boton);
    });
  }