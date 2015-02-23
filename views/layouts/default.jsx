var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
	return (
	    <html>
	        <head>
		    <title>{this.props.title}</title>
		    <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
		    <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
		</head>
	        <body>{this.props.children}</body>
	    </html>
	);
    }
});

module.exports = DefaultLayout;
