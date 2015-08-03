var React = require('react');
var Thumbnail = require('./thumbnail');

// var ThumbnailList = React.createClass({
module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
        //takes the entire options object from the args and create an instance of Thumbnail passing all of those properties
        return <Thumbnail {...thumbnailProps}/>;
    });

    return <div>
      {list}
    </div>
  }
});
