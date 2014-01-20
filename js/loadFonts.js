define(['webfont'], function () {
	var families = ['Bicubik'],
		urls = ['../css/common/bicubik.css'];

	if (navigator.platform.toLowerCase().indexOf('win') >= 0) {
		families.push('Myriad Pro');
		urls.push('../css/common/myriad.css');
	}

	WebFont.load({
		custom: {
			families: families,
			urls: urls
		}
	});
});