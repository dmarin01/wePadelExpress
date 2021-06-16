const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const { getById } = require('../models/usuario.model')

const checkToken = async (req, res, next) => {

    console.log(req.header['authorization']);
    if (!req.header['authorization']) {
        return res.json({ error: 'Necesitas cabecera de autenticación' })
    }

    const token = req.header['authorization'];

    let obj;

    try {
        obj = jwt.verify(token, 'success');
    } catch (err) {
        return res.json({ error: err.massage })
    }

    const currentDate = dayjs().unix();
    if (currentDate > obj.expiration) {
        return res.json({ error: 'Token caducado' })
    }


    const user = await getById(obj.user_id);

    req.user = user


    next();

}

module.exports = { checkToken }