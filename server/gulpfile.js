// Dependencies
var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('verifycode', function () {
    log('analyzing source code with JSHint and JSCS');
    
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))        
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));        
});

gulp.task('styles', function () {
    log('compiling LESS -> CSS');
    
    return gulp.src(config.less); 
})

function log(msg) {
    if(typeof(msg) === 'object'){
        for(var item in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.green(msg[item]));
            }
        }
    } else{
        $.util.log($.util.colors.green(msg));
    }
}

// gulp verifycode --verbose
// gulp --no-colors verifycode --verbose
