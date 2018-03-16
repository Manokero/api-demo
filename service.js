// services.js
var jwt = require('jwt-simple');
var moment = require('moment');

exports.createToken = function () {
    var payload = {
        sub: 'manokero11',
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, '123456wildinmota12oo');
};