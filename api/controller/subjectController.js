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
      .fillAndStroke("#12BB20")
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
    .fontSize(30)
    .fill("#021c27")
    .text("มหาวิทยาลัยแม่โจ้", {
      align: "center",
    });
    doc
    .font("THSarabunNew")
    .fontSize(30)
    .fill("#021c27")
    .text("ขอมอบประกาศนียบัตรฉบับนี้ เพื่อแสดงว่า", {
      align: "center",
    });
    doc.moveDown();
    doc
      .font("THSarabunNew")
      .fontSize(30)
      .fill("#021c27")
      .text(
        `${
          data.TITLENAME + " " + data.USERNAME + "    " + data.LASTNAME
        }`,
        {
          align: "center",
        }
      );
      doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#0000FF")
      .text(`ได้ผ่านการอบรมรายหลักสูตร ${data.SUBJECT}`, {
        align: "center",
      });
      doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ระยะเวลา 8 ชั่วโมง", {
        align: "center",
      });
      jumpLine(doc, 10)

doc.lineWidth(1);

// Signatures
const lineSize = 174;
const signatureHeight = 390;

doc.fillAndStroke('#021c27');
doc.strokeOpacity(0.2);

const startLine1 = 128;
const endLine1 = 128 + lineSize;
doc
  .moveTo(startLine1, signatureHeight)
  .lineTo(endLine1, signatureHeight)
  .stroke();
  
  const startLine2 = endLine1 + 32;
const endLine2 = startLine2 + lineSize;
doc
  .moveTo(startLine2, signatureHeight)
  .lineTo(endLine2, signatureHeight)
  .stroke();

const startLine3 = endLine2 + 32;
const endLine3 = startLine3 + lineSize;
doc
  .moveTo(startLine3, signatureHeight)
  .lineTo(endLine3, signatureHeight)
  .stroke();

doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text('ผสุ เย็นสบาย', startLine1, signatureHeight + 10, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text('อาจารย์ ', startLine1, signatureHeight + 25, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

  doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text(`${
    data.TITLENAME + " " + data.USERNAME + "  " + data.LASTNAME
  }`, startLine2, signatureHeight + 10, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text('ผู้เข้าร่วมอบรม', startLine2, signatureHeight + 25, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text('ผสุ เย็นสบาย', startLine3, signatureHeight + 10, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

doc
  .font('THSarabunNew')
  .fontSize(20)
  .fill('#021c27')
  .text('ผู้จัดอบรม', startLine3, signatureHeight + 25, {
    columns: 1,
    columnGap: 0,
    height: 40,
    width: lineSize,
    align: 'center',
  });

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
