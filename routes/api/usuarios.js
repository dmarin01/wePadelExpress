const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('api/usuarios funchiona')
})

module.exports = router;