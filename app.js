const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`<h1>Hola ${name}</h1>`);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port 3000!`)
});
