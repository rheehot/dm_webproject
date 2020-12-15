const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { Router } = require('express');

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root',
    database: 'dm_webproject',
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('home');
});

app.get('/sql', (req, res) => {
    const sql = 'select * from user where id = ? and pw = ?';
    const query = ['jaehw', 'jaehwan0917'];
    console.log(query);
    connection.query(sql, query, (err, rows, fileds) => {
        console.log('rows ::', rows);
        if (err) throw err;
        else {
            const sql = 'select id from user where id = ?';
            const query = ['jaehwan'];
            connection.query(sql, query, (err, rows) => {
                if (err) res.status(500).send({ error: 'id err' });
                else res.send(rows);
            });
        }
    });
});

app.post('/login', (req, res) => {
    const sql = 'select * from user where id = ? and pw = ?';
    const query = [req.body.id, req.body.pw];
    connection.query(sql, query, (err, rows) => {
        console.log(rows)
        if (err) throw err;
        else if (rows.length === 0) res.status(403).end();
        else res.send(true);
    });
});

app.get('/logout', (req, res) => {
    res.send(false);
});

app.listen(5000, () => {
    console.log('hello world!!');
});