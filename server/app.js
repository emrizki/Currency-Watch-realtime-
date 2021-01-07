const express = require('express')
const app = express()
const port = 3001
const router = require('./routes')
const errorHandlers = require('./middlewares/errorHandlers')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.use(errorHandlers)

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})