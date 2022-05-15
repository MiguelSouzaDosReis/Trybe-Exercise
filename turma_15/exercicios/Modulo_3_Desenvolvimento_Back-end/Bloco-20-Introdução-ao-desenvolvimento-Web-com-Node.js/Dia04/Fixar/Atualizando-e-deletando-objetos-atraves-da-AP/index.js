const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (_req, res) {
  res.status(200).json(drinks);
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((element) => element.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drinks not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinksIndex = drinks.findIndex((element) => element.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drinks not found!' });

  drinks.splice(drinksIndex, 1);

  res.status(204).end();
});


app.listen(4000, () => {
  console.log('Aplicação ouvindo na porta 4000');
});


