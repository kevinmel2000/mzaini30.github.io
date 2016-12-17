$(function() {
	anon = function() {
		$(".header").attr({
			"src": "gambar/header-anon.jpg"
		})
		$(".masonry-item img").attr({
			"src": "gambar/logo-anon2.jpg"
		})
		$(".footer").removeClass("w3-deep-purple").addClass("w3-black")
		$(".footer p").html("We are Anonymous. We are Legion. We do not Forgive. We do not Forget. Expect Us")
		$("html, body").animate({
			scrollTop: 0
		}, 1000)
	}
	$masonry = $(".masonry").imagesLoaded(function() {
		$masonry.masonry({
			itemSelector: ".masonry-item"
		})
	})
})
