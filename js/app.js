$(function() {
	$masonry = $(".masonry").imagesLoaded(function() {
		$masonry.masonry({
			itemSelector: ".masonry-item"
		})
	})
	lagu = function() {
		$(".soundcloud").height($(".soundcloud").width())
	}
	lagu()
	$(window).resize(function() {
		lagu()
	})
})
