function nuevoUsuario() {
    let id = 1;
    usuarios.length > 0 && (id = usuarios[usuarios.length - 1].id + 1);
    let agregarUsuario = document.querySelector("#agregarUsuario");
    if (!agregarUsuario) {
      agregarUsuario = document.createElement("div");
      agregarUsuario.setAttribute("id", "agregarUsuario");
    } else {
      agregarUsuario.innerHTML = "";
      const inputNombre = document.createElement("input");
      const inputApellido = document.createElement("input");
      const nombre = document.createElement("span");
      const apellido = document.createElement("span");
      const br = document.createElement("br");
      const hr = document.createElement("hr");
      const agregar = document.createElement("button");
      nombre.innerHTML = "Nombre: ";
      apellido.innerHTML = "Apellido: ";
      agregar.innerHTML = "Agregar Usuario";
  
      agregarUsuario.appendChild(hr);
      agregarUsuario.appendChild(nombre);
      agregarUsuario.appendChild(inputNombre);
      agregarUsuario.appendChild(br);
      agregarUsuario.appendChild(apellido);
      agregarUsuario.appendChild(inputApellido);
      agregarUsuario.appendChild(agregar);
    }
    document.body.appendChild(agregarUsuario);
  };

