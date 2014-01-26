define([
	'core',
	'jquery',
	'underscore',
	'parallax'], function(Core) {
	var background = new Image(),
		backgroundSrc = '../img/bg_main.png',
		content = $('.b-content'),
		delay = 200,
		promise = $.Deferred();

	promise
		.done(function() {
			// Let's hide spinner
			Core.toggleLoader(false);
		})
		.done(function() {
			// And show content area with loaded background
			content
				.css('background-image', 'url(' + backgroundSrc + ')')
				.fadeIn('slow');
		})
		.done(function() {
			// Showing info blocks
			_.each($('.b-blocks'), function(elem) {
				$(elem).show(delay);
				delay += 400;
			});
		})
		.done(function() {
			content.parallax();

			// Parallax hack for absolute-driven layout ;-)
			$('.layer').css({
				position: '',
				top: '',
				left: '',
				width: '',
				height: ''
			});
		});

	// Lazy background image loading
	background.onload = function() {
		promise.resolve();
	}

	background.src = backgroundSrc;
});