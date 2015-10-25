var TodoApp = React.createClass({
	
	render: function() {
		return (
			<div>
				<ul>
					<li>Here is my first todo item </li>
				</ul>
			</div>
			);
	}
});

ReactDOM.render(<TodoApp />, document.getElementById('app'));