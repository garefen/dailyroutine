const express = require('express');

const ActivityController = require('./controllers/ActivityController');
const UserController = require('./controllers/UserController');
const UncheckActivityController = require('./controllers/UncheckActivityController');
const CheckActivityController = require('./controllers/CheckActivityController');

const routes = express.Router();

routes.post("/user/create", UserController.store);
routes.post("/users", UserController.index);
routes.post("/user/update", UserController.update);
routes.post("/activity/create", ActivityController.store);
routes.post("/activity", ActivityController.index);
routes.post("/activity/update", ActivityController.update);
routes.post("/activity/check", CheckActivityController.store);
routes.post("/activity/uncheck", UncheckActivityController.store);

module.exports = routes;