var TodoApp = React.createClass({
	
	render: function() {
		return (
			<div>
				<ul>
					<Item text="This is My first todo item">
				</ul>
			</div>
			);
	}
});

ReactDOM.render(<TodoApp />, document.getElementById('app'));