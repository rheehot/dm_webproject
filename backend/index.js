const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root',
    database: 'dm_webproject',
});
connection.connect();


app.get('/', (req, res) => {
    res.send('home');
});

app.get('/sql', (req, res) => {
    connection.query('select * from user', (err, row) => {
        if (err) console.log('error!!!', err);
        res.send(row);
    });
});

app.post('/login', (req, res) => {
    console.log('post req', req.headers);
    console.log('post req', req.body);
    res.send('hi')
});

app.listen(5000, () => {
    console.log('hello world!!');
});

// connection.end();