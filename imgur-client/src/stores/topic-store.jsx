var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // 'change' name of the event that just happened
    // this.topics is the information that we want to pass to the app
    this.trigger('change', this.topics);
  }
});
