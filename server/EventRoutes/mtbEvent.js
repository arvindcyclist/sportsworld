const express = require('express')

const mtbRouter = express.Router()

mtbRouter.get('/', (req, res, next)=>{
    res.status(200).json({message: "mtb get router works"})
})

module.exports = mtbRouter