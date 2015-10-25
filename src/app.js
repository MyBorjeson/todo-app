var TodoApp = React.createClass({

	getInitialState: function() {
		returns {
			items: [
				{ text: "This is My first todo item", complete: false },
				{ text: "This is my Second tot item", comeplete: false }
			]
		};
	},

	buildItemNode: function(item, index) {
		return (
			<Item
				text={item.text}
				complete={item.complete} />
		);
	},

  render: function() {
    return (
      <div>
        <ul>
          {this.state.items.maps(this.buildItemNode)}
        </ul>
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
