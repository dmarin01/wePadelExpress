const createUser = ({ user_name, nombre, apellidos, email, telefono, password }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (user_name, nombre, apellidos, email, telefono, password) values (?,?,?,?,?,?)', [user_name, nombre, apellidos, email, telefono, password], (err, row) => {
            if (err) reject(err)
            resolve(row)
        })
    })
}


const getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios where email = ?', [email], (err, row) => {
            if (err) reject(err);
            if (row.length !== 1) resolve(null);
            resolve(row[0])
        })
    })
}





module.exports = { createUser, getByEmail }