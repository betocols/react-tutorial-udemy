var React = require('react'); // React is an NPM module, we use NPM-type syntax
var Dropdown = require('./dropdown'); // This is a file I wrote, I use a different syntax to require this

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [ // List of itmes to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// React, render this class
var element = React.createElement(Dropdown, options);

// React, after rendering this class, place it in the container tag
React.render(element, document.querySelector('.container'));
