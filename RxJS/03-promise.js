const fs = require('fs/promises');

// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     fs.writeFile('.editorconfig.copy', buffer)
//       .then(() => {
//         console.log('Copy Done');
//       })
//       .catch((err) => {
//         console.log('Erreur', err.message);
//       });
//   })
//   .catch((err) => {
//     console.log('Erreur', err.message);
//   });

// Avec les promesses, si dans un callback on retourne une promesse
// (ici le retour de writeFile), on a droit de ne pas imbriquer :
// - plus de code pyramidal
// - le catch fonctionne pour les 2 promesses (readFile et writeFile)
// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     return fs.writeFile('.editorconfig.copy', buffer)
//   })
//   .then(() => {
//     console.log('Copy Done');
//   })
//   .catch((err) => {
//     console.log('Erreur', err.message);
//   });

// en plus court
fs.readFile('.editorconfig')
  .then((buffer) => fs.writeFile('.editorconfig.copy', buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log('Erreur', err.message));
