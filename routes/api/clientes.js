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

router.put('/upimg', upload.single('imagen'), async (req, res) => {

    const extension = '.' + fileURLToPath.mimetyp.split('/');[1];

    const newName = req.file.filenmae + extension;

    const newPath = req.file.path + extension;

    fs.renameSync(req.file.path, newPath)

    req.body.imagen = newName;


    try {
        const upPhoto = await upImg(req.body, req.body.id)
        res.json(upPhoto)
    } catch (err) {
        res.json({ error: err.message })
    }
})



module.exports = router;