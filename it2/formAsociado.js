window.onload = cargarEventos();

const formulario = document.getElementById('form-asoc');
const inputs = document.querySelectorAll('#form-asoc input');
    //e = document.getElementById("agregar");

var validarDni = function (e) {
    if (formulario.dni.value <= 1000000) {
        alert("DNI no valido");
        e.preventDefault();
    }
};

function validarNombre(e) {
    if (formulario.Nombre.value == 0) {
        alert("Ingrese Nombre valido");
        e.preventDefault();
    }
}

var validarApellido = function (e) {
    if (formulario.Apellido.value == 0) {
        alert("Ingrese Apellido valido");
        e.preventDefault();
    }
};

var validarEmail = function (e) {
    if (formulario.Email.value == 0) {
        alert("Ingrese Email valido");
        e.preventDefault();
    }
};


const validar = (e) => {
    alert("validando")
    validarDni(e);
    validarNombre(e);
    validarApellido(e);
    validarEmail(e);
};



function cargarEventos() {
    formulario.addEventListener("submit", validar(e));
    alert("javaScript");
};
