var express = require('express');
var router = express.Router();
var GifFinder = require('../lib/gif_finder');

function getImage(req, res) {
  var query = req.params.query;
  if (query === null || query.length===0) {
    res.render('index');
  } else {
    console.log("searching for "+query);
    GifFinder.find(query, function(err, link) {
      if (link) {
        res.redirect(302, link);
      } else {
        res.redirect(302, "http://24.media.tumblr.com/tumblr_m9h5j2sre11reu1vyo1_500.gif");
      }
    });
  }
}


router.get('/', function(req, res) {
  res.json({});
});

router.get('/:query.:format', getImage);
router.get('/:query', getImage);


module.exports = router;
