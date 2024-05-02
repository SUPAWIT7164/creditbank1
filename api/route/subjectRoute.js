const express = require('express')
const router = express.Router()
const { handleAddSubject, handleSelectSubject, handleApproveSub, handleCancelSub } = require('../controller/subjectController')

router.post("/addSub", handleAddSubject)
router.get("/listSub_nonap", handleSelectSubject)
router.post("/approveSub", handleApproveSub)
router.post("/cancelSub", handleCancelSub)


module.exports = router
