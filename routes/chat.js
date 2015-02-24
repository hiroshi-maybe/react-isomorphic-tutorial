var data = [
  {"author": "Pete Hunt", "text": "This is one comment from server"},
  {"author": "Jordan Walke", "text": "This is *another* comment from server"}
];

module.exports = function(req, res){
  res.render('chat/index', {
    title: 'Express',
    name: 'John',
    data: data,
    initialData: JSON.stringify(data)
  });
};