"use strict";

var Form = React.createClass({
  displayName: "Form",

  render: function render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit },
      React.createElement("input", { ref: "text" }),
      React.createElement(
        "button",
        null,
        "Lägg till todo"
      )
    );
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    var textNode = ReactDOM.findDOMNode(this.refs.text);
    console.log(textNode.value.state);
    //this.props.onItemAdded({ text: textNode.value });
    this.props.onItemAdded({ text: textNode.value });
    textNode.value = "";
  }

});