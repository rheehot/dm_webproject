const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

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

app.post('/login', (req, res) => {
    const sql = 'select * from user where id = ? and pw = ?';
    const query = [req.body.id, req.body.pw];
    connection.query(sql, query, (err, rows) => {
        console.log(rows.id)
        if (err) throw err;
        else if (rows.length === 0) res.status(403).end();
        else res.send(true);
    });
});

app.get('/logout', (req, res) => {
    res.send(false);
});

app.post('/signUp', (req, res) => {
    const sql = 'insert into user(id, pw) values(?,?)';
    const query = [req.body.id, req.body.pw];
    console.log(query)
    connection.query(sql, query, (err, rows) => {
        if (err) throw err;
        else if (rows.length === 0) res.status(403).end();
        else res.send(true);
    });
});

app.post('/question', (req, res) => {
    let sqlWhere = new String();
    if (req.body.q1 === true) sqlWhere += `frontend = ${req.body.q1} and `
    if (req.body.q2 === true) sqlWhere += `backend = ${req.body.q2} and `
    if (req.body.q3 === true) sqlWhere += `javascript = ${req.body.q3} and `
    if (req.body.q4 === true) sqlWhere += `java = ${req.body.q4} and `
    if (req.body.q5 === true) sqlWhere += `senior = ${req.body.q5} and `

    const sql = `select dev_name, email, link from developer where ${sqlWhere.slice(0, sqlWhere.length - 4)}`;
    connection.query(sql, (err, rows) => {
        if (err) throw err;
        else if (rows.length === 0) res.status(403).end();
        else {
            res.json(rows);
        }
    })
});

app.listen(5000, () => {
    console.log('dm_webproject, server listen 5000');
});