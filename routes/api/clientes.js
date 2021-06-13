const { getAllUsers } = require('../../models/clientes.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (err) {
        res.json({ error: err.message })
    }

})



module.exports = router;