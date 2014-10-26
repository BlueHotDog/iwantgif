var express = require('express');
var router = express.Router();
var GifFinder = require('../lib/gif_finder');

router.get('/:query', function(req, res) {
  GifFinder.find(req.params.query, function(err, link) {
    if (link) {
      res.redirect(link);
    } else {
      throw err;
    }
  });
});

module.exports = router;
