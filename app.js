require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// renderizar vistas 
app.set('view engine', 'hbs');
// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {
    // enviar argumentos del controlador
    nombre: 'Pedro Araya',
    titulo: 'Curso de Node'
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    // enviar argumentos del controlador
    nombre: 'Pedro Araya',
    titulo: 'Curso de Node'
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    // enviar argumentos del controlador
    nombre: 'Pedro Araya',
    titulo: 'Curso de Node'
  });
});



app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})