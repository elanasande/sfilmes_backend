const router = require('express').Router();
const filmeController = require('../controllers/filmes.controller');
//const authController = require('../controllers/auth.controller');

filmeRouter = () => {
  //usar para proteger as rotas de filmes com a autenticação
  //router.use(authController.isAuthenticated);
  router
    .route('/')
    //Rota para exibir todos os filmes
    .get(filmeController.getAll)

    //Rota para criar um novo filme
    .post(filmeController.create);

  router
    .route('/:name')
    //Rota para exibir um unico filme
    .get(filmeController.getOne)

    //Rota para Atualizar filme
    .put(filmeController.update)

    //Rota para Deletar filme
    .delete(filmeController.remove);
  return router;
};

module.exports = filmeRouter;
