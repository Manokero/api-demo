var jwt = require('jwt-simple');
var moment = require('moment');

exports.ensureAuthenticated = function (req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)

            .json({ "message": "Tu petición no tiene cabecera de autorización" });
    }

    console.log(req.headers.authorization)

        var token = req.headers.authorization.split(" ")[1];
        var en = jwt.encode('megustaprogramar', '1234hh')
    var payload = jwt.decode(en, '1234hh');
    

    if (payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send({ message: "El token ha expirado" });
    }

    req.user = payload.sub;
    next();
}