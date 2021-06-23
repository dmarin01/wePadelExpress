

const getAllProfesores = (limit = 20, page = 1) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT usuarios.*,profesores.* FROM usuarios, profesores WHERE usuarios.id = profesores.fk_usuario LIMIT ?,?', [limit * (page - 1), limit], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

const getByid = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios as u, profesores as p WHERE u.id = ? AND p.fk_usuario = u.id', [id], (err, row) => {
            if (err) reject(err);
            resolve(row[0]);
        })
    })
}


const createProfesor = ({ experiencia, precio, material_propio, niveles, desplazamiento, fk_usuario }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO profesores (experiencia, precio, material_propio, niveles, desplazamiento, fk_usuario) VALUES (?, ?, ?, ?, ?, ?)', [experiencia, precio, material_propio, niveles, desplazamiento, fk_usuario], (err, results) => {
            if (err) reject(err);
            resolve(results);
        })
    })
}

const filterByPrice = (price1 = 1, price2 = 50) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT usuarios.*,profesores.* FROM usuarios, profesores WHERE usuarios.id = profesores.fk_usuario AND precio >= ? and precio <= ? order by precio asc', [price1, price2], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}


const filterByLevel = (level) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT usuarios.*,profesores.* FROM usuarios, profesores WHERE usuarios.id = profesores.fk_usuario AND niveles = ?', [level], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}

const filterByInstalacions = (boolean = 1) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT usuarios.*,profesores.* FROM usuarios, profesores WHERE usuarios.id = profesores.fk_usuario AND instalacion_propia = ?', [boolean], (err, rows) => {
            if (err) reject(err)
            resolve(rows)

        })
    })
}


const filterByProvincia = (provincia = 'madrid') => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE provincia = ?', [provincia], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}

module.exports = { getAllProfesores, filterByPrice, createProfesor, filterByInstalacions, filterByLevel, filterByProvincia, getByid }