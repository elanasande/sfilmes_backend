const router = require('express').Router();
const usuarioController = require('../controllers/usuario.controller');
//const authController = require('../controllers/auth.controller');

usuarioRouter = () => {
  //usar para proteger as rotas do usuario com a autenticação
  //router.use(authController.isAuthenticated);
  router
    .route('/')
    //Rota para exibir todos os usuarios
    .get(usuarioController.getAll)

    //Rota para criar um novo usuario
    .post(usuarioController.create);

  router
    .route('/:nome')
    //Rota para exibir um unico usuario
    .get(usuarioController.getOne)

    //Rota para Atualizar usuario
    .put(usuarioController.update)

    //Rota para Deletar usuario
    .delete(usuarioController.remove);
  return router;
};

module.exports = usuarioRouter;
