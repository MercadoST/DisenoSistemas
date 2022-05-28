const {Router} = require('express');
const router = Router();

const fs = require('fs');
const { send } = require('process');
const json_personas = fs.readFileSync('Api/db/asociado.json', 'utf-8');
let personas = JSON.parse(json_personas);

router.get('/', (req, res) =>{
    res.render('Index.ejs')
})

router.get('/AgAsociado', (req, res) =>{
    res.render('AgAsociado.ejs')
})

router.get('/Asociados', (req, res) =>{
    res.render('EdAsociado.ejs', {
        personas
    })
})
router.get('/DelAsociado', (req, res) =>{
    res.render('DelAsociado.ejs')
})

router.get('/AgAsoc', (req, res) => {
    console.log('llego');
    //const archivo = new XMLHttpRequest();
    //archivo.open('GET', 'db/asociado.json', false);
    //archivo.send();
    

    res.send('Funco');
    // aca agregar la funcion para que lea el JSON
})

router.post('/AgAsoc', (req, res) => {
    var asoc = req.body;
    personas.push(asoc);
    var ingasoc = JSON.stringify(personas);
    fs.writeFileSync('Api/db/asociado.json', ingasoc, 'utf-8' );
    console.log('hecho');
    res.redirect('/');
    // aca agregar la funcion para que agregre en el JSON
})

router.get('/EdAsoc', (req, res) => {
    res.send('Funco');
    // aca agregar la funcion para que busque en el JSON
})

router.post('/EdAsoc', (req, res) => {
    res.send('Funco post');
    // aca agregar la funcion para que edite en el JSON
})

router.get('/BorrAsoc/:dni', (req, res) => {
    personas = personas.filter(asoc => asoc.dni != req.params.dni)
    let ingasoc = JSON.stringify(personas);
    fs.writeFileSync('Api/db/asociado.json', ingasoc, 'utf-8' );
    res.redirect('/Asociados');
    // aca agregar la funcion para que elimine en el JSON (post o delete?)
})

module.exports = router;