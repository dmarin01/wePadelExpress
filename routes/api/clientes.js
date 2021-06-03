const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('api/clientes funchiona')
})

module.exports = router;