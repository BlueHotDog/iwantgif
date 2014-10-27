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
        res.redirect(302, "http://24.media.tumblr.com/a997566653712fc8b897132a947d98e1/tumblr_mpexbnloCV1soqenlo1_250.gif");
      }
    });
  }
}


router.get('/', function(req, res) {
  res.redirect('http://www.github.com/bluehotdog/iwantgif')
});

router.get('/:query.:format', getImage);
router.get('/:query', getImage);


module.exports = router;
