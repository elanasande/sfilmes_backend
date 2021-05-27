const express = require('express');
const bodyParser = require('body-parser');

// criar express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configurar db mongoose
const dbConfig = { url: 'mongodb://localhost:27017/lanchonete' };

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conectar ao Mongo
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Successo ao conectar a base de dados. ');
  })
  .catch((err) => {
    console.log('Não foi possivel conectar ao bd. ', err);
    process.exit();
  });

// Definindo uma rota
app.get('/', (req, res) => {
  console.log('Ta funcionando hue ');
  res.json({ message: 'Back-end para SFilmes' });
});

const usuarioRouter = require('./routes/usuario.route');
app.use('/usuario', usuarioRouter());

//const authRouter = require('./routes/auth.route');
//app.use('/auth', authRouter());

// listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening on port 5000');
});
