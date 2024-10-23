const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function fetchLanguages() {
  try {
    const response = await axios.get("https://app.thisislam.net/api/all_langs");
    const languages = response.data.data.map((lang) => lang.code);

    // Save to a JSON file in the public folder
    const outputPath = path.join(__dirname, "../public/locales.json");
    fs.writeFileSync(outputPath, JSON.stringify(languages), "utf8");
  } catch (error) {
    console.error("Failed to fetch languages:", error);
  }
}

fetchLanguages();
