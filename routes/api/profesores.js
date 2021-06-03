const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('esto funciona')
})

module.exports = router;