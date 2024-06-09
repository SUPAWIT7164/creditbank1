const { sqlcmd } = require("../config/dbConnect");
class news {
  constructor(args) {
    Object.assign(this, args);
  }

  static saveNews(headNews, detailNews, link, filePath, originalname) {
    const query = `INSERT INTO news (headNews, detailNews, link, filePath, originalname) VALUES ("${headNews}","${detailNews}", "${link}", "${filePath}", "${originalname}")`;
    return sqlcmd(query);
  }

  static selectNews() {
    const query = `select * from news`
    return sqlcmd(query);
  }
}

module.exports = news;
