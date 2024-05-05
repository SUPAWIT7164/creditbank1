const express = require("express");
const router = express.Router();
const {
  handleAddSubject,
  handleSelectSubject,
  handleApproveSub,
  handleCancelSub,
  handleShowPopData,
  handleSelectSByAJ,
  handladdPeoplePass,
  handlaselectByIdCard,
  generateBilling
  // handleShowSubData,
} = require("../controller/subjectController");

router.post("/addSub", handleAddSubject);
router.get("/listSub_nonap", handleSelectSubject);
router.post("/approveSub", handleApproveSub);
router.post("/cancelSub", handleCancelSub);
router.get("/ShowPopData", handleShowPopData);
router.get("/selectSByAj", handleSelectSByAJ);
router.post("/addPeoplePass", handladdPeoplePass);
router.post("/byIdCard", handlaselectByIdCard);
router.post("/genCer", generateBilling);

router.get("/showPopSub", handleShowPopData);
// router.get("/showShowSub", handleShowSubData);
module.exports = router;
