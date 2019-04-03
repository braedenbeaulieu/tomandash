const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
        processCssUrls: false
    })
    .js('resources/js/main.js', 'public/js')
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/lightbox.js', 'public/js')
    .js('resources/js/gallery.js', 'public/js')
    .js('resources/js/rsvp.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/lightbox.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.(handlebars|hbs)$/,
                loader: "handlebars-loader"
            }]
        }
    });
