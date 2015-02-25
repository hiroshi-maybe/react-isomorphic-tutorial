var React = require('react'),
    CommentBox = require('./CommentBox.jsx');

var CommentBoxFactory = React.createFactory(CommentBox);

module.exports = React.createClass({
   render: function() {
       return (
	   <CommentBox data={this.props.data} />
	);
    }
});

