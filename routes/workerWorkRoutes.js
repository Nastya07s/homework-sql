const express = require('express');
const router = express.Router();

const db = require('../models');

router.post('/apply', (req, res) => {
  db.worker_work.create({ ...req.body });
})

module.exports = router;
