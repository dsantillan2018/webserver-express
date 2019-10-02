const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

// Constante que obtiene el puerto de heroku, si se sube una instancia local el puerto sera 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daVid sAntillAN'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});