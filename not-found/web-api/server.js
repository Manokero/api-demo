const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const middelware = require('./middelware')

const app = express()
const PORT = (process.env.PORT || 3000)

let responseJson = {
    executedSuccessfully: false,
    message: '',
    status: 0
}

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

app.post('/login', middelware.ensureAuthenticated, function(req, res){
  let auth = req.headers.authorization

    let user = req.body.user;
    let password = req.body.password;

    res.json({
        username: user,
        pass: password,
        authorization: auth
    })
})

app.post('/signup', function(req, res) {
    let username = req.body.name;
    let lastName = req.body.lastName;
    let email = req.email.email;
    let password = req.body.password;

})


app.listen(PORT, function() {
    console.log(`Magic is on ${PORT}`)
})