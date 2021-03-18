const router = require('express').Router()
const path = require("path");

// declare path / or /notes
// tutor helped establish

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router