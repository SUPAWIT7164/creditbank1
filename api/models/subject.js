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

  static showPopData() {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 1`;
    return sqlcmd(query);
  }

  static selectSubjectByAj() {
    const query = `SELECT ID, NAMESUBJECT, TEACHERNAME FROM SUBJECT WHERE TEACHERNAME = "AJ.OTP EMAIL"`;
    return sqlcmd(query);
  }

  static addPeoplePass(TITLENAME, USERNAME, LASTNAME, IDCARD, SUBJECTS) {
    const query = `INSERT INTO PASSCER(TITLENAME, USERNAME, LASTNAME, IDCARD, SUBJECT) VALUES ("${TITLENAME}", "${USERNAME}", "${LASTNAME}","${IDCARD}","${SUBJECTS}")`;
    return sqlcmd(query);
  }

  static selectCerByUser(IDCARD) {
    const query = `SELECT * FROM PASSCER WHERE IDCARD = "${IDCARD}"`
    return sqlcmd(query);
  }
}

module.exports = SUBJECT;
