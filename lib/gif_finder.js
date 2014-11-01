var request = require('request');
function GifFinder() {
}

GifFinder.find = function find(query, cb) {
  var url = 'http://api.gifme.io/v1/search';
  var getRequest = {
    url: url,
    qs: {
      query: query,
      limit: 1,
      key: "rX7kbMzkGu7WJwvG"
    }
  };

  request(getRequest, function (error, res, body) {
    if (!error && res.statusCode === 200) {
      body = JSON.parse(body);
      console.dir(body);
      var items = body.data;
      if (body.status === 200 && items.length>0) {
        var result = items[Math.floor(Math.random()*items.length)];
        cb(null, result.link);
      } else {
        cb(new Error("no items or not 200"));
      }
    } else {
      cb(error);
    }
  });
};



module.exports = GifFinder;