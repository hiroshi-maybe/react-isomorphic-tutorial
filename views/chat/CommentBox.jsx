var React = require('react'),
    CommentList = require('./CommentList.jsx'),
    CommentForm = require('./CommentForm.jsx');

module.exports = React.createClass({
    getInitialState: function() {
	return {data: []};
    },
    loadCommentsFromServer: function() {
	$.ajax({
	    url: this.props.url,
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
	console.log("did mount...");
	this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm />
	    </div>
	);
    }
});
