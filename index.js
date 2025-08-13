const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from RollDice app!');
});

app.listen(port, () => {
  console.log(`RollDice app listening at http://localhost:${port}`);
});
