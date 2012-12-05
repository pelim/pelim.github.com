$(document).ready(function() {

	$('.cursor').blink();
	
	$('#imprint').click(function(e){
		e.preventDefault();
		$('section.content-wrapper').addClass('hidden');
		$('section.content-wrapper.imprint').removeClass('hidden');
	});
	
	$('#german').click(function(e) {
		e.preventDefault();
		$(this).addClass('hidden');
		$('#english').removeClass('hidden');
		$('section.content-wrapper').addClass('hidden');
		$('section.content-wrapper.german.home').removeClass('hidden');
	});
	
	$('#english').click(function(e) {
		e.preventDefault();
		$(this).addClass('hidden');
		$('#german').removeClass('hidden');
		$('section.content-wrapper').addClass('hidden');
		$('section.content-wrapper.english.home').removeClass('hidden');
	})
	
	$('#home').click(function(e){
		e.preventDefault();
		$('section.content-wrapper').addClass('hidden');
		$('section.content-wrapper.english.home').removeClass('hidden');
	});
	
	
});

(function($){
	$.fn.blink = function(options) {
		var element = this;
	    var settings = $.extend({
			interval: 100,
			fade: 700
		}, options);
		
		timer = setInterval(_blink, settings.interval);
		function _blink() {
			element.fadeOut(settings.fade, function() {
				element.fadeIn(settings.fade);
			});
	    }
	};
})(jQuery);
