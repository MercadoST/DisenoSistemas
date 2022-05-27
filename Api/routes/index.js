const {Router} = require('express');
const router = Router();


router.get('/', (req, res) =>{
    res.render('Index.ejs')
})

router.get('/AgAsociado', (req, res) =>{
    res.render('AgAsociado.ejs')
})

router.get('/EdAsociado', (req, res) =>{
    res.render('EdAsociado.ejs')
})

module.exports = router;