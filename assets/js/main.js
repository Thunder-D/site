$(document).ready(function(){
	// hide preloder
	$(".preloader").hide();

	// header animation on scroll
	$(window).on('load scroll',function() {
		if ($(this).scrollTop() >= 100) {
			// show header
			$("header.main-header").addClass("shown");
		} else {
			// hide header
			$("header.main-header").removeClass("shown");
		}
	});

	// input 1 styles
	$(".input__1 input, .textarea__1 textarea").focus(function(){
		if($(this).parent().hasClass("input__1"))
			$(this).prev().removeClass("input__1_blurred").addClass("input__1_focused");
		else if($(this).parent().hasClass("textarea__1"))
			$(this).prev().removeClass("textarea__1_blurred").addClass("textarea__1_focused");

		$(this).prev().parent().css({
			borderBottom : "solid 2px #f1c40f"
		});
	});
	$(".input__1 input, .textarea__1 textarea").blur(function(){
		if($(this).val() === ""){
			if($(this).parent().hasClass("input__1"))
				$(this).prev().addClass("input__1_blurred").removeClass("input__1_focused");
			else if($(this).parent().hasClass("textarea__1"))
				$(this).prev().addClass("textarea__1_blurred").removeClass("textarea__1_focused");
			$(this).prev().parent().css({
				borderBottom : "solid 2px #4e4f50"
			});
		}
	});

	// add margin to header's next element
	$("header.main-header").next().css("margin-top","85px");

	// drop down in menu
	$("ul.first-level_menu").children("li").children("a").each(function(){
		$(this).click(function(e){
			$("ul.second-level_menu").each(function(){
				$(this).slideUp(200, "easeInCirc");
			});

			if($(this).next("ul.second-level_menu").html() !== undefined){
				e.preventDefault();
				$(this).next("ul.second-level_menu").slideToggle(200, "easeInCirc");
			}
		});
	});

	// show menu content
	$(".menu").click(function(){
		$(".menu-content").animate({
			left : "0",
			opacity : "1"
		},200,"easeInCirc");
		$(".menu-wrapper").delay(300).fadeIn(200,"easeInCirc");
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay((_index * 25) + 100).animate({
				marginBottom : '0',
				opacity : "1"
			},200);
		});
	});

	// hide meny content
	$(".close-button").click(function(e){
		e.preventDefault();
		var links_length = $(".first-level_menu").children("li").length;
		// reset links' styles
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay( ( (links_length - _index) * 25 ) + 100 ).animate({
				marginBottom : '50px',
				opacity : "0"
			},200);
		});
		// hide menu link
		$(".menu-wrapper").delay( (links_length * 25) + 200).fadeOut(200,"easeInCirc");
		// hide menu content
		$(".menu-content").delay( (links_length * 25) + 600).animate({
			left : "-100%",
		},200,"easeInCirc");
	});
});
