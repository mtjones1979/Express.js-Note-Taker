const util = require("util");
const fs = require("fs");
// tutor explained what would need to go here
// if I use UUID - I would require it here 
// read note, write note, get notes, add note, remove note functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  constructor(){
    this.idNum = 0;
  }
  read(){
    return readFileAsync('db/db.json', 'utf8');
  }
  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note))
  }
  // Tutor and google (cdn) helped with questions regarding these functions
  // As well as previous mini project
  getNotes() {
    return this.read().then(notes => {
      let notesArray;
      try{
        notesArray = [].concat(JSON.parse(notes));
      }
      catch(err){
        notesArray = [];
      }
      return notesArray;
    })
  } 
  addNotes(note) {
    const {title, text} = note;
    const newNote = {title, text, id: ++this.idNum}
    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updateNotes => this.write(updateNotes))
      .then(() => newNote)
  }
  removeNotes(id) {
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(updatedNotes => this.write(updatedNotes))
  }
}
module.exports = new Notes();