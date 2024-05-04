const SUBJECT = require("../models/subject");
const bcrypt = require("bcrypt");

const handleSelectSubject = async (req, res) => {
  try {
    const result = await SUBJECT.selectSubject();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleAddSubject = async (req, res) => {
  const { NAMESUBJECT, DETAILSUBJECT, DATE, TIME, TOTALSTU, TEACHERNAME } =
    req.body;
  try {
    const POSTSTATUS = 0;
    const result = await SUBJECT.addSubject(
      NAMESUBJECT,
      DETAILSUBJECT,
      DATE,
      TIME,
      TOTALSTU,
      POSTSTATUS,
      TEACHERNAME
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleApproveSub = async (req, res) => {
  const { ID } = req.body;
  try {
    const result = await SUBJECT.approvePost(ID);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleCancelSub = async (req, res) => {
  const { ID } = req.body;
  try {
    const result = await SUBJECT.cancelApprove(ID);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleShowPopData = async (req, res) => {
  try {
    const result = await SUBJECT.showPopData();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleAddSubject,
  handleSelectSubject,
  handleApproveSub,
  handleCancelSub,
  handleShowPopData,
};
