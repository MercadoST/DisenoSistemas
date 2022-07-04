const {Router} = require('express');
const router = Router();

const fs = require('fs');
const { send } = require('process');
const { v4: uuidv4 } = require('uuid');
const json_personas = fs.readFileSync('Api/db/asociado.json', 'utf-8');
const json_pedidos = fs.readFileSync('Api/db/pedidos.json', 'utf-8');
const json_solicitantes = fs.readFileSync('Api/db/solicitantes.json', 'utf-8');
const json_donaciones= fs.readFileSync('Api/db/donaciones.json', 'utf-8');
let personas = JSON.parse(json_personas);
let pedidos = JSON.parse(json_pedidos);
let solicitantes = JSON.parse(json_solicitantes);
let donaciones = JSON.parse(json_donaciones);


router.get('/', (req, res) =>{
    res.render('Index.ejs')
})
//asociados 
//#region
router.get('/AgAsociado', (req, res) =>{
    res.render('AgAsociado.ejs')
})

router.get('/Asociados', (req, res) =>{
    res.render('Asociados.ejs', {
        personas
    })
})

router.post('/AgAsoc', (req, res) => {
    var asoc = req.body;
    personas.push(asoc);
    var ingasoc = JSON.stringify(personas);
    fs.writeFileSync('Api/db/asociado.json', ingasoc, 'utf-8' );
    console.log('hecho');
    res.redirect('/Asociados');
    // aca agregar la funcion para que agregre en el JSON
})

router.get('/EdAsoc/:dni', (req, res) => {
    var edit = personas.find(asoc => asoc.dni == req.params.dni)
    res.render('EditAsociado.ejs', {
        edit
    })
    // aca agregar la funcion para que busque en el JSON
})

router.post('/EdAsoc', (req, res) => {
    personas = personas.filter(asoc => asoc.dni != req.body.dni)
    var asoc = req.body;
    personas.push(asoc);
    var ingasoc = JSON.stringify(personas);
    fs.writeFileSync('Api/db/asociado.json', ingasoc, 'utf-8' );
    console.log('hecho');

    res.redirect('/Asociados');
    // aca agregar la funcion para que edite en el JSON
})

router.get('/BorrAsoc/:dni', (req, res) => {
    personas = personas.filter(asoc => asoc.dni != req.params.dni)
    let ingasoc = JSON.stringify(personas);
    fs.writeFileSync('Api/db/asociado.json', ingasoc, 'utf-8' );
    res.redirect('/Asociados');
    // aca agregar la funcion para que elimine en el JSON 
})
 //#endregion

//soilicitantes
//#region
router.get('/AgSolicitante', (req, res) =>{
    res.render('AgSolicitante.ejs')
})

router.get('/Solicitantes', (req, res) =>{
    res.render('Solicitantes.ejs', {
        solicitantes
    })
})

router.post('/AgSoli', (req, res) => {
    var soli = req.body;
    solicitantes.push(soli);
    var ingsoli = JSON.stringify(solicitantes);
    fs.writeFileSync('Api/db/solicitantes.json', ingsoli, 'utf-8' );
    console.log('hecho');
    res.redirect('/Solicitantes');
    // aca agregar la funcion para que agregre en el JSON
})

router.get('/EdSoli/:cuit', (req, res) => {
    var edit = solicitantes.find(soli => soli.cuit == req.params.cuit)
    res.render('EditSolicitante.ejs', {
        edit
    })
    // aca agregar la funcion para que busque en el JSON
})

router.post('/EdSoli', (req, res) => {
    solicitantes = solicitantes.filter(soli => soli.cuit != req.body.cuit)
    var soli = req.body;
    solicitantes.push(soli);
    var ingsoli = JSON.stringify(solicitantes);
    fs.writeFileSync('Api/db/solicitantes.json', ingsoli, 'utf-8' );
    console.log('hecho');

    res.redirect('/Solicitantes');
    // aca agregar la funcion para que edite en el JSON
})

router.get('/BorrSoli/:cuit', (req, res) => {
    solicitantes = solicitantes.filter(soli => soli.cuit != req.params.cuit)
    let ingsoli = JSON.stringify(solicitantes);
    fs.writeFileSync('Api/db/solicitantes.json', ingsoli, 'utf-8' );
    res.redirect('/Solicitantes');
    // aca agregar la funcion para que elimine en el JSON 
})
 //#endregion

 //pedidos 
//#region
router.get('/AgPedido', (req, res) =>{
    res.render('AgPedido.ejs', {
        solicitantes
    })
})

router.get('/Pedidos', (req, res) =>{
    res.render('Pedidos.ejs', {
        pedidos
    })
})

