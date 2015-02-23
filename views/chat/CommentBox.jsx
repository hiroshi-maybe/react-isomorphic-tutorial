var React = require('react'),
    CommentList = require('./CommentList'),
    CommentForm = require('./CommentForm');

module.exports = React.createClass({
    render: function() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.props.data} />
		<CommentForm />
	    </div>
	);
    }
});
