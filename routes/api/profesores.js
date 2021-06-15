const router = require('express').Router();
const { getAllProfesores, filterByPrice, createProfesor } = require('../../models/profesores.model')

router.get('/', async (req, res) => {
    try {
        const profesores = await getAllProfesores();
        res.json(profesores)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.get('/price/?min=2&max=30', async (req, res) => {

    const min = req.query.min || 1;
    const max = req.query.max || 50;

    try {
        const prices = await filterByPrice(parseInt(min), parseInt(max));
        res.json(prices)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.post('/create', async (req, res) => {
    try {
        const createProf = await createProfesor(req.body);
        res.json(createProf)
    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router;