const express = require('express')
const router = express.Router()
const { handleRegister, handleRegisTeacher, } = require('../controller/registerController')

router.post('/registerData', handleRegister)
router.post('/registerTea', handleRegisTeacher)
    // router.post('/registerTea', handleRegisAdmin)

module.exports = router