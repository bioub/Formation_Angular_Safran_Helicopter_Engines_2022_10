const fs = require("fs/promises");

// function copyFile() {
//   fs
//     .readFile(".editorconfig")
//     .then((buffer) => fs.writeFile(".editorconfig.copy", buffer))
//     .then(() => console.log("Copy Done"))
//     .catch((err) => console.log("Erreur", err.message));
// }

// copyFile();

// Nouveauté de ES2017
async function copyFile() {
  try {
    const buffer = await fs.readFile(".editorconfig");
    await fs.writeFile(".editorconfig.copy", buffer);
    console.log("Copy Done");
  } catch (err) {
    console.log("Erreur", err.message);
  }
}

copyFile();
