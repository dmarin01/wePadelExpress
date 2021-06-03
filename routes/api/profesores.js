const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('api/profesores funchiona')
})

module.exports = router;