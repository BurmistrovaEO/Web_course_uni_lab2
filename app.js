/* eslint-env es6 */
/* eslint-disable */
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "usersdb",
    password: "heyheyyouyou"
});
// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
const pool = mysql.createPool({
    connectionLimit: 15,
    host: "localhost",
    user: "root",
    database: "usersdb",
    password: "heyheyyouyou"
});

app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "hbs");

app.get('/', function (req, res) {
    res.render('index', {});
    // do something here.
});

app.get('/pizza1', function (req, res) {
    res.render('pizza1', {});
    // do something here.
});

app.get('/pizza2', function (req, res) {
    res.render('pizza2', {});
    // do something here.
});
app.get('/pizza3', function (req, res) {
    res.render('pizza3', {});
    // do something here.
});
app.get('/pizza4', function (req, res) {
    res.render('pizza4', {});
    // do something here.
});
app.get('/pizza5', function (req, res) {
    res.render('pizza5', {});
    // do something here.
});
app.get('/pizza6', function (req, res) {
    res.render('pizza6', {});
    // do something here.
});
app.get('/pizza7', function (req, res) {
    res.render('pizza7', {});
    // do something here.
});
app.get('/pizza8', function (req, res) {
    res.render('pizza8', {});
    // do something here.
});
app.get('/pizza9', function (req, res) {
    res.render('pizza9', {});
    // do something here.
});
app.get('/pizza10', function (req, res) {
    res.render('pizza10', {});
    // do something here.
});
app.get('/pizza11', function (req, res) {
    res.render('pizza11', {});
    // do something here.
});
app.get('/pizza12', function (req, res) {
    res.render('pizza12', {});
    // do something here.
});
app.get('/pizza13', function (req, res) {
    res.render('pizza13', {});
    // do something here.
});
app.get('/pizza14', function (req, res) {
    res.render('pizza14', {});
    // do something here.
});


// возвращаем форму для добавления данных
app.get('/create', function (req, res) {
    res.render("create.hbs");
    console.log("in create.hbs now");
});

// получаем отправленные данные и добавляем их в БД

app.post('/create', urlencodedParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);  
    const name = req.body.name;
    const surname = req.body.surname;
    const address = req.body.address;
    const phone = req.body.phone;
    //const total = req.body.total;
    
    console.log(surname + " " + address + " " + phone);
    pool.query("INSERT INTO visitors (name, surname, address, phone) VALUES (?,?,?,?)", [name, surname, address, phone], function (err, data) {
        if (err) return console.log(err);
        console.log("was sent to db table");
        res.redirect("/comment_w");
    });
});

app.get('/comment_w', function (req, res) {
    res.render("comment_w.hbs");
    console.log("in comment_w.hbs now");
});

app.post('/comment_w', urlencodedParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    const comment = req.body.comment;
    
    console.log(comment);
    pool.query("INSERT INTO comments (comment) VALUES (?)", [comment], function (err, data) {
        if (err) return console.log(err);
        console.log("was sent to db table");
        //res.redirect("/");
    });
});
app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});
