const util = require("util");


// if I use UUID - I would require it here 
// need to check that obj contains these properties: id, title, text
const notes = (obj) => {
    let titleCheck = "title" in obj;
    let textCheck = "text" in obj;
  
    if (Object.keys(obj).length !== 2) {
      return false;
    }
  
    if (titleCheck && textCheck) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = notes();

