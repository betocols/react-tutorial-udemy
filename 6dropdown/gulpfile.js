// LECTURE 13
// // Gulp is just the squeleton to build the project
// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

// gulp.task('default', function(){
//   return gulp.src('src/**') // Go into the src directory and load every file inside of it
//     .pipe(react()) // Pipe is for: First do this, then this next step then the next, etc
//     .pipe(concat('application.js')) // Concats all the obtained js files in the application.js file
//     .pipe(gulp.dest('./')); // Saves the file in the current working directory (src/)
// });

// LECTURE 14
var gulp = require('gulp');
var gutil = require('gulp-util'); // Console login out output of the bild process, for debugging
var source = require('vinyl-source-stream'); // Throwing our text files from one part of the buildprocess to another
var browserify = require('browserify'); // Responsible for figuring out what part of our code depends on another part of the code and that the load order is done correctly
var watchify = require('watchify'); // Tool that re-runs gulp everytime one jsx files is changed
var reactify = require('reactify'); // Works in conjuction with browserify to handle converting all our jsx files into js

gulp.task('default' , function() {
  // Bundler -> responsible of running browserify on our code base, instatiatior to run browserify on our code
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'], // First file that browserify will look into
    transform: [reactify], // Tells browserify that while is figuring out the dependencies is gonna transdorm or compile our jsx to js, using the reactify module
    extensions: ['.jsx'], // Files needed to look out while doing this process
    debug: [true],
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // If there is an error, outputs it in the console
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  // The bundler is just an object, it needs the build function to start working
  build()
  bundler.on('update', build)
});
