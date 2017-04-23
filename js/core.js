
$(document).ready(function() {
	
	$('.slider-1').slick({
		dots: true,
		infinite: true,

	});


	var href = null;
	 $('.open_modal').click(function() {
	 	href = $(this).attr('href');
		$(href).fadeIn();
		$('.overlay').fadeIn();
		$('.close_modal').fadeIn();

	});




	$('.close_modal, .overlay').click(function() {
		$(href).fadeOut();
		$('.overlay').fadeOut();
	});


	$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		var fixPosition = $('#gallery').offset().top - 80;

		console.log(scrollPosition);
		console.log(fixPosition);
		if (scrollPosition >= fixPosition) {
			$('header').addClass('fix');
		} else {
			$('header').removeClass('fix');
		};

		$('.nav li:not(.search) a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			var offset = refElement.offset();
			console.log(offset.top)
			if (offset.top <= scrollPosition && (offset.top + refElement.height()) > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	};
});