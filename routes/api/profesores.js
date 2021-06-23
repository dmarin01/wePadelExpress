const router = require('express').Router();
const { getAllProfesores, filterByPrice, createProfesor, filterByLevel, filterByInstalacions, filterByProvincia, getByid } = require('../../models/profesores.model')

router.get('/', async (req, res) => {
    try {
        const profesores = await getAllProfesores();
        res.json(profesores)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.get('/price', async (req, res) => {

    let min = req.query.min;
    let max = req.query.max;
    console.log(min, max);

    try {
        const prices = await filterByPrice(min, max);
        console.log(prices);
        res.json(prices)
    } catch (err) {
        res.json({ error: err.message })
    }
})


router.get('/detalle/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const detalle = await getByid(req.params.id)
        res.json(detalle)
    } catch (err) {
        res.json({ error: err.message })
    }
})


router.get('/level/:number', async (req, res) => {
    try {
        const level = await filterByLevel(req.params.number)
        res.json(level)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.get('/instalations/:boolean', async (req, res) => {
    try {
        const instalations = await filterByInstalacions(req.params.boolean)
        res.json(instalations)
    } catch (err) {
        res.json({ error: err.message })
    }
})



router.post('/create', async (req, res) => {
    try {
        req.body.fk_usuario = req.user.id
        const createProf = await createProfesor(req.body);
        res.json(createProf)
    } catch (err) {
        res.json({ error: err.message })
    }
})


module.exports = router;