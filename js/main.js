require(['common'], function() {
	require(['contentLoad', 'loadFonts'], function(Parallax) {

		var WebApp = {
			init: function() {
				this.setNavigatorHacks();
			},

			setNavigatorHacks: function() {
				var layout = $('.l-wrapper'),
					platform = window.navigator.platform.toLowerCase(),
					agent = window.navigator.userAgent.toLowerCase();

				if (platform.indexOf('win') >= 0) {
					$(document.body).addClass('l-body--win');
				}

				if (agent.indexOf('webkit') >= 0) {
					layout.addClass('l-wrapper--webkit');
				}
			}
		};

		WebApp.init();
	});
});