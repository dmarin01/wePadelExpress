

const getAllProfesores = (limit = 10, page = 1) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores LIMIT ?,?', [limit * (page - 1), limit], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

const createProfesor = ({ experiencia, precio, material_propio, niveles, desplazamiento, rango_desplazamiento, nombre, apellido, email, direccion, telefono }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT * FROM profesores INSERT INTO profesores (experiencia, precio, material_propio, niveles, desplazamiento, rango_desplazamiento, nombre, apellido, email, direccion, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [experiencia, precio, material_propio, niveles, desplazamiento, rango_desplazamiento, nombre, apellido, email, direccion, telefono], (err, results) => {
            if (err) reject(err);
            resolve(results);
        })
    })
}

const filterByPrice = (price1 = 1, price2 = 50) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores where precio >= ? and precio <= ? order by precio asc', [price1, price2], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = { getAllProfesores, filterByPrice, createProfesor }