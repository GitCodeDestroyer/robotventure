var toolbarOpen = 0;

$('.toolbar-open span').click(function () {
	if (toolbarOpen == 0) {
		$('.toolbar-open').animate({left: 70}, 300);
		$('.toolbar-open span').animate({
			'line-height': 40,
			height: 40
		}, 300);
		$('.toolbar').animate({left: 0}, 300);
		$('.toolbar-open span').removeClass('fa-angle-right');
		$('.toolbar-open span').addClass('fa-angle-left');
		$('.toolbar-open span').addClass('active');
		toolbarOpen = 1;
	}else {
		$('.toolbar-open').animate({left: 0}, 300);
		$('.toolbar-open span').animate({
			'line-height': '100vh',
			height: '100vh'
		}, 300);
		$('.toolbar').animate({left: -70}, 300);
		$('.toolbar-open span').removeClass('fa-angle-left');
		$('.toolbar-open span').addClass('fa-angle-right');
		$('.toolbar-open span').removeClass('active');
		toolbarOpen = 0;
	}
});

var infobarOpen = 0;

$('.infobar-open span').click(function () {
	if (infobarOpen == 0) {
		$('.infobar-open').animate({right: 350}, 300);
		$('.infobar-open span').animate({
			'line-height': 40,
			height: 40
		}, 300);
		$('.infobar').animate({right: 0}, 300);
		$('.infobar-open span').removeClass('fa-angle-left');
		$('.infobar-open span').addClass('fa-angle-right');
		$('.infobar-open span').addClass('active');
		infobarOpen = 1;
	}else {
		$('.infobar-open').animate({right: 0}, 300);
		$('.infobar-open span').animate({
			'line-height': '100vh',
			height: '100vh'
		}, 300);
		$('.infobar').animate({right: -350}, 300);
		$('.infobar-open span').removeClass('fa-angle-right');
		$('.infobar-open span').addClass('fa-angle-left');
		$('.infobar-open span').removeClass('active');
		infobarOpen = 0;
	}
});