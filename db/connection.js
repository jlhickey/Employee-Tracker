//Require MySQL module
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Only1man4me',
        database: 'coding_db'
    },
    console.log('Connected to the coding database.')
);
db.connect(function (err) {
    if (err) throw err;
});

module.exports = db;
