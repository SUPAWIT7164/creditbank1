const { sqlcmd } = require("../config/dbConnect");

class SUBJECT {
  constructor(args) {
    Object.assign(this, args);
  }

  static addSubject(NAMESUBJECT, DETAILSUBJECT, DATE, TIME, TOTALSTU, POSTSTATUS) {
    const query = `INSERT INTO SUBJECT(NAMESUBJECT , DETAILSUBJECT, DATE, TIME , TOTALSTU, POSTSTATUS) VALUES ("${NAMESUBJECT}", "${DETAILSUBJECT}", "${DATE}","${TIME}","${TOTALSTU}",${POSTSTATUS})`;
    return sqlcmd(query);
  }

  static selectSubject() {
    const query = `SELECT NAMESUBJECT , DETAILSUBJECT, DATE, TIME , TOTALSTU, POSTSTATUS FROM SUBJECT;
    WHERE POSTSTATUS = 0`
    return sqlcmd(query);
  }
}

module.exports = SUBJECT;
