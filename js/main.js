$(window).ready(function() {
	// Parallax window
/*
	$(".main__title").mousemove(function(e) {
		var relX = e.pageX - $(this).offset().left;
		var relY = e.pageY - $(this).offset().top;
		var relPosition = "-" + relX / 4 + "px -" + relY / 2 + "px";
		
		$(this).css("backgroundPosition", relPosition);
	});
*/
	
	// Click
	$(".main__title").click(function() {
		$(".main__links--visible").removeClass("main__links--visible");
		$(this).siblings(".main__links").addClass("main__links--visible");
	});
});