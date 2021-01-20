const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({
    randomNumber: Math.random()
  });
});

app.listen(4000, () => {
  console.log('Listening on port 4000!');
});
