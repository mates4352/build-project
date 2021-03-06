import gulp from 'gulp';
import include from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import config from '../config';

const html = (cb) => {

   gulp.src(config.src.html)
      .pipe(plumber())
      .pipe(include())
      .pipe(gulpif(config.isProd, htmlmin({
         collapseWhitespace: true,
         removeComments: true,
      })))
      .pipe(gulpif(config.isProd, rename({
         suffix: '.min',
         extname: '.html',
      })))
      .pipe(gulp.dest(config.build.html))
   cb();
   
}

export default html;
