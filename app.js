const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const browser = req.headers['user-agent'];
  res.send(`<h1>${browser}</h1>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port 3000!`)
});
