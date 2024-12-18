const path = require("path");
const gemini = require("../services/geminiService");
const fs = require("fs");

const find = async (req, res) => {
  const image = req.file;
  console.log(req.file);
  try {
    if (!image) {
      res.status(400).json({ message: "proide image" });
    }

    const imagePath = path.join(
      __dirname,
      `../../public/temp/${image.filename}`
    );

    const resposne = await gemini.runPrompt(imagePath);

    if (!resposne.isItFood) {
      fs.unlinkSync(image.path);
      res.json({ isItFood: false });
      return null;
    }

    fs.unlinkSync(image.path);
    res.json(resposne);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "internal error" });
  }
};

module.exports = { find };
