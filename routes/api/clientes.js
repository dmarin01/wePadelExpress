const { getById } = require('../../models/usuario.model')
const { getAllUsers, updateUser, upImg } = require('../../models/clientes.model');
const fs = require('fs');
const { fileURLToPath } = require('url');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });

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

router.put('/upimg', upload.single('img'), async (req, res) => {
    console.log(req.user)
    const extension = '.' + fileURLToPath.mimetyp.split('/');[1];

    const newName = req.file.filename + extension;

    const newPath = 'http://localhost:3000/api/clientes/upimg/' + req.file.path + extension;

    fs.renameSync(req.file.path, newPath)

    req.body.img = newName;


    try {
        const upPhoto = await upImg(req.body, req.user.id)
        res.json(upPhoto)
    } catch (err) {
        res.json({ error: err.message })
    }
})



module.exports = router;