// use GET POST and DELETE from notes - like mini project
const router = require('express').Router();
const notes = require("../db/notes.js");

router.get('/notes', function(req, res){
  notes.getNotes()
  .then(notes => res.json(notes))
  .catch((error) => {
    console.error('Error', error)
  });
})
router.post('/notes', function(req, res){
  notes.addNotes(req.body)
  .then(notes => res.json(notes))
  .catch((error) => {
    console.error('Error', error)
  });
})
router.delete('/notes/:id', function(req, res){
  notes.removeNotes(req.params.id)
  .then(() => res.json({ok: true}))
  .catch((error) => {
    console.error('Error', error)
  });
})

module.exports = router;

