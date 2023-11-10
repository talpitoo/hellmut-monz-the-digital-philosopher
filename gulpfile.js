// NOTE: gulp and its dependencies are used for SVG sprite generation only
var gulp = require('gulp');
var svg = require("gulp-svg-sprite");
var changed = require('gulp-changed');



// -------------------------------------
//   Config
// -------------------------------------
const paths = {
	dist: './src/',
	sprites: {
		src: "./src/img/icons/*.svg",
		dist: "./src/img/icons/dist/",
	}
}



// -------------------------------------
//   SVG Sprite generation
// -------------------------------------
const sprites = () => {
	var svgOptions = {
		mode: {
			defs: {
				sprite: "../sprite.svg"
			}
		}
	}
	return gulp.src(paths.sprites.src)
		.pipe(changed(paths.sprites.dist))
		.pipe(svg(svgOptions))
		.pipe(gulp.dest(paths.sprites.dist))
}

exports.build_sprite = gulp.series(sprites)
