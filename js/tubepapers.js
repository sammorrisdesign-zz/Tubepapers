var width = $(window).width();
var slides = $(".background__item").length;
var position = 1;

$(".background").width((width * 2) * slides);
$(".background__item").width(width * 2);

function transition(direction) {

	if (direction == "left") {
		position--;
	} else if (direction == "right") {
		position++;
	}
	
	if (position <= 0) {
		position = slides;
	} else if (position > slides) {
		position = 1;
	}
	
	$(".background").css({"-webkit-transform": "translate3d(-" + (width * 2) * (position - 1) + "px, 0px, 0px)"}).addClass("animating-" + direction);
	$(".background").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		$(this).removeClass("animating-" + direction)
	});
	
	$(".selected").removeClass("selected");
	$(".background__item:nth-of-type(" + position + ")").addClass("selected");
	current = $(".selected").attr("data-class");
	$("body").removeClass().addClass(current);
}

$(document).keydown(function(e) {
	if (e.keyCode == 37) {
		transition("left");
	} else if (e.keyCode == 39) {
		transition("right");
	}
});