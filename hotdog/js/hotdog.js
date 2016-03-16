$(document).ready(function(){
	// Initialize slick carousel on page load
	$(".homepage .main-content .slick-carousel").slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 15000,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        autoplay: false
	      	}
	    }],
	});

	$(".homepage .main-content .slick-carousel .slick-slide01").click();
});