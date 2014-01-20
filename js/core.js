define(['jquery'], function() {
	var Core = {
		toggleLoader: function(toggle) {
			toggle = typeof toggle == 'undefined' ? true : toggle;
			var loader = $('.b-loader');

			toggle ? loader.fadeIn() : loader.fadeOut();		
		},

		checkPlatform: function() {

		}
	};

	return Core;
});