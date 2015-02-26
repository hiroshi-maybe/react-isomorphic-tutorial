var React = require('react'),
    $ = require('jquery'),
    CommentList = require('./CommentList.jsx'),
    CommentForm = require('./CommentForm.jsx');

module.exports = React.createClass({
    getInitialState: function() {
	return {data: this.props.data};
    },
    loadCommentsFromServer: function() {
	$.ajax({
	    url: "/chat/comments",
	    dataType: 'json',
	    success: function(data) {
		this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString());
	    }.bind(this)
	});
    },
    componentDidMount: function() {
	this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    handleCommentSubmit: function(comment) {
	$.ajax({
	    url: "/chat/comment",
	    dataType: 'json',
	    type: 'POST',
	    data: comment,
	    success: function(data) {
		this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString());
	    }.bind(this)
	});
    },
    render: function() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
	    </div>
	);
    }
});
