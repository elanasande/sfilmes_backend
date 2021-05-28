const Filme = require('../models/filmes.model');

const create = async (req, res) => {
  try {
    const newFilme = new Filme(req.body);
    if (!newFilme.name)
      return res.status(400).send({ message: 'Nome do filme não enviado ' });
    if (!newFilme.duracao)
      return res.status(400).send({ message: 'Duração do filme não enviada ' });

    await newFilme.save(function (err) {
      if (!err) {
        return res
          .status(201)
          .send({ message: 'Filme cadastrado com sucesso' });
      } else if (err.code === 11000) {
        console.log(err);
        return res.status(400).send({ message: 'Filme já está cadastrado' });
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
//READ Filme
const getAll = async (req, res) => {
  try {
    const filme = await Filme.find({}).select({ _id: 0, _v: 0 });
    return res.status(200).send(filme);
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};
//GetOne por nome do Filme
const getOne = async (req, res) => {
  try {
    const filme = await Filme.findOne({
      name: req.params.name.toUpperCase(),
    }).select({ _id: 0, _v: 0 });

    if (!filme)
      return res.status(404).send({ message: 'Filme não encontrado' });
    //retorna o primeiro Filme encontrado
    return res.status(200).send(filme);
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};

//UPDATE Usuário
const update = async (req, res) => {
  try {
    const filme = await Filme.findOne({
      name: req.params.name.toUpperCase(),
    });

    if (!filme)
      return res.status(404).send({ message: 'Filme não encontrado' });

    await Object.assign(filme, req.body).save();
    return res.status(200).send({ message: 'Filme atualizado' });
  } catch (err) {
    return res
      .status(500)
      .send({ error: err, message: 'Erro interno do servidor' });
  }
};
//Apagar um filme
// atualizar depois pra somente setar pra deletado
const remove = async (req, res) => {
  try {
    const filme = await Filme.findOneAndRemove({
      name: req.params.name.toUpperCase(),
    }).select({ _id: 0, _v: 0 });

    if (!filme)
      return res.status(404).send({ message: 'Filme não encontrado' });

    return res.status(200).send({ message: 'Filme deletado com sucesso' });
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
