const express = require('express');
const bodyParser = require('body-parser');

// const setRoutes = require('./router');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const workRoutes = require('./routes/workRoutes');
app.use('/api/work', workRoutes);

// const db = require("./app/models");
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
