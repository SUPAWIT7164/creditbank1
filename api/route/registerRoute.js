const express = require('express')
const router = express.Router()
const { handleRegister, handleRegisTeacher, handleCheckEmail } = require('../controller/registerController')

router.post('/registerData', handleRegister)
    // router.post('/registerTea', handleRegisTeacher)
router.post('/regisCheckEmail', handleCheckEmail)

module.exports = router