var React = require('react'),
    DefaultLayout = require('../layouts/default.jsx'),
    CommentBox = require('./CommentBox.jsx');

var HelloMessage = React.createClass({
   render: function() {
	return (
	    <DefaultLayout title={this.props.title}>
		<CommentBox data={this.props.data} />
	        <div>Hello {this.props.name}</div>
	    </DefaultLayout>
	);
    }
});

module.exports = HelloMessage;
