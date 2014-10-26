var express = require('express');

var app = express();

require('./conf/view.js')(app);
require('./conf/middleware.js')(app);
require('./conf/routes.js')(app);
require('./conf/errors.js')(app);


module.exports = app;
