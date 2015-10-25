var TodoApp = React.createClass({

	getInitialState: function() {
	  return {
	    items: this.getItemsFromLocalStore()
	  }
	},

	componentWillUpdate: function(nextProps, nextState) {
		localStorage.items = JSON.stringify(nextState.items;)
	},

	getItemsFromLocalStore: function() {
	  if (localStorage.items) {
	    return JSON.parse(localStorage.items);
	  } else {
	    return [];
	  }
	},

	updateItem: function(index, action) {
		var items = this.state.items;

		if (action.remove) {
			items.splice(index, 1);
		} else {
			items[index].complete = action.complete;
		},

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
				{ text: "Äta", complete: false },
				{ text: "Koda", complete: false }
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
