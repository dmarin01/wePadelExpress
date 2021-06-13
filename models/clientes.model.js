
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })

    });
}









module.exports = { getAllUsers }