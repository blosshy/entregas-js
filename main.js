
/* FUNCION QUE ME PREGUNTE ALGO DEPENDIENDO DLE TIPO DE DATO QUE YO QUIERA */
const preguntar = (palabra) =>{
    let entrada = prompt("¡Estamos registrando datos para la Pokedex nacional! Por favor ingrese " + palabra);
    return entrada;
}

/* ARRAY VACIO PARA GUARDAR MIS OBJETOS */
const pokemones = [ ];

/* CLASE CONSTRUCTURA DE OBJETOS */
class Pokemon{
    constructor (nombre,tipo,region,evolucion){
        this.nombre = nombre;
        this.tipo = tipo;
        this.region = region;
        this.evolucion = evolucion
    }
}

/* CICLO WHILE QUE PERMITE CREAR POKEMONES CON LA FUNCION PREGUNTAR Y PUSHEARLOS A MI ARRAY VACIO */
let confirmacion = confirm("¿Desea registrar un Pokemon nuevo?");

while (confirmacion) {
    const pokemonNuevo = new Pokemon(preguntar("el nombre del Pokemon"),preguntar("el o los tipos del Pokemon"),preguntar("la region de procedencia del Pokemon"),preguntar("la cantidad de evoluciones que posee su Pokemon"));

    pokemones.push(pokemonNuevo);
    
    let otroIntento = confirm("¿Desea registrar otro Pokemon?");
    if (!otroIntento) {
        break;
    }
}

/* POR CADA OBJETO POKEMON EN MI ARRAY SE CREA UNA SECCION EN MI HTML */
for (const pokemon of pokemones) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
                <h1 class="titulo">Has registrado al Pokemon llamado: ${pokemon.nombre}</h1>
                <p class="info">Su/s tipo/s es/son: ${pokemon.tipo} y se lo encuentra principalmente en ${pokemon.region}.</p>
                <p class="info">Por ultimo, este Pokemon posee un total de ${pokemon.evolucion} evoluciones.
    `;
    document.body.appendChild(contenedor);
}


/* ES LA MISMA LOGICA SOLO QUE EN LUGAR DE POKEMONES USE PERSONAS */

/* const preguntar = (palabra) =>{
    let entrada = prompt("Por favor ingrese su " + palabra);
    return entrada;
}

const personas = [ ];

class Persona{
    constructor (nombre,edad,genero,mail){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.mail = mail
    }
}

let confirmacion = confirm("¿Desea registrar una persona nueva?");

while (confirmacion) {
    const personaNueva = new Persona(preguntar("nombre"),preguntar("edad"),preguntar("genero"),preguntar("mail"));

    personas.push(personaNueva);
    
    let otroIntento = confirm("¿Desea registrar una persona nueva?");
    if (!otroIntento) {
        break;
    }
}

for (const persona of personas) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
                <h2>El nombre de la persona es ${persona.nombre}</h2>
                <p>Su edad es de ${persona.edad}, su genero es ${persona.genero} y 
                su correo electronico es ${persona.mail}</p>
    `;
    document.body.appendChild(contenedor);
}

 */

