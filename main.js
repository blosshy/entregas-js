
/* SIMULADOR DE COMPRAS */

/* Variables utilizadas como iniciadoras */

let cantidad = 0;
let color = " ";
let talle = " ";
let precio = 0;
let precioFinal = 0;
let cantidadTotal = 0;
let seguirComprando = false;

/* Funciones */

const precioTotal = (precio, cantidad) => precio * cantidad;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const descuentoCodigo = (x) => {
    return x * 0.2
};
const iva = (x) => {
    return x * 0.21
};

function elegirColor(color){
    switch (color) {
        case "blanco":
            precio = 1800;
            break;
        case "negro":
            precio = 1800;
            break;
        case "gris":
            precio = 1800;
            break;
        case "rosa":
            precio = 1800;
            break;
        default:
            alert("Se ha ingresado un color incorrecto.")
            color = " ";
            precio = 0;
            cantidad = 0;
            break;
}
}

function validarDatos (producto, cantidad){
    if(producto == "" || isNaN(cantidad)){ //Validación de productos y cantidades validos
        alert("Error, has ingresado algun dato incorrecto");
        alert("Compra cancelada, vuelva a intentarlo."); 
    }
} 

/* Ciclo do while con las opciones de compra */

do {
    
    producto = prompt("¡Bienvenido a Sanrio Store Argentina! ¿Deseas comprar buzos, remeras o pantalones?").toLowerCase();
    cantidad = Number(prompt("¿Cuantos queres comprar?"));

    switch (producto) {
        case "buzos":
            talle = prompt("Seleccione un talle: S, M, o L").toUpperCase();
            switch (talle) {
                case "S":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "M":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "L":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                default:
                    alert("Se ha ingresado un talle incorrecto.")
                    talle = " ";
                    precio = 0;
                    cantidad = 0;
                    break;
            }
            break;
        case "remeras":
            talle = prompt("Seleccione un talle: S, M, o L").toUpperCase();
            switch (talle) {
                case "S":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "M":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "L":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                default:
                    alert("Se ha ingresado un talle incorrecto.")
                    talle = " ";
                    precio = 0;
                    cantidad = 0;
                    break;
            }
            break;
        case "pantalones":
            talle = prompt("Seleccione un talle: S, M, o L").toUpperCase();
            switch (talle) {
                case "S":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "M":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                case "L":
                    color = prompt("Seleccione un color entre: blanco, negro, gris o rosa").toLowerCase();
                    elegirColor(color);
                    break;
                default:
                    alert("Se ha ingresado un talle incorrecto.")
                    talle = " ";
                    precio = 0;
                    cantidad = 0;
                    break;
            }
            break;
        default:
            alert("Has seleccionado un producto incorrecto");
            precio = 0;
            cantidad = 0;
            break;
    }
    
    /* Validacion en caso de poner la cantidad o el producto incorrectamente*/

    validarDatos(producto,cantidad);

    /*  Variables que acumulan la cantidad y precio */

    cantidadTotal += cantidad;
    precioFinal += precio;
    
    /* Confirm para seguir comprando o no */

    seguirComprando = confirm("¿Desea seguir comprando?")
} while (seguirComprando);

/* Precio total con iva pero sin descuento */

alert("Usted ha comprado en total de :" + " " + cantidadTotal + " productos." + " El valor de la compra es de " + suma(precioTotal(precioFinal, cantidad), iva(precioTotal(precioFinal, cantidad))));

/* Validacion para saber si posee un codigo de descuento o no */

    let descuento = prompt("¿Tenes un codigo de descuento? si/no").toLowerCase();
if (descuento === "si") {
    let codigo = prompt("Ingresa el codigo:").toLowerCase();
    if (codigo === "coder2022") {
        alert("!Felicitaciones! El valor de la compra ahora es de " + resta(suma(precioTotal(precioFinal, cantidad), iva(precioTotal(precioFinal, cantidad))),descuentoCodigo(precioTotal(precioFinal,cantidad))));
    }else{
        alert("El codigo ingresado es incorrecto");
        confirm("¿Desea volver a intentar? si/no");
        if (codigo === "coder2022") {
            alert("El valor de la compra ahora es de " + resta(suma(precioTotal(precioFinal, cantidad), iva(precioTotal(precioFinal, cantidad))),descuentoCodigo(precioTotal(precioFinal,cantidad))));
    }
}
}

/* Terminar la compra */

finalizarCompra = confirm("Para finalizar, ¿Desea finalizar la compra y recibir el recibo para abonarla?");
if (finalizarCompra == true) {
    alert("¡Muchas Gracias por comprar en Sanrio Store Argentina!" + "\n" + "Su compra ha sido realizada con éxito, en breve recibira un mail con el recibo de la misma.");
} else {
    alert("!Entendido! Esperamos volver a verle pronto :)");
}