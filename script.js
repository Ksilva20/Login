
let usuarios = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        direccion: "Calle 123",
        identificacion: "987654321",
        edad: 30,
        sexo: "masculino",
        email: "juan.perez@gmail.com",
        telefono: "555-1234"
    },
    {
        nombre: "María",
        apellido: "García",
        direccion: "Avenida ABC",
        identificacion: "234876324",
        edad: 25,
        sexo: "femenino",
        email: "MariaG@gmail.com",
        telefono: "555-5678"
    },
    {
        nombre: "Carlos",
        apellido: "Rodriguez",
        direccion: "Calle 456",
        identificacion: "876623493",
        edad: 18,
        sexo: "masculino",
        email: "Crodriguez@gmail.com",
        telefono: "555-9012"
    },
    {
        nombre: "Joyliz",
        apellido: "Guitierrez",
        direccion: "Avenida DEF",
        identificacion: "527593785",
        edad: 20,
        sexo: "femenino",
        email: "Joy10@gmail.com",
        telefono: "555-3456"
    },
    {
        nombre: "Kevin",
        apellido: "Silva",
        direccion: "Calle 69",
        identificacion: "1011261307",
        edad: 22,
        sexo: "masculino",
        email: "Ksilva@gmail.com",
        telefono: "555-7890"
    }
];



const registrarUsuario = () => {
   
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let direccion = document.getElementById("Direccion").value;
    let identificacion = document.getElementById("Identificacion").value;
    let edad = document.getElementById("Edad").value;
    let sexo = document.getElementById("Sexo").value;
    let email = document.getElementById("Email").value;
    let telefono = document.getElementById("Telefono").value;


    // Check if any of the fields are empty
    if (nombre === "" || apellido === "" || direccion === "" || identificacion === "" || edad === "" || email === "" || telefono === "") {
        // Show an alert message if any field is empty
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Por favor, complete todos los campos.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }

    

    

    if (!/^\d+$/.test(identificacion)) {
        // Show a Bootstrap-style alert message if the identificacion field contains letters
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "El campo de identificación solo acepta números.";
        document.getElementById("Identificacion").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }
    

    if (!/^\d+$/.test(edad)) {
        // Show an alert message if the edad field is not a number
        alert("El campo de edad solo acepta números.");
        return; // Exit the function early
    }

    // Check if the user with the same name and last name is already registered
    let isAlreadyRegistered = usuarios.some(usuario => {
        return usuario.nombre === nombre && usuario.apellido === apellido;
    });

    if (isAlreadyRegistered) {
        // Show an alert message if the user is already registered
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Este usuario ya está registrado.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }

    let isAlreadyRegistered1 = usuarios.some(usuario => {
        return usuario.identificacion === identificacion && usuario.identificacion === identificacion;
    });

    if (isAlreadyRegistered1) {
        // Show an alert message if the user is already registered
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Esta identificacion ya está registrada.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }

    // Create a new user object
    let usuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        identificacion: identificacion,
        edad: edad,
        sexo: sexo,
        email: email,
        telefono: telefono
    };

    // Add the user object to the usuarios array
    usuarios.push(usuario);

    // Clear the input fields
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Direccion").value = "";
    document.getElementById("Identificacion").value = "";
    document.getElementById("Edad").value = "";
    document.getElementById("Sexo").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Telefono").value = "";

    // Show a success message
    let alertElement = document.createElement("div");
    alertElement.classList.add("alert", "alert-success");
    alertElement.textContent = "Usuario registrado con éxito!";
    document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
};

const listarUsuarios = () => {
    // Verificar si hay usuarios registrados
    if (usuarios.length === 0) {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "No hay usuarios registrados.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return;
    }

    // Convertir el array de usuarios a una cadena JSON
    const usuariosJSON = JSON.stringify(usuarios);

    // Codificar la cadena JSON para que sea segura en una URL
    const usuariosEncoded = encodeURIComponent(usuariosJSON);

    // Redirigir a la página "tablaregistro.html" con los datos como parámetro de la URL
    window.location.href = `tablaregistro.html?datos=${usuariosEncoded}`;
};
