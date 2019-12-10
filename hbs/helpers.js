const hbs = require('hbs');


/* HBS: HELPERS: ayuda a optimizar el codigo, reutilizar lineas de codigo que se repiten, en especfico una funcion dentro del modulo hbs*/
hbs.registerHelper('getDatos', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('getCapitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});