const router = require('express').Router()
const userRouter = require('../routes/routerUser')

router.use(userRouter)

module.exports = router