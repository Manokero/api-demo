const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const middelware = require('./middelware')

const app = express()
const PORT = (process.env.PORT || 3000)

const router = express.Router()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet())

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

// app.use('/api',)

app.listen(PORT, function() {
    console.log(`Magic is on ${PORT}`)
})