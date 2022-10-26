const fs = require("fs");

// Sync
try {
  const buffer = fs.readFileSync(".editorconfig");
  fs.writeFileSync(".editorconfig.copy", buffer);
  console.log("Copy done");
} catch (err) {
  console.log("Erreur", err.message);
}

// Async, 2 problèmes :
// Le côté pyramidale du code
// La gestion d'erreur non centralisable
// --> Callback Hell / Pyramid of Doom
fs.readFile(".editorconfig", (err, buffer) => {
  if (err) {
    console.log("Erreur", err.message);
  } else {
    fs.writeFile(".editorconfig.copy", buffer, (err) => {
      if (err) {
        console.log("Erreur", err.message);
      } else {
        console.log("Copy done");
      }
    });
  }
});

// pile d'appel
// ^
// |
// |
// |                                                                              [writeFile]                 [log]
// |[require][readFileSync      ][writeFileSync    ][log    ][readFile] ..⟳..     [callbackReadFile ] ..⟳..   [callbackWriteFile ]
// +--------------------------------------------------------------------------------------------------------------------------------> temps

// file d'attente
