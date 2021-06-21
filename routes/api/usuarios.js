const { createUser, getByEmail } = require('../../models/usuario.model');


const router = require('express').Router();
const bscrypt = require('bcrypt');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken')



router.post('/register', async (req, res) => {

    req.body.password = bscrypt.hashSync(req.body.password, 10);

    try {
        const register = await createUser(req.body)
        console.log(register);
        res.json(register)
    } catch (err) {
        res.json({ error: err.message })
    }
})


router.post('/login', async (req, res) => {

    const user = await getByEmail(req.body.email);
    console.log(user);
    if (!user) {
        return res.json({ error: 'El email y/o contraseña son incorrectos' })
    }

    const same = bscrypt.compareSync(req.body.password, user.password);
    if (same) {
        res.json({ success: 'Bienvenido', token: createToken(user), id: user.id })
    } else {
        res.json({ error: 'El email y/o contraseña son incorrectos' })
    }

})


function createToken(user) {

    const obj = {
        user_id: user.id,
        expiration: dayjs().add(3, 'M').unix()
    }
    return jwt.sign(obj, 'token user')
}

module.exports = router;