$(function() {
	$masonry = $(".masonry").imagesLoaded(function() {
		$masonry.masonry({
			itemSelector: ".masonry-item"
		})
	})
})
