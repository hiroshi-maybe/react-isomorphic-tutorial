exports.index = function(req, res){
  res.render('index', {  title: 'Express', name: 'John' });
};