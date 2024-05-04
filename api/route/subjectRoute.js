const express = require("express");
const router = express.Router();
const {
  handleAddSubject,
  handleSelectSubject,
  handleApproveSub,
  handleCancelSub,
  handleShowPopData,
} = require("../controller/subjectController");

router.post("/addSub", handleAddSubject);
router.get("/listSub_nonap", handleSelectSubject);
router.post("/approveSub", handleApproveSub);
router.post("/cancelSub", handleCancelSub);
router.get("/ShowPopData", handleShowPopData);

module.exports = router;
