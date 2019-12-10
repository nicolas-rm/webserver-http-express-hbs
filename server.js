/* require: el modulo express */
const express = require('express');
const hbs = require('hbs');
/* archivo de helpers hbs */
require('./hbs/helpers');

/* enviar todo a una variable */
const app = express();

/* datos necesarios para la configuracion */
const port = 3000;


/* Midellware: son peticiones, callback de cualquier url que queramos ver*/

/* NOTA: Tener cuidado con las peticiones de / sin dato porque pueden chocar, ya sea que se muestre la pagina o se muestre la peticion */

/* Midellware Publico */
/* __dirname: Busca la carpeta en un directorio global sin importar en donde se encuentre */
app.use(express.static(__dirname + '/public'));

/* HBS: permite el redireccionamiento entre paginas, de manera dinamica */
/* linea para que el navegador sepa que hacer y reconozca el plugin como principal */
app.set('view engine', 'hbs');


/* HBS:PARCIAL, permite que un codigo siempre este en cualquier pagina, reutilizacion de codigo */
hbs.registerPartials(__dirname + '/views/Partials');


/* peticiones */

/*solamente funciona cuando tiene un / ,despues de eso ya no */
app.get('/', function(req, res) {
    // res.send('Hello Word');
    // let json = {
    //     nombre: 'Nicolas',
    //     edad: 21,
    //     url: req.url
    // };

    // res.send(json);


    /* renderisa el home.hbs , manda los datos a las variables nombre, date*/
    /* EJEMPLO POR VARIABLE */
    // res.render('home', {
    //     nombre: 'Nicolas',
    //     datos: new Date().getFullYear()
    // });

    /* EJEMPLO POR HBS.HELPERS */
    res.render('home', {
        nombre: 'nicolas'
    });


});


app.get('/about', function(req, res) {
    // res.send('Hello Word');
    // let json = {
    //     nombre: 'Nicolas',
    //     edad: 21,
    //     url: req.url
    // };

    // res.send(json);


    /* renderisa el home.hbs , manda los datos a las variables nombre, date*/
    res.render('about');


});

/*solamente funciona cuando tiene un / + valor ,despues de eso ya no */
/* app.get('/data', function(req, res) {
    res.send('Hola data');
    // let json = {
    //     nombre: 'Nicolas',
    //     edad: 21,
    //     url: req.url
    // };

    // res.send(json);
}); */

app.listen(port, () => {
    console.log(`SERVIDOR INICIADO EN EL PUERTO: ${port}`);
});