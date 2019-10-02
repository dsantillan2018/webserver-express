const hbs = require('hbs');

// Helpers

// Funcion que retorna el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

// Funcion para poner la primera letra de una palabra en mayuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});