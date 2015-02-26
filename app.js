var express = require('express'),
    bodyParser = require('body-parser');;

var app = express();

app.set('view engine', 'jsx');

var options = {
  jsx: {
    harmony: true,
    beautify: true
  }
};

app.engine('jsx', require('./lib/express-react-views').createEngine(options));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', require('./routes').index);
app.use('/chat', require('./routes/chat'));

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});