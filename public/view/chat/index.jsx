var React = require('react'),
    $ = require('jquery'),
    CommentBox = require('../../../views/chat/CommentBox.jsx');

$(function() {
    var containerEl = document.getElementById('content'),
	data = JSON.parse(document.getElementById('initial-data').innerHTML);
//    data[0].author = 'client 1';
    console.log(data);
    React.render(
	<CommentBox data={data} />,
	containerEl
    );
});
