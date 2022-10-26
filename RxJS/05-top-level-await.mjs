import { readFile, writeFile } from "fs/promises";

// Nouveauté de ES2022 (dans un module ESM)
// on peut se passer de la fonction async
// Top Level Await
try {
  const buffer = await readFile(".editorconfig");
  await writeFile(".editorconfig.copy", buffer);
  console.log("Copy Done");
} catch (err) {
  console.log("Erreur", err.message);
}
