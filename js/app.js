var coma = 0;
function refrescar() {
    document.getElementById("pantalla").value = "";
    localStorage.clear();
    a = 0;
    b = 0;
    c = 0;
    coma = 0;
}

function mostrar(a) {
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + a;
    if (isNaN(a) == true) {
        coma = coma + 1;
        if (coma > 1) {
            document.getElementById("pantalla").value = "";
            document.getElementById("pantalla").value = document.getElementById("pantalla").value + "syntax error";
            coma = 0;
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
    coma = 0;
    numero2 = document.getElementById("pantalla").value;
    localStorage.setItem("numero2", "pantalla");
    document.getElementById("pantalla").value = "";
    var a = numero1;
    var b = numero2;
    var c = operador;
    localStorage.getItem("operador");
    var resultado = eval(parseFloat(a) + c + parseFloat(b));
    document.getElementById("pantalla").value = "";
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + resultado;
    localStorage.clear();
}