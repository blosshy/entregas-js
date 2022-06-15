/* TEST MASCOTAS */

let numeroMascotas = Number(prompt("¿Cuantas mascotas tienes?"));
let nombresMascotas = "";

for (let i = 1; i <= numeroMascotas; i++) {
    nombresMascotas += prompt("¿Como se llaman?") + "\n";
}

alert("Tus mascotas se llaman: " + "\n" + nombresMascotas);