const { Router } = require("express");
const path = require("path");
// declare path / or /notes
// tutor helped establish
Router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});
Router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = Router;