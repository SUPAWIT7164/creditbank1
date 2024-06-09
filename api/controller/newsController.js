const bcrypt = require("bcrypt");
const news = require("../models/news");
const fs = require("fs").promises;
const path = require("path");

const handleAddNews = async (req, res) => {
  const file = req.file;
  const { headerNews, detailNews, link } = req.body;

  try {
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Resolve the path and replace backslashes with forward slashes
    let correctedPath = path.resolve(file.destination, file.filename);
    correctedPath = correctedPath.replace(/\\/g, "/");

    const result = await news.saveNews(
      headerNews,
      detailNews,
      link,
      correctedPath,
      file.originalname
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleSelectNews = async (req, res) => {
  try {
    const result = await news.selectNews();

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      const fileData = await fs.readFile(element.filePath);
      const base64File = fileData.toString("base64");
      element.base64File = base64File;
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleAddNews,
  handleSelectNews,
};
