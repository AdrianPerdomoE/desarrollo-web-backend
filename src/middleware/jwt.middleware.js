const { verifyToken } = require("../controllers/jwt");

const middlewareToken = (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization ? authorization.replace("Bearer ", "") : null
        const user = verifyToken(token)
        req.user_logged = user
        next()
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: "Error en la verificación",
            info: error.toString()
        })
    }



}


module.exports = { middlewareToken }