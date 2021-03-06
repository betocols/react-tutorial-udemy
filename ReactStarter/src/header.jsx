var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },

  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          type="button"
          onClick={this.handleClick}>
          Add
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    //Send value of text input to Firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });

    this.setState({text: ''});
  },
  handleInputChange: function(event) {
    // target is the DOM node reference that has been modified
    this.setState(
      { text: event.target.value }
    );
  }
});
