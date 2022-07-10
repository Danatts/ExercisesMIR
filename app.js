const express = require('express');
const app = express();

let output = '';

for (let i = 1; i <= 50; i++){
  i % 2 === 0 ? output += `<p>${i} Soy Par!</p>` : output += `<p>${i} Soy Impar!</p>`
};


app.get('/', (req, res) => {
  res.send(output);
});

app.get('/favicon.ico', (req, res) => res.status(200));

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port 3000!`)
});
