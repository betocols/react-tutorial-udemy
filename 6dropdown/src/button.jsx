var React = require('react');

// var Badge = React.createClass({
module.exports = React.createClass({
  render: function() {
    // Types of events: https://facebook.github.io/react/docs/events.html
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});
