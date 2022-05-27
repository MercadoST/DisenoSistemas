//const { get } = require('http');
const local = "http://localhost:3000"

const form = document.getElementById('formulario');

form.addEventListener("submit", function (event) {
    validar(event);
    event.preventDefault();
    let transFormData = new FormData(form);
    let asocObj = crearAsociado(transFormData);
    sendToStorage(asocObj);
    form.reset();
})

function crearAsociado(transFormData) {

    let dni = document.querySelector("#dni").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let donante = transFormData.get("donante")
    return {
        "dni": dni,
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "donante": donante
    }
}

function sendToStorage(asocObj) {
    let objjson = JSON.stringify(asocObj);
    let ref = asocObj.dni;
    fetch('http://localhost:3000/AgAsoc',{
        method: 'POST',
        body: objjson
    })
}
/*
function sendToStorage(asocObj) {
    let objjson = JSON.stringify(asocObj);
    let ref = asocObj.dni;
    if (localStorage.getItem(ref) == null) {
        localStorage.setItem(ref, objjson)
        alert("Los datos fueron ingresados correctamente");
    } else {
        alert("El DNI ya se encuentra registrado")
    }
}
*/

function validar(e) {
    validarDni(e);
    validarNombre(e);
    validarApellido(e);
    validarEmail(e)
}

var validarDni = function (e) {
    if (form.dni.value <= 1000000) {
        alert("DNI no valido");
        e.preventDefault();
    }
};

var validarNombre = function (e) {
    if (form.nombre.value == 0) {
        alert("Ingrese Nombre valido");
        e.preventDefault();
    }
};

var validarApellido = function (e) {
    if (form.apellido.value == 0) {
        alert("Ingrese Apellido valido");
        e.preventDefault();
    }
};

var validarEmail = function (e) {
    if (form.email.value == 0) {
        alert("Ingrese Email valido");
        e.preventDefault();
    }
}
