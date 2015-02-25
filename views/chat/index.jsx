var React = require('react'),
    $ = require('jquery'),
    CommentBox = require('./CommentBox.jsx');

if (typeof window !== 'undefined') {
    $(function() {
	var containerEl = document.getElementById('content'),
	    data = JSON.parse(document.getElementById('initial-data').innerHTML);
	console.log(data);
	React.render(
	    <CommentBox data={data} />,
	    containerEl
	);
    });
}

module.exports = React.createClass({
   render: function() {
       return (
	   <CommentBox data={this.props.data} />
	);
    }
});

