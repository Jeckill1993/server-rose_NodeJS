const http = require('http');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 5000;

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "roze"
});

database.connect((error) => {
    if (error) throw error;
    console.log("Connected!");
    const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    database.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`server is running on port ${port}`);
})