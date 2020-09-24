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

router.delete('/quit', (req, res) => {
  db.worker_work
    .destroy({
      where: { idworker: req.body.idworker, idwork: req.body.idwork },
    })
    .then(() => res.send('success'));
});
router.delete('/:id', (req, res) => {
  db.worker
    .destroy({ where: { id: req.params.id } })
    .then(() => res.send('success'));
});

router.post('/apply', async (req, res) => {
  const [worker_work] = await db.worker_work.findAll({
    attributes: [
      [db.sequelize.fn('SUM', db.sequelize.col('time')), 'workTime'],
    ],
    where: {
      workerId: req.body.workerId,
    },
  });

  const {dataValues: {workTime}} = worker_work;
  if (workTime + req.body.time > 20) {
    res.send('Working time limit exceeded');
    return;
  }
  
  db.worker_work.create({ ...req.body }).then((record) => res.send(record));
});

router.get('/:id/worklist', (req, res) => {
  db.worker_work
    .findAll({
      attributes: [
        'time',
        'createdAt',
        'salary',
        [db.sequelize.fn('SUM', db.sequelize.col('salary')), 'monthSalary'],
      ],
      include: [{ model: db.work, attributes: ['name'], required: true }],
      where: {
        workerId: req.params.id,
      },
    })
    .then((works) => res.send(works));
});

module.exports = router;
