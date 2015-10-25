var Form = React.createClass({

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="text" />
        <button>Lägg till todo</button>
      </form>
    );
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var textNode = ReactDOM.findDOMNode(this.refs.text);
    console.log(textNode.value);
    //this.props.onItemAdded({ text: textNode.value });
    textNode.value = ""
  },

});
