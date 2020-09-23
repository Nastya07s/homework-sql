const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/all', (req, res) => {
  db.work.findAll().then((works) => res.send(works));
})

module.exports = router;
