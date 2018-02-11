const gulp = require('gulp');
const del = require('del');

const docsDir = `./docs`;
const buildDir = './build';

const cleanDocsDir = () => del.sync([`${docsDir}/**`, `!${docsDir}`, `!${docsDir}/CNAME`]);

const copyBuild = () => gulp.src(`${buildDir}/**`)
    .pipe(gulp.dest(`${docsDir}`));

gulp.task('cleanDocsDir', cleanDocsDir);

gulp.task('copyBuild', ['cleanDocsDir'], copyBuild);
