// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    this.setState({open: !this.state.open});
  },
  getInitialState: function() {
    return { open: false };
  },
  handleItemClick: function(item) {
    return this.setState({
      open: false,
      itemTitle: item
     });
  },

  render: function() {
    // *** Approach 1
    // items = this.props.items.map(function(item) {
    //   return <li>{item}</li>
    // });

    // *** Approach 3
    var list = this.props.items.map(function(item) {
      return <ListItem
                item={item}
                whenItemClicked={this.handleItemClick}
                className={this.state.itemTitle === item ? "active" : ""}/>
    }.bind(this));

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.state.itemTitle || this.props.title}
        subTitleClassName="caret" />

      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});

// APPROACHES INSIDE RETURN OF DROPDOWN RENDERING
// *** Approach 1
// <ul> {items} </ul>

// *** Approach 2
// <List items={this.props.items} />

// *** Approach 3
// <ul>
//   {list}
// </ul>

////////////////////
// *** Approach 2

// Inside list.jsx
// render: function() {
//   list = this.props.items.map(function(item) {
//     return <ListItem item={item} />
//   })

//   return <ul>
//     {list}
//   </ul>
// }

// // Inside listitem.jsx
// render: function() {
//   return <li>{this.props.item}</li>
// }

// *** Approach 3
