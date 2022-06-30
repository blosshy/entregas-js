/* ARRAY CON OBJETOS */

const productos = [{
        "id": 1,
        "modelo": "Buzo Kuromi",
        "precio": 1200,
        "cantidad": 1
    },
    {
        "id": 2,
        "modelo": "Buzo Melody",
        "precio": 1800,
        "cantidad": 1
    },
    {
        "id": 3,
        "modelo": "Buzo Cinnamonroll",
        "precio": 1500,
        "cantidad": 1,
    }
];

/* FUNCIONES */

/* AGREGAR PRODUCTOS AL CARRITO */
function agregarProductosAlCarrito(id) {
    let producto = productos.find(producto => producto.id === id);
    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        console.log(carrito);
    } else {
        carrito.push(producto);
        console.log(carrito);
    }
}

/* FUNCION PARA MOSTRAR LISTA DE PRODUCTOS */
function mostrarListaOrdenada(){
    let array = [];
    
    for (i=0; i<carrito.length; i++){
        array.push(carrito[i].modelo+" $"+carrito[i].precio+" c/u" +" ,"+carrito[i].cantidad+ " unidades en total.");
    }
    alert("Lista de productos seleccionados:"+"\n"+array.join("\n"))
}

/* SUMAR PRECIO TOTAL */
function sumarTotal() {
    let precioTotal = 0;
    carrito.forEach(producto => {
        precioTotal += producto.cantidad * producto.precio;
    })
    return precioTotal;
}

/* SUMAR CANTIDAD TOTAL */
function cantidadTotal() {
    let cantidadTotal = 0;
    carrito.forEach(producto => {
        cantidadTotal += producto.cantidad;
    })
    return cantidadTotal;
}

/* PRECIO CON IVA */
const iva = (x) => {
    return x * 0.21
};

/* SUMA */
const suma = (a, b) => a + b;

/* PRECIO EN CUOTAS */
function precioEnCuotas(precio, cuotas) {
    return precio / cuotas;
}

/* PRECIO CON INTERES EN CUOTAS */
function interes(precio) {
    return precio * 0.2;
}

/* ARRAY VACIO PARA EL CARRITO */

const carrito = [];

let compra = confirm("¡Bienvenido a Sanrio Store Argentina! ¿Desea iniciar la compra?");

/* BUCLE WHILE CON EL PROCESO DE COMPRA Y PUSH DE PRODUCTOS AL CARRITO */
if (compra) {
    let productosElegidos = " ";

    while (productosElegidos != "no") {
        productosElegidos = prompt(`

                ¿Que productos deseas agregar al carrito?

                Ingrese 1 para seleccionar el Buzo modelo: Kuromi.
                Ingrese 2 para seleccionar el Buzo modelo: Melody.
                Ingrese 3 para seleccionar el Buzo modelo: Cinnamonroll.

                Para dejar de comprar ingresa "no".
            `);

        if (productosElegidos == "no") {
            break;
        } else if (productosElegidos > 3) {
            alert("El numero ingresado no corresponde con ninguno de nuestros productos :(");
        } else if (productosElegidos == null) {
            break;
        }
        agregarProductosAlCarrito(parseInt(productosElegidos));
    }
    
   /*  FUNCIONES DE PRECIO Y CANTIDAD TOTALES */
    let cantidadFinal = cantidadTotal();
    let precioTotal = sumarTotal() + iva(sumarTotal());

    mostrarListaOrdenada();

    alert("El valor de tu compra es de un total de : " + precioTotal + "$. Por un total de " + cantidadFinal + " productos.")
    
    /*MEDIO DE PAGO */
    let otroIntento = true;

    while (otroIntento) {
        let medioDePago = prompt(` 
    Elija su metodo de pago:

    Seleccione A para pagar con tarjeta de credito.

    Seleccione B para pagar con deposito bancario.
    `).toUpperCase();

        if (medioDePago == "A") {
            let cuotas = Number(prompt(`
        ¡Solo por hoy ofrecemos pagos de 6 a 12 cuotas!
        ¿En cuantas cuotas desea abonarlo? 
        Es importante recordar que las cuotas poseen un interes del 20%
        `));
            if ((cuotas == 6) || (cuotas == 12)){
                alert("La compra se realizara en " + cuotas + " cuotas de " + suma(precioEnCuotas(precioTotal, cuotas), interes(precioEnCuotas(precioTotal, cuotas))) + "$");
                alert("¡La compra ha sido realizada con exito! En breve le estara llegando el recibo de la compra por correo, una vez confirmado el pago nos comunicaremos para informarle sobre el envio. Muchas gracias por visitarnos :)");
                break;
            } else{
                alert("Has ingresado un valor incorrecto. Vuelve a intentarlo.")
            }
        }else if (medioDePago == "B"){
            alert("¡La compra ha sido realizada con exito! En breve le estara llegando el recibo de la compra por correo, una vez realizado el pago nos comunicaremos para informarle sobre el envio. Muchas gracias por visitarnos :)")
            break;
        }else{
            alert("Por favor seleccione una opcion de pago valida.")
        }
    }

} else {
    alert("¡Esperamos volver a verlo pronto! :D");
}