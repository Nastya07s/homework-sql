const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/all', (req, res) => {
  db.work.findAll().then((works) => res.send(works));
});

router.get('/:id/workerlist', (req, res) => {
  db.worker_work.findAll({
    attributes: [
      'createdAt',
      'salary',
      [
        db.sequelize.fn('SUM', db.sequelize.col('salary')),
        'allEmployeeSalaries',
      ],
    ],
    include: [{ model: db.worker, attributes: ['name', 'lastname'], required: true }],
    where: { workId: req.params.id}
  }).then((workerList) => res.send(workerList));
});

router.get('/:id', (req, res) => {
  db.work
    .findOne({ where: { id: req.params.id } })
    .then((work) => res.send(work));
});

router.post('/', (req, res) => {
  db.work.create({ ...req.body }).then((newWork) => res.send(newWork));
});

router.put('/:id', async (req, res) => {
  await db.work.update({ ...req.body }, { where: { id: req.params.id } });

  db.work
    .findOne({ where: { id: req.params.id } })
    .then((work) => res.send(work));
});

router.delete('/dismiss', (req, res) => {
  db.worker_work
    .destroy({
      where: { idworker: req.body.idworker, idwork: req.body.idwork },
    })
    .then(() => res.send('success'));
});

router.delete('/:id', (req, res) => {
  db.work
    .destroy({ where: { id: req.params.id } })
    .then(() => res.send('success'));
});

module.exports = router;
