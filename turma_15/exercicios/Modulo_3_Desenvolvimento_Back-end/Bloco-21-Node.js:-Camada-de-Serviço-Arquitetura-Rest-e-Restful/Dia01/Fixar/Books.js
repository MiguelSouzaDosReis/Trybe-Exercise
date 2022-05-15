const connection =  require('./connections')

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books')

  return books
}

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [id]);
  return books
};

const isValid = async (title, id ) => {
  if(!title ||  title.length < 3)return false;
  if(!id || !( await getByAuthorId(id)))return false;
  return true;
}

const create = async (title, id) => {
  connection.execute("INSERT INTO model_example.books (title, author_id) VALUES (?,?)", [title, id])
}

module.exports = {getAll, getByAuthorId, isValid, create}