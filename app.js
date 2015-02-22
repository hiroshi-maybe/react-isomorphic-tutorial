var express = require('express');

var app = express();

app.set('view engine', 'jsx');

var options = {
  jsx: {
    harmony: true,
    beautify: true
  }
};

app.engine('jsx', require('express-react-views').createEngine(options));

app.get('/', require('./routes').index);
app.get('/chat', require('./routes/chat'));

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});