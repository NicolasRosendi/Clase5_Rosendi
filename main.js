alert("Registro necesario para acceder al asistente virtual");

class usuario{
    constructor(nu, co){
       this.nu = nu;
       this.co = co;
    }
    registro(){
         alert("Usuario" + " " + "'" + this.nu + "'" + " " + "registrado correctamente")
                
}
}

var x;
var z;

const usuairo1 = new usuario (x = prompt("Nombre de usuario"), z = prompt("Contraseña"));
usuairo1.registro();

alert("Buenos días" + " " + x);

asistente();

function asistente(principal) {
    principal = prompt("Diga un comando o utilize 'HELP' para conocerlos").toUpperCase();
switch (principal) {
    case "HELP":
        alert("Los comandos son 'ESC', 'CALCULADORA', 'RR' y 'USUARIO'")
        return asistente();
    
    
        case "RR":
        alert("Never gonna give you up, never gonna let you down, never gonna run around and desert you...")
        return asistente();

        case "USUARIO":
            alert("Usted es:" + " " + x);
            return asistente();
    
    
        case "CALCULADORA":
        calc();
    

    default:
        alert("Error, comando:" + " " + "'" + principal + "'" + " " + "No reconocido")
        return asistente();
        ;

        case "ESC":
        
        break
}
    
} {
    
}


function calc(cuenta, n1, n2, operacion) {
    operacion = prompt("elija '+' para suma, '-' para resta, '*' para multiplicar, o '/' para dividir. También puede utilizar 'ESC' para salir de la calculadora").toUpperCase();
    switch (operacion) {
        case "+":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 + n2;
            alert(cuenta)
            return calc();
        case "ESC":
            return asistente();
        case "-":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 - n2;
            alert(cuenta)
            return calc();
        case "*":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 * n2;
            alert(cuenta)
            return calc();
        case "/":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));                
            cuenta = n1 / n2;
            alert(cuenta)
            return calc();                
    
        default:
        alert("Error, comando:" + " " + "'" + operacion + "'" + " " + "No reconocido");
            return calc();
    }
}

