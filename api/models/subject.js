const { sqlcmd } = require("../config/dbConnect");

class SUBJECT {
  constructor(args) {
    Object.assign(this, args);
  }

  static addSubject(
    NAMESUBJECT,
    DETAILSUBJECT,
    DATE,
    TIME,
    TOTALSTU,
    POSTSTATUS,
    TEACHERNAME
  ) {
    const query = `INSERT INTO SUBJECT(NAMESUBJECT , DETAILSUBJECT, DATE, TIME , TOTALSTU, POSTSTATUS, TEACHERNAME) VALUES ("${NAMESUBJECT}", "${DETAILSUBJECT}", "${DATE}","${TIME}","${TOTALSTU}",${POSTSTATUS}, "${TEACHERNAME}")`;
    return sqlcmd(query);
  }

  static selectSubject() {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 0`;
    return sqlcmd(query);
  }
  static selectSubjectByID(ID) {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 0`;
    return sqlcmd(query);
  }

  static cancelApprove(ID) {
    const query = `UPDATE SUBJECT SET POSTSTATUS = 2 WHERE ID = ${ID}`;
    return sqlcmd(query);
  }

  static approvePost(ID) {
    const query = `UPDATE SUBJECT SET POSTSTATUS = 1 WHERE ID = ${ID}`;
    return sqlcmd(query);
  }

  static showPopData(ID) {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 1`;
    return sqlcmd(query);
  }

  static selectSubjectByAj() {
    const query = `SELECT ID, NAMESUBJECT, TEACHERNAME FROM SUBJECT WHERE TEACHERNAME = 'อ.สพ.ญ.ดร.ทิพย์ภาภรณ์ อุปโย'`;
    return sqlcmd(query);
  }

  static addPeoplePass(TITLENAME, USERNAME, LASTNAME, IDCARD, SUBJECTS) {
    const query = `INSERT INTO PASSCER(TITLENAME, USERNAME, LASTNAME, IDCARD, SUBJECT) VALUES ("${TITLENAME}", "${USERNAME}", "${LASTNAME}","${IDCARD}","${SUBJECTS}")`;
    return sqlcmd(query);
  }

  static selectCerByUser(IDCARD) {
    const query = `SELECT * FROM PASSCER WHERE IDCARD = "${IDCARD}"`;
    return sqlcmd(query);
  }
  // static Subjectwarning(ID) {
  //   const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 0`
  //   return sqlcmd(query);
  // }

  static showSubDetail(detail) {
    const query = `SELECT * FROM subject WHERE NAMESUBJECT = '${detail}'`;
    return sqlcmd(query);
  }

  static getUser() {
    const query = `SELECT * FROM user WHERE ROLE = "user"`;
    return sqlcmd(query);
  }

  static insertSignature(name, position, filepath, filename) {
    const query = `INSERT INTO signature (name, position, filepath, filename) VALUES ("${name}", "${position}", "${filepath}","${filename}")`;
    return sqlcmd(query);
  }

  static selectListSignature() {
    const query = `SELECT ID,name, position FROM signature`;
    return sqlcmd(query);
  }

  static deleteSignature(ID) {
    const query = `DELETE FROM signature WHERE ID = ${ID};`;
    return sqlcmd(query);
  }

  static insertRegisSub(id_stu, id_sub) {
    let status = 1;
    const query = `INSERT INTO regisSub (id_stu, id_sub, status) VALUES (${id_stu}, ${id_sub}, ${status}})`
    return sqlcmd(query);
  }

  static checkSub(id_stu, id_sub) {
    const query =  `SELECT * FROM regisSub WHERE id_stu = ${id_stu} AND id_sub = ${id_sub}`
    return sqlcmd(query);
  }

  static selectConfirmCer(IDCARD) {
    const query = `select * from passcer where IDCARD = "${IDCARD}"`
    return sqlcmd(query);
  }

  static selectsj(sj) {
    const query = `select * from subject where namesubject = '${sj}'`
    return sqlcmd(query);
  }
}

module.exports = SUBJECT;
