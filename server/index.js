const express = require('express');
const databaseConnection = require('./database');
const bookRouter = require('./routes/book.routes');
databaseConnection();
const app = express();

// DB connection
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World! helooooo');
});

app.listen(8000, (err) => {
  console.log('Port listening on 8000');
}); 

app.use('/book', bookRouter);

