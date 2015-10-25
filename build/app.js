"use strict";

var TodoApp = React.createClass({
	displayName: "TodoApp",

	getInitialState: function getInitialState() {
		return {
			items: [{ text: "This is My first todo item", complete: false }, { text: "This is my Second tot item", comeplete: false }]
		};
	},

	buildItemNode: function buildItemNode(item, index) {
		console.log(item, index);
		return React.createElement(Item, {
			key: index,
			text: item.text,
			complete: item.complete });
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"ul",
				null,
				this.state.items.map(this.buildItemNode)
			)
		);
	}

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));