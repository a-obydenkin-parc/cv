/*global require*/
require.config({
	baseUrl: './js',
	waitSeconds: 15,

	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},

		parallax: ['jquery']
	},

	paths: {
		jquery: 'jquery/jquery-1.9.1.min',
		underscore: 'vendor/lodash.min',
		modernizr: 'vendor/modernizr-2.6.2.min',
		webfont: 'libs/webfont',
		parallax: 'jquery/jquery.parallax.min'
	}
});