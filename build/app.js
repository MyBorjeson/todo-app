"use strict";

var TodoApp = React.createClass({
	displayName: "TodoApp",

	getInitialState: function getInitialState() {
		return {
			items: [{ text: "Min första todo", complete: false }, { text: "Min andra todo", comeplete: false }]
		};
	},

	buildItemNode: function buildItemNode(item, index) {
		console.log(item, index);
		return React.createElement(Item, {
			key: index,
			text: item.text,
			complete: item.complete });
	},

	handleSubmit: function handleSubmit(event) {
		event.preventDefault();
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Form, null),
			React.createElement(
				"ul",
				null,
				this.state.items.map(this.buildItemNode)
			)
		);
	}

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));