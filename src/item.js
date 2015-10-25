var Item = React.createClass({

  toggleComplete: function() {
    if (this.props.complete) {
      this.props.onUpdate({ complete: false });
      console.log("Den här saken är gjord! Vi borde markera den som klar.")
    } else {
      this.props.onUpdate({ complete:true});
      console.log("Det här är inte gjort! Vi vi borde markera den som ej klar.")
    }
  },

  render: function() {
    var complete = this.props.complete ? "complete" : "not-complete";

    return (
      <li onClick={this.toggleComplete} className={complete}>
        <span className="text">{this.props.text}</span>
        <a href className="remove" onClick={this.remove}>x</a>
      </li>
    );
  }

});
