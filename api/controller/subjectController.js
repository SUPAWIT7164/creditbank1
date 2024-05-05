const SUBJECT = require("../models/subject");
const bcrypt = require("bcrypt");

const Document = require("pdfkit");
const fs = require("fs");
const { PassThrough } = require("stream");

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

const handleSelectSByAJ = async (req, res) => {
  try {
    const result = await SUBJECT.selectSubjectByAj();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handladdPeoplePass = async (req, res) => {
  const { TITLENAME, USERNAME, LASTNAME, IDCARD, SUBJECTS } = req.body;
  try {
    const result = await SUBJECT.addPeoplePass(
      TITLENAME,
      USERNAME,
      LASTNAME,
      IDCARD,
      SUBJECTS
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handlaselectByIdCard = async (req, res) => {
  const { IDCARD } = req.body;
  try {
    const result = await SUBJECT.selectCerByUser(IDCARD);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateBilling = async (req, res, next) => {
  const { data } = req.body;
  console.log(data);
  try {
    const thSarabunPSKFont = fs.readFileSync("fonts/THSarabunNew.ttf");
    const thSarabunPSKFontBuffer = Buffer.from(thSarabunPSKFont);

    console.log(thSarabunPSKFontBuffer);
    const doc = new Document({
      size: "A4",
      margins: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      layout: "landscape",
    });
    doc.registerFont("THSarabunNew", thSarabunPSKFontBuffer);
    const pdfData = []; // Create an empty array to store the PDF data
    const distanceMargin = 18;
    doc
      .fillAndStroke("#0e8cc3")
      .lineWidth(20)
      .lineJoin("round")
      .rect(
        distanceMargin,
        distanceMargin,
        doc.page.width - distanceMargin * 2,
        doc.page.height - distanceMargin * 2
      )
      .stroke();
    const maxWidth = 140;
    const maxHeight = 70;
    doc.image("assets/mju_logo.png", doc.page.width / 2 - maxWidth / 2, 60, {
      fit: [maxWidth, maxHeight],
      align: "center",
    });
    doc.moveDown();
    function jumpLine(doc, lines) {
      for (let index = 0; index < lines; index++) {
        doc.moveDown();
      }
    }
    jumpLine(doc, 10);
    doc
      .font("THSarabunNew")
      .fontSize(40)
      .fill("#021c27")
      .text(`ได้ผ่านการอบรมรายวิชา ${data.SUBJECT}`, {
        align: "center",
      });
    doc.moveDown();
    doc
      .font("THSarabunNew")
      .fontSize(30)
      .fill("#021c27")
      .text(
        `${
          data.TITLENAME + " " + data.USERNAME + "          " + data.LASTNAME
        }`,
        {
          align: "center",
        }
      );

    doc.end();

    const pdfStream = doc.pipe(new PassThrough());
    pdfStream.on("data", (chunk) => pdfData.push(chunk));
    pdfStream.on("end", () => {
      const pdfBuffer = Buffer.concat(pdfData);
      const base64Data = pdfBuffer.toString("base64");
      const responseData = {
        message: "สร้างรายงานการเรียกเก็บเงินสำเร็จ",
        file: base64Data,
        name: data.SUBJECT,
      };
      res.status(200).send(responseData);
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Error generating billing report" });
  }
};

module.exports = {
  handleAddSubject,
  handleSelectSubject,
  handleApproveSub,
  handleCancelSub,
  handleShowPopData,
  handleSelectSByAJ,
  handladdPeoplePass,
  handlaselectByIdCard,
  generateBilling,
};
