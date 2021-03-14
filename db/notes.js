const util = require("util");
const fs = require("fs");

// if I use UUID - I would require it here 
// read note, write note, get notes, add note, remove note functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    
}

module.exports = new Note();