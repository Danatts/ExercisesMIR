const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const nombre = req.query.nombre;
  res.send(`<h1>Hola, ${nombre ? nombre : 'desconocido'}!</h1>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port 3000!`)
});
