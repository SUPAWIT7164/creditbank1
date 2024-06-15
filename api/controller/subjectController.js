const SUBJECT = require("../models/subject");
const bcrypt = require("bcrypt");
const Document = require("pdfkit");
const fs = require("fs");
const { PassThrough } = require("stream");
const path = require("path");

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
        `${data.TITLENAME + " " + data.USERNAME + "    " + data.LASTNAME}`,
        {
          align: "center",
        }
      );
    doc
      .font("THSarabunNew")
      .fontSize(30)
      .fill("#0000FF")
      .text(`ได้ผ่านการอบรมรายหลักสูตร ${data.SUBJECT}`, {
        align: "center",
      });
    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ให้ ณ วันที่ 2 สิงหาคม 2567", {
        align: "center",
      });
    doc.moveDown();

    function jumpLine(doc, lines) {
      for (let index = 0; index < lines; index++) {
        doc.moveDown();
      }
    }
    jumpLine(doc, 40);
    doc;

    doc.lineWidth(1);

    // Signatures

    const lineSize = 174;
    const signatureHeight = 390;
    // doc.image("assets/Sige.png", doc.page.width / 2 - signatureHeight / 2, 60, {
    //     fit: [lineSize, signatureHeight],
    //     align: "center",
    // });

    doc.fillAndStroke("#021c27");
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
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ผสุ เย็นสบาย", startLine1, signatureHeight + 10, {
        columns: 1,
        columnGap: 0,
        height: 40,
        width: lineSize,
        align: "center",
      });

    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("อาจารย์ ", startLine1, signatureHeight + 25, {
        columns: 1,
        columnGap: 0,
        height: 40,
        width: lineSize,
        align: "center",
      });

    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text(
        `${data.TITLENAME + " " + data.USERNAME + "  " + data.LASTNAME}`,
        startLine2,
        signatureHeight + 10,
        {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: "center",
        }
      );

    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ผู้เข้าร่วมอบรม", startLine2, signatureHeight + 25, {
        columns: 1,
        columnGap: 0,
        height: 40,
        width: lineSize,
        align: "center",
      });

    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ผสุ เย็นสบาย", startLine3, signatureHeight + 10, {
        columns: 1,
        columnGap: 0,
        height: 40,
        width: lineSize,
        align: "center",
      });

    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#021c27")
      .text("ผู้จัดอบรม", startLine3, signatureHeight + 25, {
        columns: 1,
        columnGap: 0,
        height: 40,
        width: lineSize,
        align: "center",
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
const handlaselectDetail = async (req, res) => {
  const { detail } = req.body;
  try {
    const result = await SUBJECT.showSubDetail(detail);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleGetuser = async (req, res) => {
  try {
    const result = await SUBJECT.getUser();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleInsertSignature = async (req, res) => {
  const file = req.file;
  const { name, position } = req.body;
  console.log(file);
  console.log(name, position);

  try {
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    let correctedPath = path.resolve(file.destination, file.filename);
    correctedPath = correctedPath.replace(/\\/g, "/");

    const result = await SUBJECT.insertSignature(
      name,
      position,
      correctedPath,
      file.originalname
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleSelectSignature = async (req, res) => {
  try {
    const result = await SUBJECT.selectListSignature();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const handleDeleteSignature = async (req, res) => {
  const { ID } = req.body;
  try {
    const result = await SUBJECT.deleteSignature(ID);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleRegisSub = async (req, res) => {
  const { id_stu, id_sub } = req.body;

  try {
    const result = await SUBJECT.insertRegisSub(id_stu, id_sub);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleSelectConfirm = async (req, res) => {
  const { IDCARD } = req.body;

  try {
    const result = await SUBJECT.selectConfirmCer(IDCARD);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleExpdf = async (req, res) => {
  const { data } = req.body;
  console.log(data, "data");
  try {
    const result = await SUBJECT.selectConfirmCer(data);
    const thSarabunPSKFont = fs.readFileSync("fonts/THSarabunNew.ttf");
    const thSarabunPSKFontBuffer = Buffer.from(thSarabunPSKFont);

    const doc = new Document({
      size: "A4",
      margins: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      layout: "portrait",
    });
    doc.registerFont("THSarabunNew", thSarabunPSKFontBuffer);
    const pdfData = []; // Create an empty array to store the PDF data

    const maxWidth = 140;
    const maxHeight = 70;
    doc.image("assets/mju_logo.png", doc.page.width / 2 - maxWidth / 2, 20, {
      fit: [maxWidth, maxHeight],
      align: "center",
    });
    doc.moveDown(5);

    // ข้อความหัวกระดาษ
    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#0000FF")
      .text("มหาวิทยาลัยแม่โจ้", { align: "center" });
    doc
      .font("THSarabunNew")
      .fontSize(20)
      .fill("#000000")
      .text("Maejo University", { align: "center" });

    // เพิ่มข้อความอื่นๆ
    doc
      .font("THSarabunNew")
      .fontSize(16)
      .text("ใบรับรองผลการศึกษา", { align: "center" });
    doc
      .font("THSarabunNew")
      .fontSize(16)
      .text(
        `หนังสือฉบับนี้เป็นหนังสือรับรองว่า ${result[0].TITLENAME} ${result[0].USERNAME} ${result[0].LASTNAME} ได้ผ่านการอบรมตามวิชาที่ได้เปิดการอบรมตามกำหนด`,
        { align: "start" }
      );

    // วาดตาราง
    let tableTop = 200;
    let itemGap = 20;

    // ขนาดของคอลัมน์
    const col1X = 50;
    const col2X = 100;
    const col3X = 450; // กำหนดจุดสิ้นสุดของตาราง
    const rowHeight = 20; // กำหนดความสูงของแถว

    // วาดหัวตาราง
    doc
      .font("THSarabunNew")
      .fontSize(12)
      .text("ลำดับ", col1X + 5, tableTop + 5)
      .text("ชื่อวิชา", col2X + 5, tableTop + 5);

    // เส้นกรอบของหัวตาราง
    doc.rect(col1X, tableTop, col3X - col1X, rowHeight).stroke();

    // เส้นแบ่งคอลัมน์ในหัวตาราง
    doc
      .moveTo(col2X, tableTop)
      .lineTo(col2X, tableTop + rowHeight)
      .stroke();

    tableTop += itemGap;

    // วนลูปเพื่อแสดงข้อมูลในตาราง
    for (let i = 0; i < result.length; i++) {
      let element = result[i];
      doc
        .font("THSarabunNew")
        .text(i + 1, col1X + 5, tableTop + 5)
        .text(element.SUBJECT, col2X + 5, tableTop + 5);

      // เส้นกรอบของแถว
      doc.rect(col1X, tableTop, col3X - col1X, rowHeight).stroke();

      // เส้นแบ่งคอลัมน์ในแถว
      doc
        .moveTo(col2X, tableTop)
        .lineTo(col2X, tableTop + rowHeight)
        .stroke();

      tableTop += itemGap;
    }

    // เพิ่มลายเซ็น 1
    const signatureWidth = 100;
    const signatureHeight = 50;
    
    const signatureX1 = 80; // ตำแหน่ง x ของลายเซ็นด้านซ้าย
    const signatureY1 = 350; // ตำแหน่ง y ของลายเซ็นด้านซ้าย
    doc.image("assets/31-2.jpg", signatureX1, signatureY1, {
      fit: [150, signatureHeight],
      align: "center",
    });

    // เพิ่มชื่อด้านล่างลายเซ็น 1
    const nameX1 = 80 + 20; // ตำแหน่ง x ของชื่อจะเยื้องไปทางขวาจากลายเซ็น
    const namex5 = 70 + 20; // ตำแหน่ง x ของชื่อจะเยื้องไปทางขวาจากลายเซ็น
    const nameY1 = signatureY1 + signatureHeight + 10; // ตำแหน่ง y อยู่ด้านล่างลายเซ็นเล็กน้อย
    const nameY = signatureY1 + signatureHeight + 25; // ตำแหน่ง y อยู่ด้านล่างลายเซ็นเล็กน้อย
    doc
      .font("THSarabunNew")
      .text("(ศาสตราจารย์ ดร.บาบี้ ยาง)", nameX1, nameY1)
      .text("ผู้อำนวยการสถาบันวิจัยเทเลทอปบี้", namex5, nameY)

    // เพิ่มลายเซ็น 2
    const signatureX2 = 350; // ตำแหน่ง x ของลายเซ็นด้านขวา
    const signatureY2 = 350; // ตำแหน่ง y ของลายเซ็นด้านขวา
    doc.image("assets/31-2.jpg", signatureX2, signatureY2, {
      fit: [90, signatureHeight],
      align: "center",
    });

    // เพิ่มชื่อด้านล่างลายเซ็น 2
    const nameX2 = 320 + 20; // ตำแหน่ง x ของชื่อจะเยื้องไปทางขวาจากลายเซ็น
    const nameX4 = 320 + 20; // ตำแหน่ง x ของชื่อจะเยื้องไปทางขวาจากลายเซ็น
    const nameY2 = signatureY2 + signatureHeight + 10; // ตำแหน่ง y อยู่ด้านล่างลายเซ็นเล็กน้อย
    const nameY3 = signatureY2 + signatureHeight + 25; // ตำแหน่ง y อยู่ด้านล่างลายเซ็นเล็กน้อย
    doc
      .font("THSarabunNew")
      .text("(ผู้ช่วยศาสตราจารย์ ดร.โจ๊ะ โจ๊ะ)", nameX2, nameY2)
      .text("ผู้อำนวยการสถาบันวิจัยเทเลทอปบี้", nameX4, nameY3)

    doc.end();
    const pdfStream = doc.pipe(new PassThrough());
    pdfStream.on("data", (chunk) => pdfData.push(chunk));
    pdfStream.on("end", () => {
      const pdfBuffer = Buffer.concat(pdfData);
      const base64Data = pdfBuffer.toString("base64");
      const responseData = {
        message: "สร้างรายงานการเรียกเก็บเงินสำเร็จ",
        file: base64Data,
        name: "ใบรับรองการผ่านอบรม",
      };
      res.status(200).send(responseData);
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Error generating billing report" });
  }
};

const handleSelectsj = async (req, res) => {
  const {sj} = req.body
  try {
    const result = await SUBJECT.selectsj(sj);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
  handlaselectDetail,
  handleGetuser,
  handleInsertSignature,
  handleSelectSignature,
  handleDeleteSignature,
  handleRegisSub,
  handleSelectConfirm,
  handleExpdf,
  handleSelectsj
};
