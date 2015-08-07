var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory'); //Object that tells the router how e will be keeping track of what page the user is at any given time
var Router = ReactRouter.Router; // The actual router that will be deciding what content will be shown in the page at any given time
var Route = ReactRouter.Route; //Used to configure the Router

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
)
