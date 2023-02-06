const express = require('express');
const bodyParser = require('body-parser')
const Books = require('./Books')
require('dotenv').config();

const app = express();
app.use(bodyParser.json())

const PORT = process.env.PORT;;

app.get('/books', async(_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books)
})


app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id)
  if (!books){return res.status(404).json({mensage: "Not Found "})}

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body
 if(! await Books.isValid(title, author_id)) {return res.status(400).json({mensage: "Dados inválidos"})}
  await Books.create(title, author_id)
  res.status(201).json({ message: 'Livro criado com sucesso!'})
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});