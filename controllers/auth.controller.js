const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');

//para o secret dotenv e arq .env com segredo
const SECRET = process.env.SECRET;

const authenticate = async (req, res) => {
  try {
    //Buscar o usuário
    Usuario.findOne({ email: req.body.email }, function (err, usuario) {
      //if (err) throw err;
      if (!usuario) {
        res
          .status(400)
          .json({
            message: 'Autenticação do Usuário falhou. Usuário não encontrado!',
          });
      } else if (usuario) {
        //Verificar se a senha bate com o que está cadastrado no bd
        if (usuario.password != req.body.password) {
          res
            .status(400)
            .json({
              message: 'Autenticação do Usuário falhou. Senha incorreta!',
            });
        } else {
          console.log('chegou na parte de criar o token');

          // caso a senha do usuário seja encontrada, criar um token
          const token = `JWT ${jwt.sign(
            { id: usuario._id, email: usuario.email },
            SECRET,
            { expiresIn: '1d' },
          )}`;

          //Retornar a informação do token via JSON
          res.status(200).json({
            message: 'Token Criado!',
            token: token,
          });
        }
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro no servidor ao tentar autenticar.',
      err,
    });
  }
};

/** usar para proteger as rotas */
const isAuthenticated = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({
      message: 'Usuário não autenticado.',
    });
  }
  try {
    //retira o jwt do token gerado para validar
    const { id } = await jwt.verify(token.replace('JWT', '').trim(), SECRET);
    req.user = {
      id,
    };
    return next();
  } catch (err) {
    return res.status(500).json({
      message: 'Erro inesperado',
      err,
    });
  }
};

module.exports = {
  authenticate,
  isAuthenticated,
};
