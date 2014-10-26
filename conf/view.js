function view(app) {
  const path = require('path');
  app.set('views', path.join(__dirname, '..', 'app', 'views'));
  app.set('view engine', 'jade');
}

module.exports = view;