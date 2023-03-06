const Books = require('../models/Books')
const BooksService = require('../services/BooksService')
const Joi = require('joi');

const everthing =  async(_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books) }

  const everthingId = async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id)
  if (!books){return res.status(404).json({mensage: "Not Found "})}

  res.status(200).json(books);
}

const create =  async (req, res) => {
  const { title, author_id } = req.body
 if(! await BooksService.isValid(title, author_id)) {return res.status(400).json({mensage: "Dados inválidos"})}
  await Books.create(title, author_id)
  res.status(201).json({ message: 'Livro criado com sucesso!'})
}

  module.exports = {everthing, everthingId, create}