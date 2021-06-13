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

router.get('/price', async (req, res) => {
    try {
        const prices = await filterByPrice();
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