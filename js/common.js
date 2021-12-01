$(function() {

  $('.menu-btn').on('click', function(e) {
		$('body').toggleClass('menu-openned');
	});

  var $sliderWrapper = $('.link-block_slider');
  var $slider = $('.link-block__inner', $sliderWrapper); 


  if($slider.length) {
    $('.link-block__footer-nav', $sliderWrapper).html('<span>1</span>/' + $('.link-block__item', $slider).length); 

  }


  $slider.on('afterChange', function(event, slick, currentSlide) {
    $('.link-block__footer-nav span', $sliderWrapper).html(currentSlide + 1);
  });


  $('.link-block__footer-next', $sliderWrapper).on('click', function() {
    $slider.slick('slickNext');
  });

  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    arrows: false
  });
          

  $('.mobile-menu li.has-dropdown > a').on('click', function (e) {

    $(this).parents('li').toggleClass('active');

  });

	// $('.form__input_phone').inputmask("+7 (999) 999 99 99");  //static mask


	// $('.menu a').on('click', function (e) {
	// 	var anchor = $(this).attr('href');
	// 	var scrollTop = $(anchor).offset().top - $('.header').outerHeight();
	// 	$('html, body').stop().animate({
	// 		 scrollTop: scrollTop
	// 	}, 500);
	// 	return false;
	// });



	// $(".overlay").mouseup(function (e){
	// 	var div = $(".popup");
	// 	if ( ! div.is(e.target) && div.has(e.target).length === 0) {
	// 		$(".overlay").fadeOut(); 
	// 	}
	// });
});
