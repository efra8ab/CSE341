const routes = require('express').Router();
const lesson1Controller = require('../Controllers/lesson1Controller')

routes.get("/", lesson1Controller.helloRoute);
routes.get("/testing", lesson1Controller.testingRoute);

module.exports = routes;