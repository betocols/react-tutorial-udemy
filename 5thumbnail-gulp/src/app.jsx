var React = require('react');
var ThumbnailList = require('./thumbnail-list'); // This is a file I wrote, I use a different syntax to require this
//var Gulp = require('gulp'); // Gulp is an NPM module, we use NPM-type syntax

var options = {

  thumbnailData: [
    {
      title: "Show Courses",
      number: 32,
      header: 'Learn React',
      description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages',
      imgUrl: 'https://www.codementor.io/assets/tutorial_icon/reactjs.png'
    }, {
      title: "Show Courses",
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development worflow. Gulp will speed up your development worflow',
      imgUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }]
};

// React, render this class
var element = React.createElement(ThumbnailList, options);

// React, after rendering this class, place it in the container tag
React.render(element, document.querySelector('.container'));
