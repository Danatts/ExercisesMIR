const express = require('express');
const app = express();

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

app.get('/makers/:name', (req, res) => {
  let name = req.params.name;
  const newName = capitalize(name);
  res.send(`<h1>Hola ${name ? newName : 'Desconocido'}!</h1>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port 3000!`)
});
