var TodoApp = React.createClass({

	updateItem: function(index, action) {
		var items = this.state.items;
		items[index].complete = action.complete;
		console.log(items[index]);
		this.setState({ items: items });
	},

	handleNewItem: function(item) {
		var newItems = this.state.items.concat([item]);
		this.setState({ items: newItems });
	},

	getInitialState: function() {
		return {
			items: [
				{ text: "Min första todo", complete: true },
				{ text: "Min andra todo", comeplete: false }
			]
		};
	},

	buildItemNode: function(item, index) {
		console.log(item,index);
		return (
			<Item
				key={index}
				text={item.text}
				complete={item.complete}
				onUpdate={this.updateItem.bind(this, index)} />
		);
	},

  render: function() {
    return (
      <div>
				<Form onItemAdded={this.handleNewItem} />
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
