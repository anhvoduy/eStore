$( document ).ready( function(){
	$('.blink')
		.focus(function(){
			if( $(this).attr('value') == $(this).attr('title') ) {
				$(this).attr({ 'value': '' });
			}
		})
		.blur(function(){
			if( $(this).attr('value') == '' || typeof($(this).attr('value')) == 'undefined') {
				$(this).attr({ 'value': $(this).attr('title') })
			}
		});
		
	$('#slider-holder ul').jcarousel({
		scroll: 1,
		wrap: 'both',
		initCallback: _init_carousel,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
	
	$('.tabs a').slide({
		'slide_selector' : '.tab-content'
	})
});
function _init_carousel(carousel) {
	$('#slider-nav .next').bind('click', function() {
		carousel.next();
		return false;
	});
	
	$('#slider-nav .prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};