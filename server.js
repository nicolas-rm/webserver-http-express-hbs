/* require: el modulo express */
const express = require('express');

/* enviar todo a una variable */
const app = express();

/* datos necesarios para la configuracion */
const port = 3000;


/* Midellware: son peticiones, callback de cualquier url que queramos ver*/

/* NOTA: Tener cuidado con las peticiones de / sin dato porque pueden chocar, ya sea que se muestre la pagina o se muestre la peticion */

/* Midellware Publico */
app.use(express.static(__dirname + '/public'));



/* peticiones */

/*solamente funciona cuando tiene un / ,despues de eso ya no */
/* app.get('/', function(req, res) {
    // res.send('Hello Word');
    let json = {
        nombre: 'Nicolas',
        edad: 21,
        url: req.url
    };

    res.send(json);
}); */

/*solamente funciona cuando tiene un / + valor ,despues de eso ya no */
app.get('/data', function(req, res) {
    res.send('Hola data');
    // let json = {
    //     nombre: 'Nicolas',
    //     edad: 21,
    //     url: req.url
    // };

    // res.send(json);
});

app.listen(port, () => {
    console.log(`SERVIDOR INICIADO EN EL PUERTO: ${port}`);
});