let coma = 0;
let resultado = '';
let ope = 0;
let primerNumero = '';
let segundoNumero = '';

function refrescar() {
    document.getElementById("pantalla").value = "";
    primerNumero = '';
    segundoNumero = '';
    operacion = 0;
    coma = 0;
    resultado = '';
    ope = 0;
}

function mostrar(primerNumero) {
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + primerNumero;
    if (isNaN(primerNumero) == true) {
        coma = coma + 1;
        if (coma > 1) {
            document.getElementById("pantalla").value = "";
            document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
        }
    }
}

function operadores(segundoNumero) {
    ope = ope + 1;
    if (ope > 1) {
        document.getElementById("pantalla").value = "";
        document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
    }
    else {
        numero1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value = "";
        document.getElementById("pantalla").value = document.getElementById("pantalla").value + segundoNumero;
        operador = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value = "";
    }
}

function operar() {
    ope = 0;
    numero2 = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = "";
    if (numero1 == '') {
        numero1 = 0;
    }
    if (numero2 == '') {
        numero2 = 0;
    }

    calculadora = new calc();

    document.getElementById("pantalla").value = document.getElementById("pantalla").value + resultado;
}