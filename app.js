const express = require('express');
const bodyParser = require('body-parser');

// const setRoutes = require('./router');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const workRoutes = require('./routes/workRoutes');
const workerRoutes = require('./routes/workerRoutes');

app.use('/api/work', workRoutes);
app.use('/api/worker', workerRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

const populateDB = require('./populate');
populateDB();
