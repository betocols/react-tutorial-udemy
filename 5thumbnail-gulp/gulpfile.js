// Gulp is just the squeleton to build the project
var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function(){
  return gulp.src('src/**') // Go into the src directory and load every file inside of it
    .pipe(react()) // Pipe is for: First do this, then this next step then the next, etc
    .pipe(concat('application.js')) // Concats all the obtained js files in the application.js file
    .pipe(gulp.dest('./')); // Saves the file in the current working directory (src/)
});