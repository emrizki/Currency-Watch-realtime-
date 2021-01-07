const bcrypt = require('bcrypt')

class HelperBcrypt {
    static hashpassword(password) {
        const hash = bcrypt.hashSync(password, 8) //auto-generate a salt and then hash the password
        return hash
    }

    static comparePassword(password, hash){
        return bcrypt.compareSync(password, hash) //return boolean, true or false
    }
}

module.exports = HelperBcrypt 