let coma = 0;
let error = 0;
let resultado = '';
let ope = 0;

function refrescar() {
    document.getElementById("pantalla").value = "";
    primerNumero = 0;
    segundoNumero = 0;
    operacion = 0;
    coma = 0;
    error = 0;
    resultado = '';
    ope = 0;
}

function mostrar(primerNumero) {
    
    if (error == 1) {
        document.getElementById("pantalla").value = "";
        error = 0;
    }
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + primerNumero;
    if (isNaN(primerNumero) == true) {
        coma = coma + 1;
        if (coma > 1) {
            document.getElementById("pantalla").value = "";
            document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
            primerNumero = 0;
            segundoNumero = 0;
            operacion = 0;
            coma = 0;
            error = 0;
            resultado = '';
            ope = 0;
        }
    }
}

function operadores(segundoNumero) {
    ope = ope + 1;
    if (ope > 1) {
        document.getElementById("pantalla").value = "";
        document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
        primerNumero = 0;
        segundoNumero = 0;
        operacion = 0;
        coma = 0;
        error = 0;
        resultado = '';
        ope = 0;
    }
    else {
        coma = 0;
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