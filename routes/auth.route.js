const router = require('express').Router();
const authController = require('../controllers/auth.controller');

const userRouter = () => {
  router.route('/')
    .post(authController.authenticate);

  return router;
};

module.exports = userRouter;