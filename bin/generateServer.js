function generateServer(reader) {
  const env = new Map();

  reader.question('Database name(default = db): ', (answer) => {
    env.set('DB_NAME', answer);
    reader.question('')
    
  });
}

module.exports = { generateServer };
