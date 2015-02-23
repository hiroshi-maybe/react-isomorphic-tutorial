module.exports = function(req, res){
  res.render('chat/index', {  title: 'Express', name: 'John' });
};