var React = require('react'),
    DefaultLayout = require('../layouts/default'),
    CommentBox = require('./CommentBox');

var HelloMessage = React.createClass({
   render: function() {
	var data = [
	    {author: "Pete Hunt", text: "This is one comment"},
	    {author: "Jordan Walke", text: "This is *another* comment"}
	];

	return (
	    <DefaultLayout title={this.props.title}>
		<CommentBox data={data} />
	        <div>Hello {this.props.name}</div>
	    </DefaultLayout>
	);
    }
});

module.exports = HelloMessage;
