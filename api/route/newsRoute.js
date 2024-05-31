const express = require('express')
const router = express.Router()
const { handleFileUpload } = require('../controller/newsController')

// router.post('/hotNews', handleNews)
router.post('/filePic', handleFileUpload)

module.exports = router