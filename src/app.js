var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			items: [
				{ text: "This is My first todo item", complete: false },
				{ text: "This is my Second tot item", comeplete: false }
			]
		};
	},

	buildItemNode: function(item, index) {
		console.log(item,index);
		return (
			<Item
				key={index}
				text={item.text}
				complete={item.complete} />
		);
	},

  render: function() {
    return (
      <div>
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
