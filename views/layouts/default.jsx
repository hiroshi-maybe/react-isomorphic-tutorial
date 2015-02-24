var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
	return (
	    <html>
	        <head>
		    <title>{this.props.title}</title>
		    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		    <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script> */}
		    <script src="public/build/index.js"></script>
		</head>
	        <body>
		    {this.props.children}
		</body>
	    </html>
	);
    }
});

module.exports = DefaultLayout;
