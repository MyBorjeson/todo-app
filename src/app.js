var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <ul>
          <li>This is My first todo item!</li>
        </ul>
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
