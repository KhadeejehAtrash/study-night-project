const gulp = require("gulp");
const shell = require("gulp-shell");

gulp.task(
  "default",
  shell.task(["npx parcel starter/index.html --open"])
);

gulp.task(
  "test",
  shell.task(["npx mocha test/shuffle.js"])
);

gulp.task(
  "cypress",
  shell.task(["npx cypress run"])
);