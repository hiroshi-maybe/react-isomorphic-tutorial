var React = require('react');

module.exports = React.createClass({
    render: function() {
	return (
	    <html>
	        <head>
		    <title>{this.props.title}</title>
		    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
			<script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script> */}
		    <script id="initial-data" type="application/json" dangerouslySetInnerHTML={{__html: this.props.initialData}} />
		    <script src="public/build/index.js"></script>
		</head>
	        <body>
		    <div id="content" dangerouslySetInnerHTML={{__html: this.props.content}} />
		</body>
	    </html>
	);
    }
});
