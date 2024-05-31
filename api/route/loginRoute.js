const express = require('express')
const router = express.Router()
const { handleChecklogin } = require('../controller/loginController')

router.post('/checkLog', handleChecklogin)



module.exports = router