const { cp } = require('fs');
const path = require('path');

function generateClient(reader) {
  reader.question('project name?(default "client")', function(name) {
    if (name !== '') cp(path.resolve(__dirname, '../client'), process.env.PWD + '/' + name, { recursive: true }, () => {});
    else cp(path.resolve(__dirname, '../client'), process.env.PWD + '/client', { recursive: true }, () => {});

    reader.close();
  });
}

module.exports = { generateClient };
