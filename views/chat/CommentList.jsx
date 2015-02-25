var React = require('react'),
    Comment = require('./Comment.jsx');

module.exports = React.createClass({
    render: function() {
	var commentNodes = this.props.data.map(function (comment) {
	    return (
		<Comment key={comment.id} author={comment.author}>
		    {comment.text}
		</Comment>
	    );
	});
	return (
	    <div className="commentList">
		{commentNodes}
	    </div>
	);
    }
});
