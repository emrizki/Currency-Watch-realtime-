const { user } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')


class userController {
  static register(req, res, next) {
    const newUser = {
      email: req.body.email,
      password: req.body.password
    }

    user.create(newUser)
      .then(user => {
        const response = {
          id: user.id,
          email: user.email
        }
        return res.status(201).json(response)
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    const loginObj = {
      email: req.body.email,
      password: req.body.password
    }

    user.findOne({
      where: {
        email: loginObj.email
      }
    })
      .then(user => {
        if (!user) {
          next({ name: 'unauthorized' })
        }

        const match = comparePassword(loginObj.password, user.password)
        if(match) {

        } else {
          next({ name: 'unauthorized'})
        }
        return res.status(200).json(user)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = userController