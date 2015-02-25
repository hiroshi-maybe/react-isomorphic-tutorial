var React = require('react');

module.exports = React.createClass({
    handleSubmit: function(e) {
	e.preventDefault();
	var author = this.refs.author.getDOMNode().value.trim();
	var text = this.refs.text.getDOMNode().value.trim();
	if (!text || !author) {
	    return;
	}
	// TODO: send request to the server
	this.refs.author.getDOMNode().value = '';
	this.refs.text.getDOMNode().value = '';
    },
    render: function() {
	return (
	    <div>form</div>
	);
    }
});
