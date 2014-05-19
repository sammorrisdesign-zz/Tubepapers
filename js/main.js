$(window).load(function() {
	// Go for animations
	$("body").removeClass("preload");
	$(".main__title").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$(this).css("opacity", 1);
	});
	
	$(".main__element:last-of-type .main__title").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$("body").addClass("finished");
	});
	
	// Click
	$(".main__title").click(function() {
		if ($(this).siblings(".main__links").hasClass("main__links--visible")) {
			$(this).siblings(".main__links").removeClass("main__links--visible");
		} else {
			$(".main__links--visible").removeClass("main__links--visible");
			$(this).siblings(".main__links").addClass("main__links--visible");
		}
	});
});