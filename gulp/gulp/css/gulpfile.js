const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // Certifique-se de usar o compilador correto
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // Substitua "erro" por "error"
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(cb) {
    return gulp.src('src/index.html')
    
    .pipe(gulp.dest('build'))
}

module.exports.default = parallel(
    copiarHTML,
    transformacaoCSS
)

