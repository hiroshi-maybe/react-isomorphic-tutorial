var express = require('express'),
    router = express.Router();
var data = [
  {id: 1, "author": "Pete Hunt", "text": "This is one comment from server"},
  {id: 2, "author": "Jordan Walke", "text": "This is *another* comment from server"}
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