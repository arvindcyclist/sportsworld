const express = require('express')

const roadRouter = express.Router()

roadRouter.get('/', (req, res, next)=>{
    res.status(200).json({message: "road get router works"})
})

module.exports = roadRouter