const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/all', (req, res) => {
  db.worker.findAll().then((workers) => res.send(workers));
});

router.get('/:id', (req, res) => {
  db.worker
    .findOne({ where: { id: req.params.id } })
    .then((worker) => res.send(worker));
});

router.post('/', (req, res) => {
  db.worker.create({ ...req.body }).then((newWorker) => res.send(newWorker));
});

router.put('/:id', async (req, res) => {
  await db.worker.update({ ...req.body }, { where: { id: req.params.id } });

  db.worker
    .findOne({ where: { id: req.params.id } })
    .then((worker) => res.send(worker));
});

router.delete('/:id', (req, res) => {
  db.worker
    .destroy({ where: { id: req.params.id } })
    .then(() => res.send('success'));
});

module.exports = router;
