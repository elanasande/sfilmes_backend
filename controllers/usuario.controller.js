const Usuario = require('../models/usuario.model');

const create = async (req, res) => {
  try {
    const newUsuario = new Usuario(req.body);
    if (!newUsuario.email)
      return res
        .status(400)
        .send({ message: 'E-mail do Usuário não enviado ' });
    if (!newUsuario.password)
      return res.status(400).send({ message: 'Senha do Usuário não enviada ' });

    await newUsuario.save(function (err) {
      if (!err) {
        return res
          .status(201)
          .send({ message: 'Usuário cadastrado com sucesso' });
      } else if (err.code === 11000) {
        console.log(err);
        return res.status(400).send({ message: 'Usuário já está cadastrado' });
      } else {
        return res
          .status(500)
          .send({ error: err, message: 'Erro interno do servidor' });
      }
    });
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};
//READ Usuario
const getAll = async (req, res) => {
  try {
    const usuario = await Usuario.find({}).select({ _id: 0, _v: 0 });
    return res.status(200).send(usuario);
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};
//GetOne por email de Usuário
const getOne = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      email: req.params.email.toUpperCase(),
    }).select({ _id: 0, _v: 0 });

    if (!usuario)
      return res.status(404).send({ message: 'Usuário não encontrado' });
    //retorna o primeiro Usuario encontrado
    return res.status(200).send(usuario);
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};

//UPDATE Usuário
const update = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      email: req.params.email.toUpperCase(),
    });

    if (!usuario)
      return res.status(404).send({ message: 'Usuário não encontrado' });
    //para não alterar o email do Usuário
    if (req.body.email) delete req.body.email;

    await Object.assign(usuario, req.body).save();
    return res.status(200).send({ message: 'Usuário atualizado' });
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};
//Apagar um usuario
// atualizar depois pra somente setar pra deletado
const remove = async (req, res) => {
  try {
    const usuario = await Usuario.findOneAndRemove({
      email: req.params.email.toUpperCase(),
    }).select({ _id: 0, _v: 0 });

    if (!usuario)
      return res.status(404).send({ message: 'Usuário não encontrado' });

    return res.status(200).send({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
