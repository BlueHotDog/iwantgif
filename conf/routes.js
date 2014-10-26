function routes(app) {
  app.use('/', require('../routes/index'));
}

module.exports = routes;