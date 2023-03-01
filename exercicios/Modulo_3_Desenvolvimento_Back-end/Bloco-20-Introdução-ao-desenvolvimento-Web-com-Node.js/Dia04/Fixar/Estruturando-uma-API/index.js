const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
app.get('/drinks', function (_req, res) {
  const ordenandoOsDrinks = drinks.sort(function(a, b){
    let nameA = a.name.toLowerCase(); // ignore upper and lowercase
    let nameB = b.name.toLowerCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  })
  res.status(200).json(ordenandoOsDrinks);
});

app.listen(4201, () => {
  console.log('Aplicação ouvindo na porta 4201');
});