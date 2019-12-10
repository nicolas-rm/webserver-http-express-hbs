/* requiere el http, para poder usarlo, crearlo, y configurarlo */
const http = require('http');


/* datos necesarios para la configuracion */
const port = 3000;

/* creacion del server */
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let json = {
        nombre: 'Nicolas',
        edad: 21,
        url: req.url
    };
    res.write(JSON.stringify(json));
    /* cuando se usa write se debe de finalizar con end */
    // res.write('HOLA MUNDO');
    res.end();
}).listen(port);

console.log(`SERVIDOR INICIADO EN EL PUERTO: ${port}`);