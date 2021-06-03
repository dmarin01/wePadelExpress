

const getAllProfesores = (limit = 10, page = 1) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores LIMIT ?,?', [limit * (page - 1), limit], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = { getAllProfesores, }