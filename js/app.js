let coma = 0;
let error = 0;
function refrescar() {
    document.getElementById("pantalla").value = "";
    localStorage.clear();
    a = 0;
    b = 0;
    c = 0;
    coma = 0;
    error = 0;
}

function mostrar(a) {
    if (error == 1) {
        document.getElementById("pantalla").value = "";
        error = 0;
    }
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + a;
    if (isNaN(a) == true) {
        coma = coma + 1;
        if (coma > 1) {
            document.getElementById("pantalla").value = "";
            document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
            coma = 0;
            error = 1;
        }
    }
}

function operadores(b) {
    coma = 0;
    numero1 = document.getElementById("pantalla").value;
    localStorage.setItem("numero1", "pantalla");
    document.getElementById("pantalla").value = "";
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + b;
    operador = document.getElementById("pantalla").value;
    localStorage.setItem("operador", "pantalla");
    document.getElementById("pantalla").value = "";
}

function operar() {
    numero2 = document.getElementById("pantalla").value;
    localStorage.setItem("numero2", "pantalla");
    document.getElementById("pantalla").value = "";
    let a = numero1;
    let b = numero2;
    let c = operador;
    if (a == '') {
        a = 0;
    }
    if (b == '') {
        b = 0;
    }
    let resultado = eval(parseFloat(a) + c + parseFloat(b));
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + resultado;
}