"use strict";

var TodoApp = React.createClass({
	displayName: "TodoApp",

	updateItem: function updateItem(index, action) {
		var items = this.state.items;
		items[index].complete = action.complete;
		this.setState({ items: items });
	},

	handleNewItem: function handleNewItem(item) {
		var newItems = this.state.items.concat([item]);
		this.setState({ items: newItems });
	},

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
			complete: item.complete,
			onUpdate: this.updateItem });
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Form, { onItemAdded: this.handeNewItem }),
			React.createElement(
				"ul",
				null,
				this.state.items.map(this.buildItemNode)
			)
		);
	}

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));