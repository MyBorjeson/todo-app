var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			items: [
				{ text: "Min första todo", complete: false },
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
				complete={item.complete} />
		);
	},

	handleSubmit: function(event) {
		event.preventDefault();
	},

  render: function() {
    return (
      <div>
				<Form />
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
