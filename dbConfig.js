const mysql = require('mysql');

const pool = mysql.createPool({
<<<<<<< Updated upstream
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
=======
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wepadel_bbdd',
    port: 8889
>>>>>>> Stashed changes
});

/* const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "wepadel_bbdd",
    port: 3306
}); */

global.db = pool;