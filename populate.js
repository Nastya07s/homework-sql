const db = require('./models');

module.exports = function populateDB() {
  const dataForWorker = Array(150000).fill({
    name: 'Kolya',
    lastname: 'Limonov',
  });
  const dataForWork = Array(150000).fill({ name: 'clean floor' });

  const dataForWorkerWork = [];
  let currentId = 1;
  for (let i = 1; i <= 200000; i++) {
    if (i % 21 === 0) currentId++;
    dataForWorkerWork.push({
      workerId: currentId,
      workId: currentId + 1,
      time: 1,
      salary: 20 * currentId,
    });
  }

  db.work.bulkCreate(dataForWork);
  db.worker.bulkCreate(dataForWorker);
  db.worker_work.bulkCreate(dataForWorkerWork);
};
