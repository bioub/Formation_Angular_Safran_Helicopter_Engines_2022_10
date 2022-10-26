const fs = require('fs');

// Sync
const content = fs.readFileSync('.editorconfig', { encoding: 'utf-8' });
console.log(content);

// Async
fs.readFile('.editorconfig', { encoding: 'utf-8' }, (err, content) => {
  console.log(content);
});

console.log('FIN');

// pile d'appel
// ^
// |
// |
// |                                                                                                 [log]
// |[require     ][readFileSync                       ][log    ][readFile][log    ] ..⟳..            [callback ]
// +----------------------------------------------------------------------------------------------------------------> temps

// file d'attente
