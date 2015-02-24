var React = require('react'),
    DefaultLayout = require('../layouts/default.jsx'),
    CommentBox = require('./CommentBox.jsx');

var CommentBoxFactory = React.createFactory(CommentBox);

var HelloMessage = React.createClass({
   render: function() {
	return (
	    <DefaultLayout title={this.props.title}>
		<script id="initial-data" type="application/json" dangerouslySetInnerHTML={{__html: this.props.initialData}} />
		<div id="commentBox">
		    <CommentBox data={this.props.data} />		    
		</div>
	        <div>Hello {this.props.name}</div>
	    </DefaultLayout>
	);
    }
});

module.exports = HelloMessage;
