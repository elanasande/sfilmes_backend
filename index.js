const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

// criar express app
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configurar db mongoose
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

// Definindo uma rota
app.get('/', (req, res) => {
  console.log('Ta funcionando hue ');
  res.json({ message: 'Back-end para SFilmes' });
});

const usuarioRouter = require('./routes/usuario.route');
app.use('/usuario', usuarioRouter());

const authRouter = require('./routes/auth.route');
app.use('/auth', authRouter());

// listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening on port 5000');
});
