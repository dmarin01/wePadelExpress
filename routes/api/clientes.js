const { getById } = require('../../models/usuario.model')
const { getAllUsers, updateUser, upImg, changePassword } = require('../../models/clientes.model');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const bcrypt = require('bcrypt')

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.get('/user', async (req, res) => {
    try {
        const user = await getById(req.user.id)
        res.json(user)

    } catch (err) {
        res.json({ error: err.message })
    }
})

router.put('/update', async (req, res) => {
    try {
        const update = await updateUser(req.user.id, req.body)
        res.json(update)
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.put('/upimg', upload.single('img'), async (req, res) => {

    const extension = '.' + req.file.mimetype.split('/')[1];

    const newName = 'http://localhost:3000/images/' + req.file.filename + extension;
    console.log(newName);
    const newPath = req.file.path + extension;

    fs.renameSync(req.file.path, newPath)

    req.body.img = newName;


    try {
        const upPhoto = await upImg(req.body.img, req.user.id)
        res.json({ success: upPhoto, id: req.user.id })
    } catch (err) {
        res.json({ error: err.message })
    }
})

router.put('/changepw', async (req, res) => {

    console.log(req.body);
    req.body.password1 = bcrypt.hashSync(req.body.password1, 10);

    try {
        const userPass = await changePassword(req.body.password1, req.user.id)
        res.json(userPass)

    } catch (err) {
        res.json({ error: err.message })
    }
})



module.exports = router;