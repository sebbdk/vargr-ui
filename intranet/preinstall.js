const fs = require('fs');

async function upsertFile(name, content) {
  try {
    // try to read file
    await fs.promises.readFile(name)
  } catch (error) {
    // create empty file, because it wasn't found
    await fs.promises.writeFile(name, content)
  }
}

upsertFile('src/app.settings.js', fs.readFileSync('src/default.settings.js'));