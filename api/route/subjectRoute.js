const express = require("express");
const router = express.Router();
const uploadImg = require("../middleware/upload");
const {
    handleAddSubject,
    handleSelectSubject,
    handleApproveSub,
    handleCancelSub,
    handleShowPopData,
    handleSelectSByAJ,
    handladdPeoplePass,
    handlaselectByIdCard,
    generateBilling,
    handlaselectDetail,
    handleGetuser,
    handleInsertSignature,
    handleSelectSignature,
    handleDeleteSignature,
    handleRegisSub,
    handleSelectConfirm,
    handleExpdf,
    handleSelectsj
} = require("../controller/subjectController");

router.post("/addSub", handleAddSubject);
router.get("/listSub_nonap", handleSelectSubject);
router.post("/approveSub", handleApproveSub);
router.post("/cancelSub", handleCancelSub);
router.get("/ShowPopData", handleShowPopData);
router.get("/selectSByAj", handleSelectSByAJ);
router.get("/getUser", handleGetuser);
router.get("/getSignature", handleSelectSignature);
router.post("/addPeoplePass", handladdPeoplePass);
router.post("/byIdCard", handlaselectByIdCard);
router.post("/genCer", generateBilling);
router.post("/Selectdetail", handlaselectDetail);
router.post("/deleteSig", handleDeleteSignature);
router.post("/insertRegisSub", handleRegisSub);
router.post("/handleSelectConfirm", handleSelectConfirm);
router.post("/handleExpdf", handleExpdf);
router.post("/handlesj", handleSelectsj);
router.post("/insertSignature", uploadImg.single("FILES"),handleInsertSignature);

// router.get("/showPopSub", handleShowPopData);
// router.get("/showShowSub", handleShowSubData);
module.exports = router;