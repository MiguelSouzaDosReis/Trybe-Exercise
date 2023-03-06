const express = require('express');
const bodyParser = require('body-parser')
const controllerBook = require ('./controller/controllerBook')


const app = express();
app.use(bodyParser.json())    

const PORT = 6001;

app.get('/books', controllerBook.everthing)


app.get('/books/:id', controllerBook.everthingId );

app.post('/books', controllerBook.create)

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});