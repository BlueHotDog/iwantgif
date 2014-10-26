var express = require('express');
var router = express.Router();
var GifFinder = require('../lib/gif_finder');


router.get('/', function(req, res) {
  res.json({});
});

router.get('/:query', function(req, res) {
  var query = req.params.query;

  if (query === null || query.length===0) {
    res.render('index');
  } else {
    GifFinder.find(query, function(err, link) {
      if (link) {
        res.redirect(link);
      } else {
        res.redirect("http://24.media.tumblr.com/tumblr_m9h5j2sre11reu1vyo1_500.gif");
      }
    });
  }
});

module.exports = router;
