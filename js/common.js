$(document).ready(function() {

	$(".toggle-nav").click(function() {
	  $(".sandwich").toggleClass("active");
	});

	$(".toggle-nav").click(function() {
		if ($('.header .nav').is(':hidden')) {
			$('.header .nav').fadeIn(600);
		} else {
			$('.header .nav').fadeOut(600);
		}
	});

	$('.header .nav ul li a').click(function() {
		$('.header .nav').fadeOut(600);
		$(".sandwich").removeClass("active");
	});

});
