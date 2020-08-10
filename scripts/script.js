let c = console.log;
let is_clicked = 'no';

function moveWebToLeft(){
	$('.burger').addClass('active');
	$('.burger span').css('background-color', 'white');
	$('#web-wrapper').css({'transform': 'translateX(-200px)', 'height': '100vh', 'overflow': 'hidden'});
	$('#web-overlay').css({'height': '100vh', 'opacity': '0.6'});
	$('#mobile-nav-wrap').css({'heigh': '100vh', 'display': 'block'});
	$('#web-wrapper').addClass('active');
}

function moveWebToRight(){
	let afterTransition = function(){
		$('#mobile-nav-wrap').css('display', 'none');
		$('#web-overlay').css({'height' : '0vh'});
		$('web-wrapper').css('overflow', 'visible');
		$(this).off('transitionend', afterTransition);
	}
	$('.burger').removeClass('active');
	$('#web-wrapper').css({'transform': 'none', 'height': 'auto'});
	$('#web-overlay')
		.css({'height' : '100vh', 'opacity' : '0'})
		.on('transitionend', afterTransition);
	
	$('.burger span').css({'background-color': '#4a4a4a'});
	$('#web-wrapper').removeClass('active');
}
//let headerClone;

window.onload = function(){
	$('.burger').on('click', function(){
		if ($('#web-wrapper').hasClass('active') == false) moveWebToLeft()
		else moveWebToRight();
	});
	$('#web-overlay').on('click', function(){
		moveWebToRight();
	});
	
	$('#alphaColor').css('opacity', '0.5');
	
	// $(window).on('scroll', function(){
	// 	if(window.pageYOffset < 100){
	// 		if($('.burger').hasClass('floating')){
	// 			$('.burger')
	// 				.css('position', 'absolute')
	// 				.removeClass('floating')
	// 				.show();
	// 		}
	// 	}
	// 	if(window.pageYOffset > 100 && window.pageYOffset < 900 ){
	// 		if(!($('.burger').hasClass('floating'))){
	// 			$('.burger')
	// 				.removeClass('shown')
	// 				.addClass('floating')
	// 				.css('position', 'fixed')
	// 				.hide();
	// 		}
	// 	};
	// 	if(window.pageYOffset > 900){
	// 		if(!($('.burger').hasClass('shown'))){
	// 			$('.burger')
	// 			.removeClass('floating')
	// 			.addClass('shown')
	// 			.fadeIn();
	// 		}
	// 	}
	// });

	$(window).on('scroll', function(){

		if(window.pageYOffset > 100){
			if (window.pageYOffset < 900){
				if(!($('.burger').hasClass('floating'))){  //100<Y<900
					$('.burger')
						.removeClass('shown')
						.addClass('floating')
						.css('position', 'fixed')
						.hide();
						$('#up-button').fadeOut();
				}
			}else{
				if(!($('.burger').hasClass('shown'))){ // Y>900
					$('.burger')
						.removeClass('floating')
						.addClass('shown')
						.fadeIn();
					$('#up-button').fadeIn();
				}
			}
		}else{
			if($('.burger').hasClass('floating')){  // Y<100
				$('.burger')
					.removeClass('floating')
					.css('position', 'absolute')
					.show();
			}
		}
	});
}