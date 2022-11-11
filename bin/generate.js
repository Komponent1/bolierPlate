const { stdin, stdout } = require('process');
const readline = require('readline');
const { generateClient } = require('./generateClient');

const reader = readline.createInterface({
  input: stdin,
  output: stdout,
});

reader.question('create server?', function (answer) {
  if (answer === 'Y' || answer === 'y') {
    reader.question('')
  } else {
    generateClient(reader);
  }
});
