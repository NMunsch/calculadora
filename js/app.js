let coma = 0;
let error = 0;
let resultado = '';
//let calculadora = new Calculadora();
function refrescar() {
    document.getElementById("pantalla").value = "";
    localStorage.clear();
    primerNumero = 0;
    segundoNumero = 0;
    operacion = 0;
    coma = 0;
    error = 0;
    resultado = '';
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
            coma = 0;
            error = 1;
        }
    }
}

function operadores(segundoNumero) {
    coma = 0;
    numero1 = document.getElementById("pantalla").value;
    localStorage.setItem("numero1", "pantalla");
    document.getElementById("pantalla").value = "";
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + segundoNumero;
    operador = document.getElementById("pantalla").value;
    localStorage.setItem("operador", "pantalla");
    document.getElementById("pantalla").value = "";
}

function operar() {
    numero2 = document.getElementById("pantalla").value;
    localStorage.setItem("numero2", "pantalla");
    document.getElementById("pantalla").value = "";
    let primerNumero = numero1;
    let segundoNumero = numero2;
    let operacion = operador;
    if (primerNumero == '') {
        primerNumero = 0;
    }
    if (segundoNumero == '') {
        segundoNumero = 0;
    }
    let resultado = eval(parseFloat(primerNumero) + operacion + parseFloat(segundoNumero));
    // resultado = calculadora.operar(primerNumero,segundoNumero,operacion)
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + resultado;
    localStorage.clear;
}