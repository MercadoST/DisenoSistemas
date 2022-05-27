const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')


module.exports = app;


//#region
//#Settings
app.set('port', 3000);

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

// Routes
app.use(require('./routes/index'));

// 404 handler
app.use((req, res, next) =>{
    res.status(404).send('404 Not Found');
})

//#endregion

app.get('/AgAsoc', (req, res) => {
    console.log('llego');
    //const archivo = new XMLHttpRequest();
    //archivo.open('GET', 'db/asociado.json', false);
    //archivo.send();
    

    res.send('Funco');
    // aca agregar la funcion para que lea el JSON
})

app.post('/AgAsoc', (req, res) => {
    res.send('Funco post');
    // aca agregar la funcion para que agregre en el JSON
})

app.get('/EdAsoc', (req, res) => {
    res.send('Funco');
    // aca agregar la funcion para que busque en el JSON
})

app.post('/EdAsoc', (req, res) => {
    res.send('Funco post');
    // aca agregar la funcion para que edite en el JSON
})

app.post('/BorrAsoc', (req, res) => {
    res.send('Funco post');
    // aca agregar la funcion para que elimine en el JSON (post o delete?)
})