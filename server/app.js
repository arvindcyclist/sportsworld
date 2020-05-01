const express = require('express')
const roadRouter = require('./EventRoutes/roadEvent')
const mtbRouter = require('./EventRoutes/mtbEvent')

const app = express()

app.use('/api/road', roadRouter)
app.use('/api/mtb', mtbRouter)

module.exports = app