const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI("AIzaSyAxqvBR8BK_m6g9igJb0ZVyoJUvX0uAKq8");

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function runPrompt(imagePath) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  });

  const prompt = `
          Please analyze the provided image and determine if it depicts food. Provide a detailed description and its recipe. Additionally, include Flipkart links to purchase the ingredients. Follow this schema: 
          {
            isItFood: boolean,
            canItBeCookedAtHome: boolean,
            contents: { calories: str, protien: str, carbs: str, fats: str},
            origin: str,
            description: str,
            serves: num,
            name: str,
            ingredients: [{name: str, quantity: str, link : str}],
            instructions: str
          }`;

  const imagePart = [fileToGenerativePart(imagePath, "image/jpeg")];

  const result = await model.generateContent([prompt, ...imagePart]);
  const response = JSON.parse(result.response.text());

  return response;
}

module.exports = { runPrompt };
