const fs = require('fs').promises;

const text = 'This is a test - and it should be stored in a file!';

fs.writeFile('node-message.txt', text)
    .then(() => 'Wrote into file')
    .catch(error => console.log(error));
