const mysql = require('mysql');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors')

const middelware = require('./middelware')
const dbConfig = require('../config/db.config');

const app = express()
const PORT = (process.env.PORT || 3000)

let responseJson = {
    executedSuccessfully: false,
    message: '',
    status: 0
}

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet())

app.get('/', function(req, res) {
    
    res.json({
        message: "Works dude",
        requestBody: req.body
    })
})

var con = mysql.createConnection(dbConfig.config);


app.post('/login', middelware.ensureAuthenticated, function(req, res){
  let auth = req.headers.authorization

    let email = req.body.email;
    let password = req.body.password;

    res.json({
        email: email,
        password: password,
        authorization: auth
    })
})

app.post('/signup', function(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    let sql = `INSERT INTO users (firstName, lastName, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${password}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.json({message: "1 record inserted"});
    });

    con.end();

})


app.listen(PORT, function() {
    console.log(`Magic is on ${PORT}`)
})