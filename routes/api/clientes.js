const { getById } = require('../../models/usuario.model')
const { getAllUsers, updateUser } = require('../../models/clientes.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const user = await getById(req.params.id)
        res.json(user)

    } catch (err) {
        res.json({ error: err.message })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const update = await updateUser(req.params.id, req.body)
        res.json(update)
    } catch (err) {
        res.json({ error: err.message })
    }
})



module.exports = router;