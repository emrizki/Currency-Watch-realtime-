const { checkToken } = require('../helpers/jwt')
const { user } = require('../models/index')

class Auth {
    static authentication(req, res, next) {
        try {
            let decoded = checkToken(req.headers.access_token)
            user.findOne({
                where: { email: decoded.email }
            })
            .then( data => {
                if(!data) {
                    res.status(401).json({msg : 'Please Login First'})
                } else {
                    req.user = data
                    next()
                }
            })
            .catch(err => {
                res.status(500).json({msg : err.message})
            })
        } catch (err) {
            res.status(500).json({msg: err.message})            
        }
    }

    static authorization (req, res, next) {
        const id = +req.params.id
        const userData = +req.user.id

        todo.findByPk(id)
        .then(data => {
            if(!data){
                res.status(403).json({msg : 'You dont have access'})
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json({msg : err.message})
        })
    
    }
}



module.exports = Auth