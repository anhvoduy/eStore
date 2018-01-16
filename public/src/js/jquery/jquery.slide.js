(function($) {
	
	$.fn.slide = function(settings){
		var _link = $(this);
		var _parent = _link.parent();
		var _slide_selector = settings.slide_selector;
		var _auto = settings.auto || false;
		var _time = settings.time || 5000;
		
		var _index = 0;
		var _max_index = $(this).length;
		var _interval;
		
		_link.click(function(){
			_index = _link.parent().find('a').index(this);
			
			if( _auto ) {
				_clear_interval();
				_set_interval();
			}
			
			_set_index();
	
			return false;
		});
		
		function _set_index(){
			_link.removeClass('active');
			_link.eq(_index).addClass('active');
			
			
			$(_slide_selector).hide();
			$(_slide_selector).eq(_index).fadeIn();
			
			
		}
		
		function _set_interval() {
			_interval = window.setInterval(_next, _time);
		}
		
		function _clear_interval(){
			window.clearInterval(_interval);
		}
		
		function _next(){
			_index++;
			if( _index == _max_index ) {
				_index = 0;
			}
			
			_set_index();
		}
		
		_set_index();
		
		if( _auto ) {
			_set_interval();
		}
	}
	
})(jQuery);