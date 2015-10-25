'use strict';

var TodoApp = React.createClass({
	displayName: 'TodoApp',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					null,
					'Here is my first todo item '
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));