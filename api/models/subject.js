const { sqlcmd } = require("../config/dbConnect");

class SUBJECT {
  constructor(args) {
    Object.assign(this, args);
  }

  static addSubject(NAMESUBJECT, DETAILSUBJECT, DATE, TIME, TOTALSTU, POSTSTATUS, TEACHERNAME) {
    const query = `INSERT INTO SUBJECT(NAMESUBJECT , DETAILSUBJECT, DATE, TIME , TOTALSTU, POSTSTATUS, TEACHERNAME) VALUES ("${NAMESUBJECT}", "${DETAILSUBJECT}", "${DATE}","${TIME}","${TOTALSTU}",${POSTSTATUS}, "${TEACHERNAME}")`;
    return sqlcmd(query);
  }

  static selectSubject() {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 0`
    return sqlcmd(query);
  }
  static selectSubjectByID(ID) {
    const query = `SELECT * FROM SUBJECT WHERE POSTSTATUS = 0`
    return sqlcmd(query);
  }

  static cancelApprove(ID) {
    const query = `UPDATE SUBJECT SET POSTSTATUS = 2 WHERE ID = ${ID}`
    return sqlcmd(query);
  }

  static approvePost(ID){
    const query = `UPDATE SUBJECT SET POSTSTATUS = 1 WHERE ID = ${ID}`
    return sqlcmd(query);
  }
}

module.exports = SUBJECT;
