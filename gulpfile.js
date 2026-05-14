const gulp = require('gulp');
const shell = require('gulp-shell');

// Run Parcel (build + serve)
gulp.task('default', shell.task('npx parcel starter/index.html --open'));

// Run Mocha tests
gulp.task('test', shell.task('npx mocha test/shuffle.js'));

// Run Cypress tests
gulp.task('cypress', shell.task('npx cypress run'));