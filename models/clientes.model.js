
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    });
}


const updateUser = (userID, { nombre, apellidos, email, direccion, telefono, edad, nivel, username }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE usuarios SET nombre = ?, apellidos = ?, email = ?, direccion = ?, telefono = ?, edad = ?, nivel = ?, username = ? WHERE id = ? ', [nombre, apellidos, email, direccion, telefono, edad, nivel, username, userID], (err, result) => {
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


module.exports = { getAllUsers, updateUser, upImg }