var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = "https://crackling-inferno-5140.firebaseio.com/";

var App = React.createClass({
  // mixins is a group of methos that sits on one object that is copied over to another object, on this case: this
  // Any methods that are available on ReactFire literally copy paste them over to our ocmponent
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  // Every code inside this method will be ran exactly one time, and its whenever this component is mounted to the DOM
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded)
    // this.state.items => {} will be an object with the data stored in firebase
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <hr />
        <div className={"content " + (this.state.loaded ? "loaded" : "")}>
          <List items={this.state.items} />
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded:true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
