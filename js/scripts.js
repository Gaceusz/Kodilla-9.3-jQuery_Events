$(function(){
	var carouselList = $("#carousel ul");
	function changeLeftSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}

	$('.btn-left').click(function() {
		changeLeftSlide();
	});

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function changeRightSlide() {
		moveFirstSlide();
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

	}

	$('.btn-right').click(function() {
		changeRightSlide();
	});

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:-0});
	}
});