"use strict";

var TodoApp = React.createClass({
	displayName: "TodoApp",

	getItemsFromLocalStore: function getItemsFromLocalStore() {
		return JSON.parse(localStorage.items);
	},

	updateItem: function updateItem(index, action) {
		var items = this.state.items;

		if (action.remove) {
			items.splice(index, 1);
		} else {
			items[index].complete = action.complete;
		}

		console.log(items[index]);
		this.setState({ items: items });
	},

	handleNewItem: function handleNewItem(item) {
		var newItems = this.state.items.concat([item]);
		this.setState({ items: newItems });
	},

	getInitialState: function getInitialState() {
		return {
			items: [{ text: "Äta", complete: true }, { text: "Koda", complete: false }]
		};
	},

	buildItemNode: function buildItemNode(item, index) {
		console.log(item, index);
		return React.createElement(Item, {
			key: index,
			text: item.text,
			complete: item.complete,
			onUpdate: this.updateItem.bind(this, index) });
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Form, { onItemAdded: this.handleNewItem }),
			React.createElement(
				"ul",
				null,
				this.state.items.map(this.buildItemNode)
			)
		);
	}

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));