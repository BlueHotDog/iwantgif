var express = require('express');
var router = express.Router();
var GifFinder = require('../lib/gif_finder');

router.get('/:query', function(req, res) {
  GifFinder.find(req.params.query, function(err, link) {
    res.redirect(link);
  });

});

module.exports = router;
