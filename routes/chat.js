var express = require('express'),
    router = express.Router();
var data = [
  {"author": "Pete Hunt", "text": "This is one comment from server"},
  {"author": "Jordan Walke", "text": "This is *another* comment from server"}
];

router.get('/', function(req, res, next) {
  res.render('chat/index', {
    title: 'Express',
    name: 'John',
    data: data,
    initialData: JSON.stringify(data)
  });
});

router.get('/comments', function(req, res, next) {
  res.json(data);
});

module.exports = router;