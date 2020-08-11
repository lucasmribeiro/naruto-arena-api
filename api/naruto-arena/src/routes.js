const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.searchAll);
routes.get('/users/:id', UserController.search);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.remove);

module.exports = routes;