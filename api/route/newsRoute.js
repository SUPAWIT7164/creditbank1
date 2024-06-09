const express = require("express");
const router = express.Router();
const uploadImg = require("../middleware/upload");
const {
  handleAddNews,
  handleSelectNews,
} = require("../controller/newsController");

// router.post('/hotNews', handleNews)
router.post("/tests", uploadImg.single("FILES"), handleAddNews);
router.get("/allNews", handleSelectNews);
// router.post('/tests',handleAddNews)

module.exports = router;