router.post('/AgPed', (req, res) => {
    let date = new Date();
    console.log(date.toLocaleDateString());
    const {solicitante, grsan, cantidad, fvencimiento } = req.body;
    let pedi =
    {
        id: uuidv4(),
        solicitante,
        grsan,
        cantidad,
        femision: date.toLocaleDateString() ,
        fvencimiento,
        estado: "No Completado"
    }

    pedidos.push(pedi);
    var ingpedi = JSON.stringify(pedidos);
    fs.writeFileSync('Api/db/pedidos.json', ingpedi, 'utf-8' );
    console.log('hecho');
    res.redirect('/Pedidos');
    // aca agregar la funcion para que agregre en el JSON
})

router.get('/ComPed/:id', (req, res) => {
    var pedi = pedidos.find(pedi => pedi.id == req.params.id)
    pedidos = pedidos.filter(pedi => pedi.id != req.params.id);
    pedi.estado = "Completado";
    pedidos.push(pedi);
    var ingpedi = JSON.stringify(pedidos);
    fs.writeFileSync('Api/db/pedidos.json', ingpedi, 'utf-8' );
    console.log('hecho');
    res.redirect('/Pedidos');
    // aca agregar la funcion para que agregre en el JSON
})

router.get('/EdPed/:id', (req, res) => {
    var edit = pedidos.find(pedi => pedi.id == req.params.id)
    res.render('EditAsociado.ejs', {
        edit,
        solicitantes
    })
    // aca agregar la funcion para que busque en el JSON
})

router.post('/EdPed', (req, res) => {
    var edit = pedidos.find(pedi => pedi.id == req.body.id)
    pedidos = pedidos.filter(pedi => pedi.id != req.body.id)
    edit.solicitante= req.body.solicitante;
    edit.fvencimiento= req.body.fvencimiento;
    edit.grsan = req.body.grsan;
    edit.cantidad = req.body.cantidad;
    pedidos.push(edit);
    var ingpedi = JSON.stringify(pedidos);
    fs.writeFileSync('Api/db/pedidos.json', ingpedi, 'utf-8' );
    console.log('hecho');

    res.redirect('/Pedidos');
    // aca agregar la funcion para que edite en el JSON
})

router.get('/BorrPed/:id', (req, res) => {
    pedidos = pedidos.filter(pedi => pedi.id != req.params.id)
    let ingpedi = JSON.stringify(pedidos);
    fs.writeFileSync('Api/db/pedidos.json', ingpedi, 'utf-8' );
    res.redirect('/Pedidos');
    // aca agregar la funcion para que elimine en el JSON 
})
 //#endregion

// donaciones
//#region
router.get('/AgDonacion', (req, res) =>{
    res.render('AgDonacion.ejs', {
        personas,
        pedidos
    })
})

router.get('/Donaciones', (req, res) =>{
    res.render('Donaciones.ejs', {
        donaciones
    })
})

router.post('/AgDon', (req, res) => {
    const {asociado, pedido, cantidad, fdonacion } = req.body;
    let dona =
    {
        id: uuidv4(),
        asociado,
        pedido,
        cantidad,
        fdonacion
    }

    donaciones.push(dona);
    var ingdona = JSON.stringify(donaciones);
    fs.writeFileSync('Api/db/donaciones.json', ingdona, 'utf-8' );
    console.log('hecho');
    res.redirect('/Donaciones');
    // aca agregar la funcion para que agregre en el JSON
})


router.get('/EdDon/:id', (req, res) => {
    var edit = donaciones.find(dona => dona.id == req.params.id)
    res.render('EditDonacion.ejs', {
        edit,
        personas,
        pedidos
    })
    // aca agregar la funcion para que busque en el JSON
})

router.post('/EdDon', (req, res) => {
    var edit = donaciones.find(dona => dona.id == req.body.id)
    donaciones = donaciones.filter(dona => dona.id != req.body.id)
    edit.asociado= req.body.asociado;
    edit.pedido= req.body.pedido;
    edit.fdonacion = req.body.fdonacion;
    edit.cantidad = req.body.cantidad;
    donaciones.push(edit);
    var ingdona = JSON.stringify(donaciones);
    fs.writeFileSync('Api/db/donaciones.json', ingdona, 'utf-8' );
    console.log('hecho');

    res.redirect('/Donaciones');
    // aca agregar la funcion para que edite en el JSON
})

router.get('/BorrDon/:id', (req, res) => {
    donaciones = donaciones.filter(dona => dona.id != req.params.id)
    let ingdona = JSON.stringify(donaciones);
    fs.writeFileSync('Api/db/donaciones.json', ingdona, 'utf-8' );
    res.redirect('/Donaciones');
    // aca agregar la funcion para que elimine en el JSON 
})
 //#endregion



 
module.exports = router;