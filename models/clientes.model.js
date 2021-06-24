
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    });
}


const updateUser = (userID, { nombre, apellidos, email, provincia, telefono, edad, nivel, username, descripcion }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE usuarios SET nombre = ?, apellidos = ?, email = ?, provincia = ?, telefono = ?, edad = ?, nivel = ?, username = ?, descripcion = ? WHERE id = ? ', [nombre, apellidos, email, provincia, telefono, edad, nivel, username, descripcion, userID], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

const upImg = (img, id) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE usuarios SET img_cliente= ? WHERE id = ?', [img, id], (err, select) => {
            if (err) reject(err)
            resolve(select)
        })
    })
}

const changePassword = (password, id) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE usuarios SET password = ? WHERE id = ?', [password, id], (err, row) => {
            if (err) reject(err)
            resolve(row)
        })
    })
}


module.exports = { getAllUsers, updateUser, upImg, changePassword }