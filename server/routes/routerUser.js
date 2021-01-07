const router = require('express').Router()
const userController = require('../controller/userController.js')

router.get('/register', userController)
router.get('/login', userController)
router.get('/home', userController)


module.exports = router