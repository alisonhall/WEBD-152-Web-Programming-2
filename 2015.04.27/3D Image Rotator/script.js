// // Alternate waiting until DOM is ready function
// $(document).ready(function(){
// });

// Waiting until DOM is ready (jQuery automatically knows not to start before that)
$(function(){
	var $dots = $('.dot');

	$dots.on('click', function(){
		var index = $dots.index($(this));
		$('.image-rotator').css({
			transform: 'rotateX(' + index*90 + 'deg)',
		});
	});

});