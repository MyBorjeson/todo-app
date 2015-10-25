"use strict";

var Item = React.createClass({
  displayName: "Item",

  toggleComplete: function toggleComplete() {
    if (this.props.complete) {
      this.props.onUpdate({ complete: false });
      console.log("Den här saken är gjord! Vi borde markera den som klar.");
    } else {
      this.props.onUpdate({ complete: true });
      console.log("Det här är inte gjort! Vi vi borde markera den som ej klar.");
    }
  },

  render: function render() {
    var complete = this.props.complete ? "complete" : "not-complete";

    return React.createElement(
      "li",
      { onClick: this.toggleComplete, className: complete },
      React.createElement(
        "span",
        { className: "text" },
        this.props.text
      ),
      React.createElement(
        "a",
        { href: true, className: "remove", onClick: this.remove },
        "x"
      )
    );
  }

});