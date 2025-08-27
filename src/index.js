// Vatiables
//let const var

let numero1 = 20;
let numero2 = 50;
let mensaje = "Chancho feliz";
let porcentaje = 20;

numero1 = "Otro texto "; //sin let la variable es debilmente equipada

let suma = numero1 + numero2;

console.log(suma); //consola

let condicion = 0;
while (condicion <= 10){
    console.log(condicion);
    ++condicion;
}

function sumarNumeros(numero1, numero2) { //funcion
    return numero1 + numero2;
}


let resultado = function(parametro1, parametro2){ //agregar una funcion a una variable
    
}



//number toma todo y lo convierte a numero
//parseInt solo tomara numeros y las letras no



suma = numero1 + numero2;

console.log("Suma Capturada " + suma);

document.getElementById("resultadoSuma").style.display = "none";

document.getElementById("calcular").onclick = function(){
    nombre = document.getElementById("nombre").value;

    numero1 = Number(document.getElementById("primerNumero").value);
    numero2 = Number(document.getElementById("segundoNumero").value);   //parceInt()letra y numero

    let suma;

    if (numero1 <=160) {
        suma = numero1 * numero2;
    } else {
        suma = (numero1 * numero2) * (1 + porcentaje/100);
    }


    
    
    document.getElementById("resultadoSuma").innerHTML = "El resultado es " + suma;
    document.getElementById("resultadoSuma").style.display = "inline";
    return;
}