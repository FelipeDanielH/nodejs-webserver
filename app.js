require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Felipe',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Felipe',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Felipe',
        titulo: 'Curso de node'
    })
})

/* app.get('*', (req, res) => {
    res.render('home', {
        nombre: 'Felipe',
        titulo: 'Curso de node'
    })
}) */

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});